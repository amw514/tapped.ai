import { Card, CardContent } from "@/components/ui/card"

const founders = [
  {
    name: "johannes naylor",
    role: "co-founder",
    image: "/johannes-naylor.jpeg"
  },
  {
    name: "ilias anwar",
    role: "co-founder",
    image: "/illiasanwar.jpg"
  }
]

export default function ContentCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
      {founders.map((founder, index) => (
        <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-0">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-gradient-to-b from-primary/10 to-primary/30">
              <h3 className="text-xl text-white font-semibold ">{founder.name}</h3>
              <p className="text-sm text-white -foreground/80">{founder.role}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}