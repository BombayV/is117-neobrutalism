import type { Route } from "./+types/home";
import TimelineComponent, {
  type TimelineEvent,
} from "../components/ui/timeline";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Neobrutalism timeline" },
    {
      name: "description",
      content:
        "History and key moments in neobrutalism and its relation to other movements",
    },
  ];
}

const events: TimelineEvent[] = [
  {
    date: "1950s",
    title: "Emergence of Brutalist architecture",
    description:
      "Post-war architecture emphasizes raw materials, concrete, and structural honesty.",
  },
  {
    date: "1960s–1970s",
    title: "Peak of Brutalism",
    description:
      "Large civic projects and cultural buildings showcase exposed concrete and modular repetition — the formal language that later informs digital neobrutal aesthetics.",
  },
  {
    date: "1980s",
    title: "Critique and decline",
    description:
      "Brutalism faces public criticism for perceived coldness and maintenance challenges; many buildings fall out of favor while the visual language endures.",
  },
  {
    date: "1990s",
    title: "Early web experiments",
    description:
      "Designers on the emerging web begin to experiment with stark layouts, visible grids, and outspoken typography — a raw digital sensibility appears.",
  },
  {
    date: "2000s",
    title: "Polish and minimalism",
    description:
      "The web moves toward sleeker, polished interfaces and minimalism, though grassroots experiments keep raw aesthetics alive in niche projects.",
  },
  {
    date: "2010s",
    title: "Revival and reinterpretation",
    description:
      "Neobrutalism surfaces as a named aesthetic in web/UI communities: designers mix Swiss grid discipline with material rawness and bold type.",
  },
  {
    date: "mid-2010s",
    title: "Tooling and sharing",
    description:
      "Moodboards, CSS experiments, and pattern libraries circulate online, helping the neobrutal look spread and evolve rapidly.",
  },
  {
    date: "late-2010s",
    title: "Design systems & accessibility awareness",
    description:
      "As the aesthetic is adopted more widely, designers begin reconciling aggressive visuals with accessibility and usability best practices.",
  },
  {
    date: "2020s",
    title: "Diverse cross-disciplinary movement",
    description:
      "Neobrutalism broadens to include product UI, graphic design, and experiential projects; accessibility and usability practices mature alongside the aesthetic.",
    link: { href: "/", label: "Research notes" },
  },
];

export default function Timeline() {
  return (
    <main className="container mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Timeline</h1>

      <TimelineComponent events={events} />
    </main>
  );
}
