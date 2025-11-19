import React from "react";

export type HeroSectionProps = {
  title: string;
  description?: string;
  subtitle?: string;
};

export default function HeroSection({
  title,
  description,
  subtitle,
}: HeroSectionProps) {
  return (
    <section className="w-full border-b-4 border-black bg-gray-100 py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto px-2">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
