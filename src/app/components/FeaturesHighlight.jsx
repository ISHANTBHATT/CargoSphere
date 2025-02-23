import Image from "next/image";

export default function FeaturesHighlight() {
  return (
    <section className="w-full py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <div className="h-6 w-12 bg-black rounded-full"></div>
            <span>FROM 2023</span>
          </div>
          <h2 className="text-4xl font-bold">
            <span className="text-[#F75F00]">DCOS</span> Your Factory Co-Pilot
            {/* <span className="text-[#F75F00]">Distinctive</span> And{" "}
            <span className="text-[#F75F00]">Popular</span>? */}
          </h2>
          <p className="text-muted-foreground">
            We are developing a new Cargo Operating System that would enable the
            Cargo & Logistic Industry to function seamlessly on a Unified Cargo
            Interface/ Platform irrespective of the location/ service provided/
            internal software used
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                1
              </span>
              Repeated Data Entry with Low Data Accuracy
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                2
              </span>
              Non-standard and Disconnected Data Flows across borders
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                3
              </span>
              Connectivity issues with multiple Legacy Systems acrossvarious
              entities
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                4
              </span>
              Absence of Seamless Interoperability among Multimodal
              Operators/Agencies.
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                5
              </span>
              Lack of real-time Visibility of cargo and process flows
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                6
              </span>
              Instant Communication challenges across the supply chain
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                7
              </span>
              High dependence of Paper based Manualwork flows
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                8
              </span>
              Resource Productivity/Utilization challenges
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-[#e5ff00]/20 rounded-full"></div>
          <div className="relative ">
            <div className=" absolute z-10 flex justify-center items-center w-full h-full  rounded-full">
              <Image
                src="/images/flowImg.svg"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            {/* <div className="absolute z-10 flex justify-center items-center w-full h-full  rounded-full">
            <Image
              src="/images/flowImg.svg"
              width={200}
              height={200}
              className="object-cover sm:w-[400px] sm:h-[400px] w-[200px] h-[200px]"
              alt="Flow Image"
            />
          </div> */}
            {/* Circular dot pattern */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <circle
                  key={i}
                  cx="100"
                  cy="100"
                  r={40 + i * 10}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-200"
                  strokeDasharray="4 4"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
