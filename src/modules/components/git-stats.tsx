// components/GitStats.tsx
"use client";
import { useEffect, useState } from "react";
import { FaCodeCommit, FaFolderTree } from "react-icons/fa6";

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

    console.log("this ran")

    return (
        <div
            data-aos="fade-left"
            className=" space-y-1 items-center"
            
        >
            <p className="font-semibold text-3xl">
                GitHub <b className="text-purple-400">Stats</b>
            </p>
            <p className="text-2xl inline-flex items-center">
                <FaFolderTree size={20} className="mr-4"/> Repositories:
                <span className="font-bold ml-2 text-purple-400">
                    {stats.publicRepos ?? "—"}
                </span>
            </p>
            <p className="text-2xl flex items-center">
                <FaCodeCommit size={20} className="mr-4"/> Commits:
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
