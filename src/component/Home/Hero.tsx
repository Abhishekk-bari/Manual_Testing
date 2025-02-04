// import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { FlipText } from "@/components/ui/flip-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import img from '../../assets/QoTZyI7CkM97mFm0elr4g0yNc.png'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';



export default function Hero() {
  const navigate = useNavigate();

  const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(imgRef.current, { y: -1 }, { y: 10, repeat: -1, yoyo: true, ease: "bounce.out", duration: 1.5 });
    }, []);


  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  
  const handleGetStarted = () => {
    navigate("/dashboard"); // Replace with your desired route
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40vw] border-b-gray-200 border-b-2 bg-[#f1f0ee]">
      <div className="z-10 flex items-center justify-center pb-10">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ 100+ Test Scenarios</span>
          </AnimatedShinyText>
        </div>
      </div>

      {/* Title Section */}
      <div className="flex mb-1 font-bold tracking-tighter md:text-5xl lg:text-9xl text-black text-center">
        <FlipText word="Test" />
        <h1 className="pl-6 text-[#e4bfc7]">Wise</h1>
      </div>

      {/* Subtitle and Description Section */}
      <div className="text-center max-w-3xl">
        <h2 className="text-xl md:text-3xl font-serif mt-6">
          "Your Ultimate Guide to{" "}
          <span className="underline underline-offset-8 decoration-[#e4bfc7]">
            Manual Testing Interviews
          </span>"
        </h2>
      </div>

      <div className="relative flex flex-col items-center">
  {/* Arrow Image - Positioned Absolutely */}
  <div className="absolute top-[-18px] left-[-50px]">
    <img ref={imgRef} src={img} alt="Arrow pointing to Get Started" className="w-28 h-28 rotate-[-10deg]" />
  </div>

  {/* Get Started Button Section */}
  <div className="pt-14 flex gap-5 items-center">
    <ShinyButton onClick={handleGetStarted}>Get Started</ShinyButton>
    <p className="">★★★★ | 4.9 rating Based on 300k Users</p>
  </div>
</div>


      <div className="flex flex-row items-center justify-center mt-20 w-full">
        <AnimatedTooltip items={people} />
      </div>

     
    </div>
  );
}
