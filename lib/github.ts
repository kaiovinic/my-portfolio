import { PROJECTS_IMAGES } from "../data/projectsMetadata";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoUrl: string;
  githubUrl?: string;
  tags: string[];
  featured?: boolean;
  stars: number;
  forks: number;
}

export function getOfflineFallbackProjects(): Project[] {
  return Object.entries(PROJECTS_IMAGES).map(([repoName, image]) => ({
    id: repoName,
    title: repoName.split(/[-_]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    description: "Carregado a partir do cache offline local.",
    longDescription: "Mapeamento local ativado devido a uma falha de conexão com a API do GitHub.",
    image: image,
    demoUrl: "#",
    githubUrl: `https://github.com/Kaiovinic/${repoName}`,
    tags: ["Offline"],
    featured: repoName === "my-portfolio",
    stars: 0,
    forks: 0,
  }));
}

export async function getGitHubProjects(): Promise<Project[]> {
  try {
    const username = "Kaiovinic";
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;

    const headers: Record<string, string> = {
      "User-Agent": "Kaiovinic-Portfolio",
      "Accept": "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers } as any);

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos)) {
      throw new Error("GitHub API did not return an array of repositories");
    }

    // Filter repos containing 'portfolio-featured' topic
    const featuredRepos = repos.filter((repo: any) => {
      const topics = repo.topics || [];
      return topics.includes("portfolio-featured");
    });

    // If no repos are tagged with portfolio-featured, fall back to offline curated list
    if (featuredRepos.length === 0) {
      return getOfflineFallbackProjects();
    }

    // Map and build dynamic project objects from GitHub fields
    return featuredRepos.map((repo: any) => {
      const repoName = repo.name;
      const topics = repo.topics || [];
      
      // Filter out technical topics and capitalize tags
      let tags = topics
        .filter((t: string) => t !== "portfolio-featured" && t !== "featured")
        .map((t: string) => t.charAt(0).toUpperCase() + t.slice(1));
      
      // Fallback if no tags/topics are set on GitHub
      if (tags.length === 0 && repo.language) {
        tags = [repo.language];
      } else if (tags.length === 0) {
        tags = ["GitHub Project"];
      }

      // Generate a clean title from repository name (splitting dashes/underscores)
      const title = repoName
        .split(/[-_]/)
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return {
        id: repoName,
        title: title,
        description: repo.description || "Sem descrição definida no GitHub.",
        longDescription: repo.description || "Sem descrição longa definida. Confira os detalhes e o código completo no repositório do GitHub.",
        image: PROJECTS_IMAGES[repoName] || "/images/github.png",
        demoUrl: repo.homepage || repo.html_url,
        githubUrl: repo.html_url,
        tags: tags,
        featured: topics.includes("featured") || repoName === "my-portfolio",
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
      };
    });
  } catch (error) {
    console.error("Error fetching projects from GitHub API, using offline fallback:", error);
    return getOfflineFallbackProjects();
  }
}
