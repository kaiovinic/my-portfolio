import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

/* Os efeitos (retrato em código, cursor, ímã, paralaxe, slider) ficam em
   public/js/portfolio.js: um único requestAnimationFrame, sem dependências. */

const NAV = [
  ["sobre", "SOBRE"],
  ["habilidades", "HABILIDADES"],
  ["projetos", "PROJETOS"],
  ["curriculo", "CURRÍCULO"],
  ["contato", "CONTATO"],
] as const;

const MARQUEE = ["FULL-STACK", "REACT & NEXT.JS", "NODE & NESTJS", "C# / .NET", "TOTVS PROTHEUS", "CLEAN ARCHITECTURE"];

const SKILLS = [
  { title: "FRONT-END & MOBILE", items: ["React.js", "Next.js", "React Native", "Angular", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "Material UI", "PO-UI", "TanStack Query", "Zustand"] },
  { title: "BACK-END & APIS", items: ["Node.js", "NestJS", "C#", ".NET", "ASP.NET Core", "APIs RESTful", "GraphQL", "WebSockets", "JWT", "RBAC", "Microsserviços"] },
  { title: "DADOS & ORMS", items: ["PostgreSQL", "MySQL", "Prisma ORM", "Entity Framework Core", "Unit of Work", "SOQL"] },
  { title: "ERP & CRM", items: ["TOTVS Protheus", "ADVPL", "TLPP", "Customização de rotinas", "Salesforce (Apex, SOQL, DML)"] },
  { title: "TESTES & QUALIDADE", items: ["Jest", "Vitest", "Cypress", "React Testing Library", "Testes de integração", "Clean Architecture", "SOLID"] },
  { title: "DEVOPS & INFRA", items: ["Docker", "Docker Compose", "GitHub Actions", "Linux VPS", "Caddy", "Vite", "Vercel", "Git"] },
];

const GITHUB = "https://github.com/kaiovinic";
const LINKEDIN = "https://linkedin.com/in/kaioviniciussilva";
const EMAIL = "silvasantoskaiovinicius@gmail.com";

const ext = { target: "_blank", rel: "noopener" };

function Marquee({ words, times }: { words: string[]; times: number }) {
  return (
    <>
      {Array.from({ length: times }).flatMap((_, r) =>
        words.map((w, i) => (
          <Fragment key={`${r}-${i}`}>
            <span>{w}</span>
            <b>•</b>
          </Fragment>
        ))
      )}
    </>
  );
}

/* print do projeto dentro de uma moldura de navegador */
function Shot({ src, url, alt }: { src: string; url: string; alt: string }) {
  return (
    <figure className="slide-shot">
      <div className="shot-bar" aria-hidden="true">
        <i></i><i></i><i></i>
        <span>{url}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" draggable={false} />
    </figure>
  );
}

