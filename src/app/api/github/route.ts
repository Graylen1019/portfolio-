import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Graylen1019';
const TOKEN = process.env.GITHUB_TOKEN

// 1. Caching: Next.js revalidates this route data after 1 hour (3600 seconds).
export const revalidate = 3600; 

/**
 * Utility function to handle authenticated GraphQL requests to GitHub.
 */
async function graphql(query: string, variables: Record<string, unknown>) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  
  if (!res.ok) {
    const text = await res.text();
    // Catch rate limit errors (Status 403) specifically
    if (res.status === 403) {
      console.error("GitHub Rate Limit Exceeded.");
      throw new Error(`GitHub Rate Limit Exceeded (403): ${text}`);
    }
    throw new Error(`GraphQL request failed: ${res.status} ${text}`);
  }
  return res.json();
}

/**
 * Main GET handler for the API route.
 * Calculates total owned, non-forked repositories and total commits using pagination.
 */
export async function GET() {
  // 2. Authentication Check: Fail fast if the token is not loaded.
  if (!TOKEN) {
    return NextResponse.json({
      error: "GITHUB_TOKEN not set. Use an environment variable to set your GitHub token.",
      publicRepos: 0,
      totalCommits: 0,
      lastUpdated: new Date().toISOString(),
    }, { status: 200 }); // Status 200 allows frontend to show data without crash
  }

  try {
    let hasNext = true;
    let after: string | null = null;
    let totalCommits = 0;
    let totalRepos = 0;

    // 3. Optimized GraphQL Query
    const query = `
      query ($login: String!, $after: String) {
        user(login: $login) {
          repositories(first: 100, after: $after, ownerAffiliations: OWNER, isFork: false) {
            pageInfo { hasNextPage endCursor }
            nodes {
              name
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 0) {
                      totalCount
                    }
                  }
                }
              }
            }
            totalCount
          }
        }
      }
    `;

    // 4. Pagination Loop
    while (hasNext) {
      const resp = await graphql(query, { login: GITHUB_USERNAME, after });
      
      if (resp.errors) {
        throw new Error(`GitHub GraphQL errors: ${JSON.stringify(resp.errors)}`);
      }

      const repositories = resp.data.user.repositories;
      if (!repositories) break;

      // This totalCount only needs to be read once
      totalRepos = repositories.totalCount ?? totalRepos;

      for (const node of repositories.nodes) {
        // Safely extract the commit count from the history totalCount
        const commits =
          node?.defaultBranchRef?.target?.history?.totalCount ?? 0;
        totalCommits += commits;
      }

      // Update pagination state for the next loop
      hasNext = repositories.pageInfo.hasNextPage;
      after = repositories.pageInfo.endCursor;
    }

    // 5. Success Response
    return NextResponse.json({
      publicRepos: totalRepos,
      totalCommits,
      lastUpdated: new Date().toISOString(),
    });

  } catch (err) {
    console.error("GitHub Data Fetch Error:", err);
    
    // 6. Generic Error Response
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub data using GraphQL",
        publicRepos: 0,
        totalCommits: 0,
        lastUpdated: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}