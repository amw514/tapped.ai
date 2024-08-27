import { SquareArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BookingInfoSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 ">live music bookings powered by data</h2>
          <p className="text-lg text-muted-foreground">
            tapped ai is leveraging data analytics to match performers (musicians)
            with the perfect venues for their performances. our technology will
            help you open for bigger performers, get shows in your city, and help
            you throw your next tour.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <SquareArrowDownRight className="w-6 h-6 text-primary" />
              <p className="text-neutral-400">reach 50,000+ venues and get booked more</p>
            </div>
            <div className="flex items-center space-x-3">
              <SquareArrowDownRight className="w-6 h-6 text-primary" />
              <p className="text-neutral-400">
                open for your favorite artists and collaborate
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <SquareArrowDownRight className="w-6 h-6 text-primary" />
              <p className="text-neutral-400">detailed venue analytics for informed bookings</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/Frame-5.png"
            alt="Booking Info visualization"
            width={750}
            height={750}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInfoSection;
