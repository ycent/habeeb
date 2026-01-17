import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { Background } from "@/components/Background";
import { Quote } from "@/components/Quote";
import { Principles } from "@/components/Principles";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { ProofOfWork } from "@/components/ProofOfWork";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <GrainOverlay />
      <Header />
      <Hero />
      <WhatIDo />
      <section id="work">
        <Projects />
      </section>
      <Leadership />
      <Background />
      <Quote />
      <ProofOfWork />
      <Principles />
      <Footer />
    </main>
  );
};

export default Index;
