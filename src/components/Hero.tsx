import Image from "next/image";

import type { StaticImageData } from "next/image";

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={imgData} alt={imgAlt} priority fill className="object-cover brightness-75" />
      </div>

      <div className="flex items-center justify-center pt-48">
        <h1 className="text-6xl text-white">{title}</h1>
      </div>
    </section>
  );
}
