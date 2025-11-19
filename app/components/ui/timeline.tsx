import React from "react";

export type TimelineEvent = {
  date: string; // ISO date or human-friendly
  title: string;
  description?: string;
  link?: { href: string; label?: string };
};

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="container mx-auto p-6">
      <div className="relative">
        <div className="block absolute left-0 top-0 bottom-0 w-1 bg-black/80" />
        <ol className="space-y-8">
          {events.map((e, idx) => (
            <li key={idx} className="relative px-6">
              <div className="mt-2 md:mt-0 p-4 border-2 border-black bg-white">
                <div className="w-28 text-sm text-gray-700">{e.date}</div>
                <h3 className="font-semibold text-lg">{e.title}</h3>
                {e.description && (
                  <p className="mt-2 text-sm">{e.description}</p>
                )}
                {e.link && (
                  <p className="mt-3 text-sm">
                    <a href={e.link.href} className="underline">
                      {e.link.label ?? e.link.href}
                    </a>
                  </p>
                )}
              </div>
              <span className="block absolute left-0 -translate-x-1.5 -translate-y-1/2 top-0 w-4 h-4 bg-white border-4 border-black rounded-full" />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
