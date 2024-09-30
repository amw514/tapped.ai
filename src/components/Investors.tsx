import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "celestine amajoyi",
    role: "30x platinum selling executive",
    image: "/celestineamajoyi.jpg",
    link: "https://www.linkedin.com/in/celestine-amajoyi-34b87533",
  },
  {
    name: "quinelle holder",
    role: "grammy’s executive",
    image: "/Quinelle-Holder.jpg",
    link: "https://www.linkedin.com/in/quinelleholder",
  },
  {
    name: "anuj gupta",
    role: "former lawyer for facebook",
    image: "/anujgupta.png",
    link: "https://www.linkedin.com/in/navarrog",
  },
  {
    name: "dheeraj manjunath",
    role: " 3x exited founder",
    image: "/dheeraj.jpeg",
    link: "https://www.linkedin.com/in/dheeraj-manjunath",
  },
  {
    name: "dave harris jr.",
    role: "death row records executive",
    image: "/dave.jpg",
    link: "https://www.linkedin.com/in/navarrog",
  },
  {
    name: " alisha outridge",
    role: "former cto of tunecore",
    image: "/aleesha.jpg",
    link: "https://www.linkedin.com/in/celestine-amajoyi-34b87533",
  },
];

export default function Investors() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
      {founders.map((founder, index) => (
        <Link href={founder.link} key={index} className="block">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative w-full h-64">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  layout="fill"
                  objectFit="cover"
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
