import { HoverEffect } from "./ui/card-hover-effect";

export function PitchCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "100k",
    description: (
      <>
        <h4 className="mb-4 underline">Join a thriving community of performers.</h4>
       
        <p>
          Connect with a diverse network of artists and entertainers, sharing
          experiences and opportunities to elevate your live music career.
        </p>
      </>
    ),
    link: "/",
  },
  {
    title: "35k",
    description: (
      <>
        <h4 className="mb-4 underline">Access a vast network of venues</h4>
       
        <p>
          Discover and book performances at top venues worldwide, from intimate
          clubs to grand arenas, tailored to suit your style and audience.
        </p>
      </>
    ),
    link: "/",
  },
  {
    title: "160k",
    description: (
      <>
        <h4 className="mb-4 underline">Leverage over 160K successful bookings</h4>
        
        <p>
          Benefit from our extensive booking data to optimize your tour plans,
          ensuring you perform at the right places, at the right times, for the
          right crowds.
        </p>
      </>
    ),
    link: "/",
  },
];
