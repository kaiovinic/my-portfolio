import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../Components/Projects";

const mockProjects = [
  {
    id: "my-portfolio",
    title: "Meu Portfólio Bento",
    description: "Website de portfólio pessoal e moderno, focado em alta performance e UX.",
    longDescription: "Este projeto é a reformulação do meu portfólio profissional. Adota o design system Bento Box com paleta monocromática.",
    image: "/images/meu-portifolio.png",
    demoUrl: "https://my-portfolio-xi-eight-43.vercel.app/",
    githubUrl: "https://github.com/kaiovinic/my-portfolio",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    featured: true,
    stars: 5,
    forks: 2,
  },
  {
    id: "site-karen",
    title: "Site Karen Vanesca",
    description: "Landing page e portfolio profissional desenvolvido para designer de sobrancelhas.",
    longDescription: "Site moderno focado em conversão e usabilidade para serviços de estética.",
    image: "/images/site-karen.png",
    demoUrl: "https://site-karen.vercel.app/",
    githubUrl: "https://github.com/kaiovinic/site-karen",
    tags: ["React", "Tailwind CSS", "SEO"],
    stars: 0,
    forks: 0,
  },
  {
    id: "api-github-dev",
    title: "GitHub Dev Search",
    description: "Busca avançada de desenvolvedores usando a API oficial do GitHub.",
    longDescription: "Consome a API oficial do GitHub...",
    image: "/images/api-github.png",
    demoUrl: "https://api-github-dev-tau.vercel.app/",
    githubUrl: "https://github.com/kaiovinic/api-github-dev",
    tags: ["TypeScript", "API Integration"],
    stars: 3,
    forks: 1,
  }
];

describe("Projects Component", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  test("renders projects section title and list of project cards", () => {
    render(<Projects projects={mockProjects} />);

    expect(screen.getByRole("heading", { name: /Meus Projetos/i })).toBeInTheDocument();

    expect(screen.getByText("Meu Portfólio Bento")).toBeInTheDocument();
    expect(screen.getByText("Site Karen Vanesca")).toBeInTheDocument();
    expect(screen.getByText("GitHub Dev Search")).toBeInTheDocument();
  });

  test("displays stars and forks metrics when greater than 0", () => {
    render(<Projects projects={mockProjects} />);

    // Verify that stars and forks are rendered for 'Meu Portfólio Bento' (5 stars, 2 forks)
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    // Verify that stars and forks are rendered for 'GitHub Dev Search' (3 stars, 1 fork)
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("opens detailed modal when clicking a project card and displays stats", () => {
    render(<Projects projects={mockProjects} />);

    const portfolioCard = screen.getByRole("button", {
      name: /Ver detalhes do projeto: Meu Portfólio Bento/i,
    });
    expect(portfolioCard).toBeInTheDocument();

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    // Click to open modal
    fireEvent.click(portfolioCard);

    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveAttribute("aria-modal", "true");

    const modalTitle = screen.getByRole("heading", { name: "Meu Portfólio Bento", level: 2 });
    expect(modalTitle).toBeInTheDocument();

    // Verify metrics inside modal
    expect(screen.getAllByText("5").length).toBeGreaterThan(0); // stars in card overlay and/or modal
    expect(screen.getAllByText("2").length).toBeGreaterThan(0); // forks in card overlay and/or modal

    expect(document.body.style.overflow).toBe("hidden");

    const closeBtn = screen.getByRole("button", { name: /Fechar detalhes do projeto/i });
    expect(closeBtn).toBeInTheDocument();
    expect(document.activeElement).toBe(closeBtn);
  });

  test("closes modal and restores scroll/focus when close button is clicked", () => {
    render(<Projects projects={mockProjects} />);

    const portfolioCard = screen.getByRole("button", {
      name: /Ver detalhes do projeto: Meu Portfólio Bento/i,
    });
    
    portfolioCard.focus();
    expect(document.activeElement).toBe(portfolioCard);

    fireEvent.click(portfolioCard);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /Fechar detalhes do projeto/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(portfolioCard);
  });

  test("closes modal when pressing the Escape key", () => {
    render(<Projects projects={mockProjects} />);

    const portfolioCard = screen.getByRole("button", {
      name: /Ver detalhes do projeto: Meu Portfólio Bento/i,
    });
    
    fireEvent.click(portfolioCard);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();

    fireEvent.keyDown(modal, { key: "Escape", code: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("traps focus inside the modal during tab navigation", () => {
    render(<Projects projects={mockProjects} />);

    const portfolioCard = screen.getByRole("button", {
      name: /Ver detalhes do projeto: Meu Portfólio Bento/i,
    });
    
    fireEvent.click(portfolioCard);
    const modal = screen.getByRole("dialog");

    const closeBtn = screen.getByRole("button", { name: /Fechar detalhes do projeto/i });
    const demoLink = screen.getByRole("link", { name: /Acessar Demo/i });

    expect(document.activeElement).toBe(closeBtn);

    // Focus demo link (first element in DOM order)
    demoLink.focus();
    expect(document.activeElement).toBe(demoLink);

    // Shift+Tab should wrap to closeBtn (last element in DOM order)
    fireEvent.keyDown(modal, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(closeBtn);

    // Tab should wrap to demoLink (first element in DOM order)
    fireEvent.keyDown(modal, { key: "Tab", shiftKey: false });
    expect(document.activeElement).toBe(demoLink);
  });
});
