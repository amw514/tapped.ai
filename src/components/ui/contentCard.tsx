import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "johannes naylor",
    role: "co-founder",
    image: "/johannes-naylor.jpeg",
    link: "/founders/johannes-naylor",
  },
  {
    name: "ilias anwar",
    role: "co-founder",
    image: "/illiasanwar.jpg",
    link: "/founders/ilias-anwar",
  },
];

export default function Founders() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
      {founders.map((founder, index) => (
        <Link href={founder.link} key={index} className="block">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative w-full h-64">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-4 bg-gradient-to-b from-primary/10 to-primary/30">
                <h3 className="text-xl text-white font-semibold">
                  {founder.name}
                </h3>
                <p className="text-sm text-white/80">{founder.role}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
