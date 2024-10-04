import React from "react";
import { BsCheckCircle } from "react-icons/bs";

function Everything() {
  const everythingData = [
    {
      title: "Stick to your budget",
      subtitle:
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Get quality work done quickly",
      subtitle:
        "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
    },
    {
      title: "Pay when you're happy",
      subtitle:
        "Upfront quotes mean no surprises. Payments only get released when you approve.",
    },
    {
      title: "Count on 24/7 support",
      subtitle:
        "Our round-the-clock support team is available to help anytime, anywhere.",
    },
  ];

  return (
    <div className="relative flex justify-evenly items-center py-32 px-40 bg-[#f1fdf7]"> {/* Increased padding and even spacing */} 
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/everything.webp')" }}></div>

      {/* Left Side (Text Content) */}
      <div className="relative w-2/3 grid grid-cols-2 gap-8 z-10">
        <h2 className="col-span-2 text-4xl font-bold text-[#404145] mb-10">
          The best part? Everything.
        </h2>
        {everythingData.map(({ title, subtitle }) => (
          <div key={title} className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-2 text-xl text-[#404145]">
              <BsCheckCircle className="text-[#1DBF73]" />
              <h4 className="font-semibold">{title}</h4>
            </div>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Everything;
