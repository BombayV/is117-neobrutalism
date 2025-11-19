import type { Route } from "./+types/home";
import HeroSection from "../components/hero-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "What defines Neobrutalism" },
    {
      name: "description",
      content: "Core principles and visitor experience of Neobrutalism",
    },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection
        title="What defines Neobrutalism"
        description="Explore the raw, tactile aesthetic that combines brutalist honesty with contemporary digital design."
      />
      <main className="container mx-auto p-6 py-12">
        <p className="mb-4">
          Neobrutalism is a contemporary visual language that adapts Brutalist
          architecture's honesty and material-forward approach to digital
          design. It emphasizes function, exposed structure, and tactile
          materials while embracing strong contrasts and bold typographic
          choices.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Core principles</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Visible structure and unapologetic frames</li>
            <li>High-contrast palettes and bold typography</li>
            <li>
              Material suggestion (concrete/metal textures) and imperfect
              details
            </li>
            <li>Function-first layouts with minimal ornament</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">How visitors experience it</h2>
          <p>
            Visitors notice a raw, tactile UI with clear modules and strong
            visual hierarchy. Despite the rough aesthetic, usability must be
            preserved: controls should be discoverable, text readable, and
            interactive elements accessible.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Visual examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <figure className="p-2 border-2 border-black">
              <img
                src="/images/barbican.png"
                alt="Barbican Centre concrete blocks"
                className="w-full h-40 object-cover"
              />
              <figcaption className="mt-2 text-sm">
                Barbican Centre — repetitive massing and raw concrete
                (architectural inspiration)
              </figcaption>
            </figure>

            <figure className="p-2 border-2 border-black">
              <img
                src="/images/concrete-texture.svg"
                alt="Concrete texture sample"
                className="w-full h-40 object-cover"
              />
              <figcaption className="mt-2 text-sm">
                Concrete texture — use sparingly as background or material cue
              </figcaption>
            </figure>

            <figure className="p-2 border-2 border-black">
              <img
                src="/images/neobrutalism-moodboard.svg"
                alt="Neobrutalism moodboard"
                className="w-full h-40 object-cover"
              />
              <figcaption className="mt-2 text-sm">
                Moodboard — bold blocks, palette, and typographic scales
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            Designer notes & accessibility
          </h2>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Always verify contrast for legibility — high-contrast is core to
              the look but still must meet WCAG for body and UI text.
            </li>
            <li>
              Keep interactive controls discoverable — use clear affordances
              even when chrome is minimal.
            </li>
            <li>
              Optimize images and provide descriptive alt text for all visuals
              (see captions above).
            </li>
            <li>
              Use the grid to establish rhythm; allow imperfect details as
              accents, not obstacles.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Resources</h2>
          <p className="mt-2">
            Explore the{" "}
            <a href="/designers" className="underline">
              Key practitioners
            </a>{" "}
            and the{" "}
            <a href="/timeline" className="underline">
              Timeline
            </a>{" "}
            to learn more.
          </p>
        </section>
      </main>
    </>
  );
}
