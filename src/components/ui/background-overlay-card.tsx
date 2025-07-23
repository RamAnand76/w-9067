"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface BackgroundOverlayCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  backgroundImage: string;
  stepNumber: number;
  index: number;
}

export default function BackgroundOverlayCard({ 
  icon: Icon, 
  title, 
  description, 
  backgroundImage, 
  stepNumber,
  index 
}: BackgroundOverlayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="max-w-xs w-full"
    >
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
          "bg-cover bg-center",
          "before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-40",
          "hover:before:opacity-60",
          "hover:scale-105",
          "transition-all duration-500"
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-4 right-4 w-8 h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-50">
          {stepNumber}
        </div>
        
        <div className="absolute top-4 left-4 w-12 h-12 bg-teal-100/20 dark:bg-teal-900/20 backdrop-blur-sm rounded-full flex items-center justify-center z-50">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-2xl text-white relative mb-2">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-100 relative leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}