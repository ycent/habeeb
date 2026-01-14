import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { Background } from "@/components/Background";
import { Principles } from "@/components/Principles";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatIDo />
      <section id="work">
        <Projects />
      </section>
      <Leadership />
      <Background />
      <Principles />
      <Footer />
    </main>
  );
};

export default Index;
