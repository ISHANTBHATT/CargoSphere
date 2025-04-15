"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function VideoSection() {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden bg-white rounded-3xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiM0MEJGRkYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container relative mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:gap-12 lg:py-24">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-neutral-700 text-4xl font-bold tracking-tighter  sm:text-5xl xl:text-6xl/none">
              {/* Harness The Power Of DFOS™ */}
              Harness The Power Of
              <span className="text-secondary"> DCOS</span>
            </h1>
            <p className="max-w-[600px] text-neutral-700 md:text-xl">
              Explore how our innovative platform can transform your logistics
              operations. Featuring real-time tracking, seamless integration,
              and advanced analytics, our Digital Cargo Operating System
              streamlines the complexities of cargo management. Seize the
              opportunity to elevate your supply chain to unprecedented levels.
            </p>
          </div>
          {/* <div className="flex flex-col gap-4 lg:flex-row">
            <Button
              size="lg"
              className="bg-neutral-800 rounded-full text-white hover:bg-secondary "
            >
              Request a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-blue-400/30 rounded-full bg-transparent text-blue-400 hover:bg-blue-400/10"
            >
              <Play className="mr-2 h-4 w-4  transition-transform group-hover:scale-125" />
              View Video
            </Button>
          </div> */}
        </div>

        <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <img
              src="/images/bg2.jpg"
              alt="DFOS Dashboard Preview"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"
              >
                <Play className="h-8 w-8 text-white" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
