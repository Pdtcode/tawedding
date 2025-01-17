import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <section className=" animate-fade-in flex-col items-center justify-center md: h-full w-full">
      <div className="relative h-screen flex" >
        <Hero/>
      </div>
      <div>
        <Gallery/>
      </div>
    </section>
  );
}
