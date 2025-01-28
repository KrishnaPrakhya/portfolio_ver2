import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import "@/style/scroll.css";
import Services from "@/components/services";
import Contact from "@/components/Contact";
import Stats from "@/components/ui/stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="  page-background min-h-screen">
        <Header />
        <Hero />
      </div>
    </>
  );
}
