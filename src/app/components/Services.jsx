import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Types Of Business And Personal Accounts",
    description:
      "You Can Easily Open Any Type Of Account, Including Personal And Business, And Manage It Online. We Will Keep You Updated And Add Better Services For You.",
    icon: "🏦",
  },
  {
    title: "Opening Of Essential Bank Account",
    description:
      "It Is Not Impossible To Open An Account In An Online And Simple Way With Just Two Steps, You Can Open Your Free And Create A Fast And Safe Bank Account For Yourself Or Your Loved Ones.",
    icon: "💳",
  },
  {
    title: "Information And Essential Accounts",
    description:
      "See The Most Complete Information Of Your Bank Account Information And Everything You Need To Manage Your Account Is Here.",
    icon: "📊",
  },
];

export default function Services() {
  return (
    <section className="container py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold">
          Up-To-Date And Fast Banking Services In One Place
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-[#e5ff00]">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            className="border-none shadow-none bg-gray-50"
          >
            <CardContent className="p-6">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
