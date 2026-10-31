import About from "@/Components/About";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";
import Home from "@/Components/Home";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skils from "@/Components/Skils";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Head from "next/head";
import { getGitHubProjects, Project } from "@/lib/github";
import { GetStaticProps } from "next";

interface Props {
  projects: Project[];
}

const HomePage = ({ projects }: Props) => {
  const [nav, setNav] = React.useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Animation AOS
  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>KaioDev</title>
        <link rel="icon" href="/images/avatar01.png" />
      </Head>
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Home />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skils />
          <Projects projects={projects} />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getGitHubProjects();
  return {
    props: {
      projects,
    },
    // Revalidate once every hour in production
    ...(process.env.GITHUB_ACTIONS === "true" ? {} : { revalidate: 3600 }),
  };
};

export default HomePage;
