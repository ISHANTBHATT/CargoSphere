import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "./Banner";

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 lg:flex-row justify-between items-center py-20">
      <div className="space-y-4">
        <div className="text-5xl font-bold leading-tight tracking-tighter">
          <Banner />
        </div>
        <p className="text-lg text-muted-foreground">
          Turning 1000-days digital transformation journey into a 15-days sprint
        </p>
        <Button
          variant="outline"
          className="rounded-full mt-4 w-full sm:w-40 bg-neutral-900 text-white hover:bg-neutral-900/90 hover:text-white py-6"
        >
          Explore More →
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-[#e5ff00]/20 rounded-3xl transform rotate-6"></div>
        <Image
          src="/images/DFOS.svg"
          alt="Modern Bank Card"
          width={400}
          height={400}
          className="relative z-10 transform -rotate-12"
        />
        {/* <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 z-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="bg-purple-500/20 rounded-sm animate-float"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
