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
    <section className="w-full border-b-4 border-black bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-black mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
