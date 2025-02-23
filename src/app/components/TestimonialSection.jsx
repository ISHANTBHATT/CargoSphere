import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="container py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-[#e5ff00]/10"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our products and services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                "The HexaGear smartwatch has completely transformed my daily
                routine. Its health monitoring features are incredibly accurate,
                and the battery life is outstanding!"
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/OneFact.svg"
                  width={50}
                  height={50}
                  alt="Customer Avatar"
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Jane Doe</h4>
                  <p className="text-sm text-muted-foreground">
                    Fitness Enthusiast
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                "I'm impressed by the seamless integration with my smart home
                devices. The HexaGear has made my life so much more convenient!"
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/OneFact.svg"
                  width={50}
                  height={50}
                  alt="Customer Avatar"
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-muted-foreground">
                    Tech Enthusiast
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M 0 100 C 50 150, 150 150, 200 100 C 150 50, 50 50, 0 100 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-purple-500"
              />
              <path
                d="M 0 100 C 50 50, 150 50, 200 100 C 150 150, 50 150, 0 100 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-[#e5ff00]"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/OneFact.svg"
                width={300}
                height={300}
                alt="Product Image"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
