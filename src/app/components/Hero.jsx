"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "./Banner";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className=" flex flex-col gap-10 lg:flex-row justify-between items-center py-20">
      {/* <div className="absolute inset-0"> */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      >
        <source src="videos/1.mp4" type="video/mp4" />
      </motion.video>
      {/* </div> */}
      <div className="space-y-4 z-10">
        <div className="text-5xl font-bold leading-tight tracking-tighter">
          <Banner />
        </div>
        <p className="text-lg max-w-3xl text-muted-foreground">
          To craft technological solutions thatsimplify and accelerate global
          supply chainprocesses, provide data-driven insights,enable seamless
          collaboration, fosterinnovation and promote sustainability{" "}
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
          src="/images/test-logo.png"
          alt="Modern Bank Card"
          width={400}
          height={400}
          className="relative z-10 transform -rotate-12 rounded-[50px]"
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
