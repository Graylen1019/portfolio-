import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Graylen1019";
const TOKEN = process.env.GITHUB_TOKEN;

export const revalidate = 3600 * 6; // every 6 hours

export async function GET() {
  if (!TOKEN) {
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN", publicRepos: 0, totalCommits: 0 },
      { status: 200 }
    );
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        repositories(ownerAffiliations: OWNER, isFork: false) {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`GitHub GraphQL failed: ${res.status} ${text}`);
    }

    const data = await res.json();

    const user = data.data?.user;
    const totalCommits = user?.contributionsCollection?.totalCommitContributions ?? 0;
    const totalRepos = user?.repositories?.totalCount ?? 0;

    return NextResponse.json({
      publicRepos: totalRepos,
      totalCommits,
      lastUpdated: new Date().toISOString(),
    });
  } catch (err) {
    console.error("GitHub fetch failed:", err);
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub stats",
        publicRepos: 0,
        totalCommits: 0,
        lastUpdated: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
