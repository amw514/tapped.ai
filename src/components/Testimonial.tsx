import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "this product has changed my life. i cannot imagine a day without it!",
    name: "john draw",
    title: "ceo",
  },
  {
    quote: "the customer service is exceptional. they were there every step of the way.",
    name: "jane smith",
    title: "freelancer",
  },
  {
    quote: "i have seen a significant improvement in my productivity since using this product.",
    name: "bob johnson",
    title: "software engineer",
  },
  {
    quote: "i was skeptical at first, but now I can't recommend it enough!",
    name: "alice williams",
    title: "digital marketer",
  },
  {
    quote: "the best investment i have made in years. absolutely worth it!",
    name: "charlie brown",
    title: "entrepreneur",
  },];
