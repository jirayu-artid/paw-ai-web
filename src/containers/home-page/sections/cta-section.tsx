"use client";

import Image from "next/image";
import HOME_PAW_AI_LOGO from "@/assets/media/image/home-paw-ai-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { StaticImageData } from "next/image";

// Types
interface CTAContent {
  logo: StaticImageData;
  title: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
}

interface CTASectionProps {
  content?: Partial<CTAContent>;
  onSubmit?: (email: string) => void;
}

// Constants
const DEFAULT_CONTENT: CTAContent = {
  logo: HOME_PAW_AI_LOGO,
  title: "Spin up your first GPU node now.",
  description: "Get started building the future of AI.",
  inputPlaceholder: "Enter your email",
  buttonText: "Try Demo !",
};

export function CTASection({ content, onSubmit }: CTASectionProps) {
  const c = { ...DEFAULT_CONTENT, ...content };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <section
      className="container mx-auto flex flex-col items-center py-10 md:py-40 px-4 md:px-0"
      aria-labelledby="cta-title"
    >
      <div className="border border-[#602A9A80] rounded-2xl py-15 px-4 md:py-30 bg-purple-haze w-full">
        <header className="flex flex-col items-center gap-8 md:gap-10 text-center">
          <Image alt="Paw AI logo" src={c.logo} className="w-auto  h-20" />
          <div className="flex flex-col gap-4 text-center">
            <h2 id="cta-title" className="font-semibold text-3xl md:text-5xl">
              {c.title}
            </h2>
            <p className="text-sm md:text-2xl text-muted-foreground">
              {c.description}
            </p>
          </div>
        </header>

        <form
          onSubmit={handleSubmit}
          className="gap-2 mt-12 md:mt-16 flex items-center justify-center sm:flex-row w-full"
        >
          <div className="relative w-[300px]">
            <input
              name="email"
              type="email"
              placeholder={c.inputPlaceholder}
              required
              className="w-full bg-white rounded-md h-10 px-4 text-black"
            />
            <Button
              className="absolute right-1 translate-y-1 bg-[#602A9A] text-white"
              size={"sm"}
              type="submit"
            >
              {c.buttonText}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
