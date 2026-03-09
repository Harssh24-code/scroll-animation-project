"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const carRef = useRef<HTMLImageElement | null>(null);
 const statsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {

    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2
      });
    }

    gsap.from(statsRef.current.filter(Boolean), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      delay: 0.5
    });

    const handleScroll = () => {

      const scrollY = window.scrollY;

      if (carRef.current) {
        gsap.to(carRef.current, {
          x: scrollY * 0.5,
          duration: 0.3
        });
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

<section className="min-h-screen bg-gray-200 flex items-center justify-center relative overflow-hidden">

<div className="absolute top-10 flex gap-6">

<div ref={(el) => (statsRef.current[0] = el)} className="bg-lime-400 p-6 rounded-xl w-56 text-center">
<h2 className="text-4xl font-bold">58%</h2>
<p>Increase in pick up point use</p>
</div>

<div ref={(el) => (statsRef.current[1] = el)} className="bg-gray-800 text-white p-6 rounded-xl w-56 text-center">
<h2 className="text-4xl font-bold">27%</h2>
<p>Increase in pick up point use</p>
</div>

</div>

<h1 ref={titleRef} className="text-[90px] font-extrabold tracking-[25px]">
WELCOME ITZFIZZ
</h1>

import Image from "next/image";

<Image
  ref={carRef}
  src="/car.png"
  alt="car"
  width={500}
  height={300}
  className="absolute right-0"
/>

<div className="absolute bottom-20 flex gap-6">

<div ref={(el) => (statsRef.current[2] = el)} className="bg-sky-400 p-6 rounded-xl w-56 text-center">
<h2 className="text-4xl font-bold">23%</h2>
<p>Decreased in customer phone calls</p>
</div>

<div ref={(el) => (statsRef.current[3] = el)} className="bg-orange-500 p-6 rounded-xl w-56 text-center">
<h2 className="text-4xl font-bold">40%</h2>
<p>Decreased in customer phone calls</p>
</div>

</div>

</section>

  );
}