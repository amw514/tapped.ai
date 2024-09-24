import { HoverEffect } from "./ui/card-hover-effect";

export function PitchCard() {
  return (
    <div className="max-w-7xl mx-auto  px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "100k performers",
    description: (
      <>
        <h4 className="mb-4 underline">
          join a thriving community of performers.
        </h4>

        <p>
          connect with a diverse network of artists and entertainers, sharing
          experiences and opportunities to elevate your live music career.
        </p>
      </>
    ),
    link: "",
  },
  {
    title: "35k venues",
    description: (
      <>
        <h4 className="mb-4 underline">access a vast network of venues</h4>

        <p>
          discover and book performances at top venues worldwide, from intimate
          clubs to grand arenas, tailored to suit your style and audience.
        </p>
      </>
    ),
    link: "",
  },
  {
    title: "160k bookings",
    description: (
      <>
        <h4 className="mb-4 underline">
          leverage over 160K successful bookings
        </h4>

        <p>
          benefit from our extensive booking data to optimize your tour plans,
          ensuring you perform at the right places, at the right times, for the
          right crowds.
        </p>
      </>
    ),
    link: "",
  },
];
