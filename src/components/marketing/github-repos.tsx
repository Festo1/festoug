import { Star, ExternalLink } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

// GitHub's conventional language colors — categorical data, not UI accents
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#663399",
  Shell: "#89e051",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
};

function formatPushedAt(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function GithubRepos({ repos }: { repos: GitHubRepo[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {repos.map((repo, index) => (
        <li
          key={repo.id}
          style={{ animationDelay: `${Math.min(index * 60, 360)}ms` }}
          className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500"
        >
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col h-full bg-eerie-black-1 border border-jet rounded-[16px] p-5 transition-[border-color,box-shadow] duration-300 hover:border-orange-yellow-crayola/40 hover:shadow-[0_10px_40px_-8px_rgba(127,34,254,0.25)]"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="text-white-2 text-[15px] font-bold font-head leading-snug break-all group-hover:text-orange-yellow-crayola transition-colors">
                {repo.name}
              </h4>
              <ExternalLink
                className="w-4 h-4 shrink-0 text-light-gray-70 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden
              />
            </div>

            <p className="text-light-gray text-sm font-light leading-relaxed line-clamp-2 mb-4 flex-1">
              {repo.description || "No description provided."}
            </p>

            <div className="flex items-center gap-4 text-[12px] font-mono text-light-gray-70">
              {repo.language && (
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/10"
                    style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#8b8b8b" }}
                    aria-hidden
                  />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="inline-flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" aria-hidden />
                  {repo.stargazers_count}
                </span>
              )}
              <span className="ml-auto">Updated {formatPushedAt(repo.pushed_at)}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
