import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            choose your plan
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            select the perfect plan for your needs. whether you are a performer,
            music professional, or engineer, we have got you covered.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="w-full aspect-[4/3] relative mb-4">
                <Image
                  src="/tapped-premium.png"
                  alt="Tapped Premium"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
              <CardTitle>tapped premium</CardTitle>
              <CardDescription>(for performers)</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold">$9.99</div>
              <p className="text-sm text-muted-foreground">per month</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="https://app.tapped.ai/">get started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="w-full aspect-[4/3] relative mb-4">
                <Image
                  src="/tapped-business.png"
                  alt="Tapped Business"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
              <CardTitle>tapped business</CardTitle>
              <CardDescription>(for music professionals)</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-2xl">book a demo</div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full" asChild>
                <Link href="https://cal.com/jonaylor89/tapped-business-demo">get started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="w-full aspect-[4/3] relative mb-4">
                <Image
                  src="/tapped-developer.png"
                  alt="Tapped API"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
              <CardTitle>tapped api</CardTitle>
              <CardDescription>(for engineers)</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-2xl">book a demo</div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full" asChild>
                <Link href="https://airtable.com/appYRewbrhhuCyBIt/pag8R05c8wpSQ8ltp/form">contact us</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
