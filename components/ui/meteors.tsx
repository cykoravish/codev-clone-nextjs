"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {

  const [meteors, setMeteors] = useState<
    { position: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generated = new Array(number).fill(true).map((_, idx) => ({
      position: idx * (800 / number) - 400,
      delay: Math.random() * 5,
      duration: Math.floor(Math.random() * (10 - 5) + 5),
    }));

    setMeteors(generated);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:bg-gradient-to-r before:from-white before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: "-40px",
            left: meteor.position + "px",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.duration + "s",
          }}
        />
      ))}
    </motion.div>
  );
};