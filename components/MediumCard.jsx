import Image from "next/image";
import React from "react";

export default function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition duration-300 ease-out">
      <div className="relative h-44 w-44 sm:w-80 sm:h-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