export default function HomePage() {
  const { basePath } = useRouter();

  return (
    <>
      <Head>
        <title>Kaio Vinicius Silva — Desenvolvedor Full-Stack</title>
        <meta
          name="description"
          content="Portfólio de Kaio Vinicius Silva — Desenvolvedor Full-Stack. React, Next.js, Node.js, NestJS, C#, .NET e TOTVS Protheus."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${basePath}/images/avatar01.png`} />
      </Head>

      <div className="grain" aria-hidden="true"></div>
      <div className="cursor" id="cursor" aria-hidden="true"><i></i><b>ARRASTE</b></div>

      <header className="topbar">
        <a href="#top" className="brand" data-magnet>KAIO VINICIUS</a>
        <nav className="topnav">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <button className="burger" id="burger" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </header>

      <div className="drawer" id="drawer">
        {NAV.map(([id, label], i) => <a key={id} href={`#${id}`}>(0{i + 1}) {label}</a>)}
      </div>

      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="hero-stage" id="heroStage">
          {/* eslint-disable-next-line @next/next/no-img-element -- o canvas lê os pixels desta imagem */}
          <img
            id="portraitSrc"
            className="hero-photo"
            src={`${basePath}/images/portrait.png`}
            alt=""
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <canvas id="codeLayer" aria-hidden="true"></canvas>
        </div>

        <div className="hero-inner">
          <p className="kicker"><span id="clock">--:--:--</span> · SALVADOR, BA · DISPONÍVEL</p>
          <h1 className="hero-title">
            <span className="line"><span>DESENVOLVEDOR</span></span>
            <span className="line"><span className="serif">full-stack</span></span>
          </h1>
          <p className="hero-sub">Sistemas corporativos, plataformas de dados em tempo real e APIs escaláveis. React, Node/NestJS, C#/.NET e TOTVS Protheus.</p>
          <div className="hero-actions">
            <a className="btn" href="#projetos" data-magnet>VER PROJETOS <i>→</i></a>
            <a className="btn ghost" href="#contato" data-magnet>FALAR COMIGO</a>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track"><Marquee words={MARQUEE} times={3} /></div>
        </div>
      </section>

      {/* ============ SOBRE ============ */}
      <section className="section light" id="sobre">
        <div className="sec-head"><span className="sec-num">(01) SOBRE</span></div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="big-title">SOBRE <span className="serif">mim</span></h2>
            <p className="lead reveal">Vim do atendimento e do contato direto com o cliente. Passei seis anos entendendo o que o negócio precisa antes de escrever a primeira linha de código — e isso mudou o jeito como eu desenvolvo.</p>
            <p className="reveal">Hoje sou Desenvolvedor Full-Stack na AMVOX, onde construo interfaces de alta complexidade em React e TypeScript, APIs em C# e ASP.NET Core, e customizações no ERP TOTVS Protheus com ADVPL, TLPP e PO-UI. Liderei a migração do React 17 para o 19 numa base legada, com até 60% de ganho no tempo de carregamento.</p>
            <p className="reveal">Fora do trabalho, construo sistemas do zero. O DevRadar é uma plataforma distribuída que monitora oito canais de vagas em tempo real, com mais de mil testes automatizados e 95% de cobertura. O PrintGest é um ERP em produção numa indústria gráfica.</p>
            <p className="reveal">Clean Architecture, SOLID e testes não são enfeite de currículo aqui: são o que faz o sistema continuar barato de manter no segundo ano.</p>
            <div className="socials reveal">
              <a href={GITHUB} {...ext} aria-label="GitHub" data-magnet><FaGithub aria-hidden="true" /></a>
              <a href={LINKEDIN} {...ext} aria-label="LinkedIn" data-magnet><FaLinkedinIn aria-hidden="true" /></a>
              <a href={`mailto:${EMAIL}`} aria-label="E-mail" data-magnet><HiOutlineMail aria-hidden="true" /></a>
            </div>
          </div>

          {/* crachá pendurado: o cordão e o cartão giram juntos em volta do topo (física em portfolio.js) */}
          <div className="badge-zone" id="badgeZone">
            <div className="badge-rig" id="badgeRig">
              <span className="lanyard" aria-hidden="true"></span>
              <span className="badge-clip" aria-hidden="true"><i></i></span>
              <aside className="id-card" id="idCard" aria-label="Crachá de Kaio Vinicius Silva">
                <div className="id-top">
                  <span className="id-brand">KV<b>.</b></span>
                  <span className="id-role">FULL-STACK DEVELOPER</span>
                </div>
                <div className="id-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${basePath}/images/portrait.png`} alt="Foto de Kaio Vinicius Silva" draggable={false} />
                </div>
                <div className="id-body">
                  <h3 className="id-name">KAIO VINICIUS<br />SILVA</h3>
                  <dl className="id-rows">
                    <div><dt>LOCALIZAÇÃO</dt><dd>Salvador — BA</dd></div>
                    <div><dt>TELEFONE</dt><dd>(71) 98649-7888</dd></div>
                    <div><dt>E-MAIL</dt><dd className="small">{EMAIL}</dd></div>
                    <div><dt>FORMAÇÃO</dt><dd>ADS — Descomplica</dd></div>
                    <div><dt>EM TI DESDE</dt><dd>2022</dd></div>
                    <div><dt>STATUS</dt><dd><em className="dot"></em> Disponível</dd></div>
                  </dl>
                  <div className="barcode" aria-hidden="true"></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HABILIDADES ============ */}
      <section className="section dark" id="habilidades">
        <div className="sec-head"><span className="sec-num">(02) HABILIDADES</span></div>
        <h2 className="big-title">COM O QUE EU <span className="serif">trabalho</span></h2>

        <div className="skills">
          {SKILLS.map((s, i) => (
            <article className="skill reveal" key={s.title}>
              <span className="skill-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <div className="marquee alt" aria-hidden="true">
        <div className="marquee-track rev"><Marquee words={["PROJETOS"]} times={12} /></div>
      </div>

      {/* ============ PROJETOS ============ */}
      <section className="section dark projects" id="projetos">
        <div className="sec-head"><span className="sec-num">(03) PROJETOS</span></div>

        <div className="proj-top">
          <h2 className="big-title">MEUS <span className="serif">projetos</span></h2>
          <p className="proj-hint">Arraste para o lado ou use as setas <span className="keys">← →</span></p>
        </div>

        <div className="slider" id="slider">
          <div className="slides" id="slides">

            <article className="slide has-shot">
              <span className="slide-ghost" aria-hidden="true">RADAR</span>
              <div className="slide-body">
                <span className="slide-num">01</span>
                <p className="slide-tag">PROJETO PRÓPRIO · EM PRODUÇÃO</p>
                <h3 className="slide-title">DEV<span>RADAR</span></h3>
                <p className="slide-desc">Agregador e curador autônomo de vagas tech em tempo real. Monitora oito canais de coleta (LinkedIn, InHire, GitHub Issues, Remotar e outros), com padrão Decorator e <em>exponential backoff</em> para proteção de IP, filas cadenciadas, cache idempotente no PostgreSQL e encerramento automático de vagas via webhooks.</p>
                <ul className="chips">{["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "Caddy", "GitHub Actions", "Clean Architecture"].map((c) => <li key={c}>{c}</li>)}</ul>
                <ul className="stats">
                  <li><strong>+1.000</strong><span>testes automatizados</span></li>
                  <li><strong>+95%</strong><span>de cobertura</span></li>
                  <li><strong>8</strong><span>canais integrados</span></li>
                </ul>
                <div className="slide-links"><a href={GITHUB} {...ext} data-magnet>VER CÓDIGO</a></div>
              </div>
              <Shot src={`${basePath}/images/projects/devradar.png`} url="devradar · vagas" alt="Tela de vagas do DevRadar, com filtros por tecnologia, senioridade e modalidade" />
            </article>

            <article className="slide has-shot">
              <span className="slide-ghost" aria-hidden="true">ERP</span>
              <div className="slide-body">
                <span className="slide-num">02</span>
                <p className="slide-tag">PRINT IMPRESSÕES · EM PRODUÇÃO</p>
                <h3 className="slide-title">PRINT<span>GEST</span></h3>
                <p className="slide-desc">ERP completo para indústria gráfica. API REST em C# e ASP.NET Core com Clean Architecture, Repository Pattern e Unit of Work com controle transacional para concorrência de estoque e pedidos. SPA em React 19 cobrindo orçamentos, pedidos, produção e auditoria, com JWT, RBAC e trilha de auditoria completa.</p>
                <ul className="chips">{["ASP.NET Core 10", "C#", "React 19", "TypeScript", "Vite", "TanStack Query", "MySQL", "Zod"].map((c) => <li key={c}>{c}</li>)}</ul>
                <div className="slide-links">
                  <a href="https://printgest.printimpressoes.com.br/" {...ext} data-magnet>VER SISTEMA</a>
                  <a href={`${GITHUB}/Frontend_PrintGest`} {...ext} data-magnet>VER CÓDIGO</a>
                </div>
              </div>
              <Shot src={`${basePath}/images/projects/printgest.png`} url="printgest.printimpressoes.com.br" alt="Tela de login do PrintGest" />
            </article>

            <article className="slide has-shot">
              <span className="slide-ghost" aria-hidden="true">PRINT</span>
              <div className="slide-body">
                <span className="slide-num">03</span>
                <p className="slide-tag">PRINT IMPRESSÕES · NO AR</p>
                <h3 className="slide-title">LANDING <span>PAGE</span></h3>
                <p className="slide-desc">Landing page comercial de alta conversão para captação de clientes da Print Impressões, gráfica de Alagoinhas. Apresenta os serviços de sublimação, serigrafia e impressão digital, com portfólio de trabalhos e pedido de orçamento direto pelo WhatsApp.</p>
                <ul className="chips">{["HTML", "CSS", "JavaScript", "SEO", "Responsivo"].map((c) => <li key={c}>{c}</li>)}</ul>
                <div className="slide-links">
                  <a href="https://printimpressoes.com.br/" {...ext} data-magnet>VER SITE</a>
                  <a href={`${GITHUB}/LandingPage_PrintImpressoes`} {...ext} data-magnet>VER CÓDIGO</a>
                </div>
              </div>
              <Shot src={`${basePath}/images/projects/print-impressoes.png`} url="printimpressoes.com.br" alt="Topo da landing page da Print Impressões" />
            </article>

            <article className="slide">
              <span className="slide-ghost" aria-hidden="true">AMVOX</span>
              <div className="slide-body">
                <span className="slide-num">04</span>
                <p className="slide-tag">AMVOX · CORPORATIVO</p>
                <h3 className="slide-title">DASHBOARDS <span>&amp; ERP</span></h3>
                <p className="slide-desc">Dashboards interativos de KPIs em tempo real consolidando dados de vendas e produção para a diretoria, e customizações avançadas no TOTVS Protheus em ADVPL, TLPP, Angular e PO-UI que reduziram o tempo de atendimento de chamados internos.</p>
                <ul className="chips">{["React", "TypeScript", "Material UI", "C#", "ASP.NET Core", "MySQL", "ADVPL", "TLPP", "PO-UI"].map((c) => <li key={c}>{c}</li>)}</ul>
                <ul className="stats">
                  <li><strong>60%</strong><span>mais rápido após migrar React 17 → 19</span></li>
                </ul>
              </div>
            </article>

            <article className="slide has-shot">
              <span className="slide-ghost" aria-hidden="true">WEB</span>
              <div className="slide-body">
                <span className="slide-num">05</span>
                <p className="slide-tag">PROJETO PRÓPRIO</p>
                <h3 className="slide-title">ESTE <span>PORTFÓLIO</span></h3>
                <p className="slide-desc">Next.js com export estático no GitHub Pages. O retrato do topo é desenhado num canvas: cada caractere da minha stack vira um pixel, colorido pela luminosidade da foto. Cursor, ímã nos botões, crachá com física de pêndulo e paralaxe rodam num único <code>requestAnimationFrame</code>, sem bibliotecas de animação.</p>
                <ul className="chips">{["Next.js", "TypeScript", "Canvas 2D", "CSS", "GitHub Actions"].map((c) => <li key={c}>{c}</li>)}</ul>
                <div className="slide-links"><a href={`${GITHUB}/my-portfolio`} {...ext} data-magnet>VER CÓDIGO</a></div>
              </div>
              <Shot src={`${basePath}/images/projects/portfolio.webp`} url="kaiovinic.github.io/my-portfolio" alt="Topo deste portfólio, com o retrato desenhado em código" />
            </article>

          </div>

          <div className="slider-bar">
            <div className="counter"><span id="cur">01</span> / <span id="total">05</span></div>
            <div className="arrows">
              <button id="prev" aria-label="Projeto anterior" data-magnet>←</button>
              <button id="next" aria-label="Próximo projeto" data-magnet>→</button>
            </div>
            <div className="progress"><i id="progress"></i></div>
          </div>
        </div>
      </section>

      {/* ============ CURRÍCULO ============ */}
      <section className="section light" id="curriculo">
        <div className="sec-head"><span className="sec-num">(04) CURRÍCULO</span></div>
        <h2 className="big-title">MEU <span className="serif">currículo</span></h2>

        <div className="cv">
          <div className="cv-col">
            <h4 className="cv-head">EXPERIÊNCIA</h4>

            <div className="cv-item reveal">
              <span className="cv-date">OUT 2024 — JUL 2026</span>
              <h5>DESENVOLVEDOR FULL-STACK</h5>
              <p className="cv-org">AMVOX · Salvador, BA</p>
              <ul>
                <li>Interfaces web responsivas de alta complexidade em React.js, TypeScript e Material UI / Tailwind CSS, com padrões rigorosos de acessibilidade e reuso de componentes.</li>
                <li>Liderou a refatoração e migração do React 17 para o React 19 em base legada — até 60% de melhoria no tempo de carregamento.</li>
                <li>APIs RESTful resilientes em C# e ASP.NET Core integradas a MySQL, com autenticação segura e tratamento estruturado de exceções.</li>
                <li>Customizações avançadas no ERP TOTVS Protheus (ADVPL, TLPP, Angular e PO-UI), reduzindo o tempo de atendimento de chamados internos.</li>
                <li>Dashboards interativos de KPIs em tempo real para apoio à decisão da diretoria.</li>
              </ul>
            </div>

            <div className="cv-item reveal">
              <span className="cv-date">MAI 2018 — SET 2024</span>
              <h5>ANALISTA DE ATENDIMENTO &amp; NEGÓCIOS</h5>
              <p className="cv-org">ARCOM S.A. · Salvador, BA</p>
              <ul>
                <li>Interface direta entre demandas de clientes e processos internos, com análise de dados e relatórios estratégicos.</li>
                <li>Elevou a satisfação do cliente de 84% para 95% liderando iniciativas de relacionamento.</li>
                <li>Mapeamento de requisitos de software e transição estruturada para a área de tecnologia.</li>
              </ul>
            </div>
          </div>

          <div className="cv-col">
            <h4 className="cv-head">FORMAÇÃO</h4>

            <div className="cv-item reveal">
              <span className="cv-date">CONCLUÍDO EM JUL 2026</span>
              <h5>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h5>
              <p className="cv-org">Faculdade Descomplica</p>
              <p>Graduação em ADS.</p>
            </div>

            <div className="cv-item reveal">
              <span className="cv-date">FORMAÇÕES COMPLEMENTARES</span>
              <h5>CURSOS TÉCNICOS</h5>
              <ul>
                <li>Desenvolvimento Web Avançado — Mais1Code (2023)</li>
                <li>Desenvolvimento Web &amp; Programação — SENAI BA (2022)</li>
                <li>Desenvolvimento Web Full-Stack — SENAC BA (2022)</li>
              </ul>
            </div>

            <div className="cv-item reveal">
              <span className="cv-date">CERTIFICAÇÕES</span>
              <h5>CURSOS RELEVANTES</h5>
              <ul>
                <li>React do Zero à Maestria &amp; Next.js Avançado (55h)</li>
                <li>C# Completo &amp; Programação Orientada a Objetos (38h)</li>
                <li>SOLID, Design Patterns &amp; Arquitetura de Software</li>
                <li>Testes Automatizados no Frontend (Jest, Cypress, RTL)</li>
                <li>Administrador &amp; Analista Salesforce Completo (10h)</li>
                <li>JavaScript ES6+, MySQL &amp; Algoritmos (120h)</li>
                <li>React Native: Desenvolvimento Mobile Multiplataforma</li>
                <li>Clean Architecture e Microsserviços na Prática</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTATO ============ */}
      <section className="section dark contact" id="contato">
        <div className="sec-head"><span className="sec-num">(05) CONTATO</span></div>

        <h2 className="contact-title">ENTRE EM <span className="serif">contato</span></h2>
        <p className="contact-sub">Disponível para oportunidades e projetos. Respondo rápido.</p>

        <div className="contact-grid">
          <a className="contact-item" href={`mailto:${EMAIL}`}>
            <span>E-MAIL</span><strong>{EMAIL}</strong>
          </a>
          <a className="contact-item" href="https://api.whatsapp.com/send/?phone=5571986497888&text&type=phone_number&app_absent=0" {...ext}>
            <span>WHATSAPP</span><strong>+55 71 98649-7888</strong>
          </a>
          <a className="contact-item" href={LINKEDIN} {...ext}>
            <span>LINKEDIN</span><strong>/in/kaioviniciussilva</strong>
          </a>
          <a className="contact-item" href={GITHUB} {...ext}>
            <span>GITHUB</span><strong>@kaiovinic</strong>
          </a>
        </div>

        <footer className="foot">
          <span>© 2026 KAIO VINICIUS SILVA · SALVADOR, BA</span>
          <a href="#top" data-magnet>VOLTAR AO TOPO ↑</a>
        </footer>
      </section>

      <Script src={`${basePath}/js/portfolio.js`} strategy="afterInteractive" />
    </>
  );
}
