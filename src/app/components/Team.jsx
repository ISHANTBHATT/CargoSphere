import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Kamal Jain",
    role: "Co Founder & ED",
    image: "/images/p1.png",
  },
  {
    name: "Rishi Khare",
    role: "Co Founder & CTO",
    image: "/images/p2.png",
  },
  {
    name: "Rajeev K Thukral",
    role: "Co-Founder & Director",
    image: "/images/p3.png",
  },
  {
    name: "Murray Smith",
    role: "Advisor & Mentor",
    image: "/images/p4.png",
  },
  {
    name: "Wayne Dunne",
    role: "Advisor & Mentor",
    image: "/images/p5.png",
  },
  {
    name: "Saurabh Kumar",
    role: "Mentor",
    image: "/images/p6.png",
  },
];

export default function Team() {
  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-wider text-gray-600 mb-4">
          PROFESSIONAL
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-700">
          Core Team
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="text-center flex flex-col items-center"
          >
            <div className="relative w-40 aspect-square mb-6 group rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-display mb-2">{member.name}</h3>
            <p className="text-sm tracking-wider text-gray-600">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
