import type { Route } from "./+types/home";
import PractitionerCard from "../components/ui/practitioner";
import type { Practitioner } from "../components/ui/practitioner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Key practitioners" },
    {
      name: "description",
      content: "Profiles and notable works of key neobrutalism practitioners",
    },
  ];
}

export default function Designers() {
  const practitioners: Practitioner[] = [
    {
      name: "Barbican Studio",
      role: "Studio — digital & experiential",
      bio: "Explores modular, repetitive systems and concrete-inspired surfaces in web projects.",
      image: "/images/barbican.png",
      years: "2008–present",
      tags: ["systems", "platforms"],
      notable: ["Housing UI — modular dashboards", "Civic portal redesign"],
    },
    {
      name: "Concrete UX",
      role: "Independent designer",
      bio: "Uses bold typography and unapologetic layouts for editorial and product interfaces.",
      image: "/images/neobrutalism-moodboard.svg",
      years: "2014–present",
      tags: ["typography", "editorial"],
      notable: [
        "Editorial theme — high-contrast reading",
        "Experimental checkout flow",
      ],
    },
    {
      name: "Tactile Labs",
      role: "Design research group",
      bio: "Combines texture, motion, and material studies to create tactile digital prototypes.",
      image: "/images/concrete-texture.svg",
      years: "2016–present",
      tags: ["research", "prototyping"],
      notable: ["Material system experiments", "Open-source texture library"],
    },
    {
      name: "Studio Grit",
      role: "Agency — product & branding",
      bio: "Applies neobrutal texture systems to product identity and brand systems with a focus on clarity.",
      years: "2012–present",
      tags: ["branding", "identity"],
      notable: ["Retail identity — tactile packaging", "Platform rebrand"],
    },
    {
      name: "Anna Concrete",
      role: "Freelance visual designer",
      bio: "Creates editorial layouts and expressive type systems with heavy borders and unapologetic scale.",
      years: "2018–present",
      tags: ["editorial", "type"],
      notable: ["Magazine redesign", "Type system for publishing"],
    },
    {
      name: "Swiss Modular",
      role: "Collective",
      bio: "A collective exploring intersections between Swiss grid discipline and brutal materiality in interfaces.",
      years: "2010–present",
      tags: ["grid", "systems"],
      notable: ["Open-source grid toolkit", "Community workshops"],
    },
  ];

  return (
    <main className="container mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Key practitioners</h1>
      <p className="mb-4">
        Short profiles and notable works. Replace these placeholders with real
        practitioners and links as research continues.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {practitioners.map((p) => (
          <PractitionerCard key={p.name} practitioner={p} />
        ))}
      </div>
    </main>
  );
}
