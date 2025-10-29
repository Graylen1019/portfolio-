// components/GitStats.tsx
"use client";
import { useEffect, useState } from "react";

type Stats = {
    publicRepos: number;
    totalCommits: number;
    lastUpdated?: string;
    error?: string;
};

export function GitStats() {
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        fetch("/api/github")
            .then((r) => r.json())
            .then(setStats)
            .catch((e) => {
                console.error(e);
                setStats({ publicRepos: 0, totalCommits: 0, lastUpdated: new Date().toISOString(), error: "Failed to load" });
            });
    }, []);

    if (!stats) return

    return (
        <div
            data-aos="fade-up"
            className="text-center space-y-1 text-sm md:text-base font-anton"
        >
            <p className="font-semibold text-3xl">
                GitHub <b className="text-purple-400">Stats</b>
            </p>
            <p className="text-2xl">
                📁 Repositories:
                <span className="font-bold ml-2 text-purple-400">
                    {stats.publicRepos ?? "—"}
                </span>
            </p>
            <p className="text-2xl">
                🧠 Commits:
                <span className="font-bold ml-2 text-purple-400">{stats.totalCommits ?? "—"}
                </span>
            </p>
            {stats.lastUpdated && (
                <p className="text-muted-foreground">
                    Updated: {new Date(stats.lastUpdated).toLocaleString()}
                </p>
            )}
        </div>
    );
}
