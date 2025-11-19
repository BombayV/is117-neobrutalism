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
      <main className="container mx-auto p-6 py-12 max-w-4xl">
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
          Neobrutalism is a contemporary visual language that adapts Brutalist
          architecture's honesty and material-forward approach to digital
          design. It emphasizes function, exposed structure, and tactile
          materials while embracing strong contrasts and bold typographic
          choices.
        </p>

        <section className="mb-12 p-6 border-4 border-black bg-white">
          <h2 className="text-3xl font-bold mb-6">Core principles</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-xl">▬</span>
              <span className="text-lg">
                Visible structure and unapologetic frames
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-xl">▬</span>
              <span className="text-lg">
                High-contrast palettes and bold typography
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-xl">▬</span>
              <span className="text-lg">
                Material suggestion (concrete/metal textures) and imperfect
                details
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-xl">▬</span>
              <span className="text-lg">
                Function-first layouts with minimal ornament
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12 p-6 border-4 border-black bg-gray-50">
          <h2 className="text-3xl font-bold mb-4">
            How visitors experience it
          </h2>
          <p className="text-lg leading-relaxed">
            Visitors notice a raw, tactile UI with clear modules and strong
            visual hierarchy. Despite the rough aesthetic, usability must be
            preserved: controls should be discoverable, text readable, and
            interactive elements accessible.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Visual examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <figure className="p-4 border-4 border-black bg-white hover:shadow-lg transition">
              <img
                src="/images/barbican.png"
                alt="Barbican Centre concrete blocks"
                className="w-full h-48 object-cover border-2 border-black mb-3"
              />
              <figcaption className="font-semibold text-base">
                Barbican Centre
              </figcaption>
              <p className="text-sm text-gray-700 mt-2">
                Repetitive massing and raw concrete (architectural inspiration)
              </p>
            </figure>

            <figure className="p-4 border-4 border-black bg-white hover:shadow-lg transition">
              <img
                src="/images/concrete-texture.svg"
                alt="Concrete texture sample"
                className="w-full h-48 object-cover border-2 border-black mb-3"
              />
              <figcaption className="font-semibold text-base">
                Concrete Texture
              </figcaption>
              <p className="text-sm text-gray-700 mt-2">
                Use sparingly as background or material cue
              </p>
            </figure>

            <figure className="p-4 border-4 border-black bg-white hover:shadow-lg transition">
              <img
                src="/images/neobrutalism-moodboard.svg"
                alt="Neobrutalism moodboard"
                className="w-full h-48 object-cover border-2 border-black mb-3"
              />
              <figcaption className="font-semibold text-base">
                Moodboard
              </figcaption>
              <p className="text-sm text-gray-700 mt-2">
                Bold blocks, palette, and typographic scales
              </p>
            </figure>
          </div>
        </section>

        <section className="mt-12 p-6 border-4 border-black bg-white">
          <h2 className="text-3xl font-bold mb-6">
            Designer notes & accessibility
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-black pl-4">
              <p className="text-lg font-semibold mb-1">
                Contrast & Legibility
              </p>
              <p className="text-gray-800">
                Always verify contrast for legibility — high-contrast is core to
                the look but still must meet WCAG for body and UI text.
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p className="text-lg font-semibold mb-1">Discoverability</p>
              <p className="text-gray-800">
                Keep interactive controls discoverable — use clear affordances
                even when chrome is minimal.
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p className="text-lg font-semibold mb-1">
                Optimization & Access
              </p>
              <p className="text-gray-800">
                Optimize images and provide descriptive alt text for all visuals
                (see captions above).
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p className="text-lg font-semibold mb-1">Grid & Rhythm</p>
              <p className="text-gray-800">
                Use the grid to establish rhythm; allow imperfect details as
                accents, not obstacles.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 p-8 border-4 border-black bg-black text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to explore?</h2>
          <p className="text-lg mb-6">
            Discover key practitioners and the timeline of neobrutalism's
            evolution.
          </p>
          <div className="space-y-2">
            <p>
              <a
                href="/designers"
                className="underline font-bold text-xl hover:opacity-80"
              >
                Key practitioners →
              </a>
            </p>
            <p>
              <a
                href="/timeline"
                className="underline font-bold text-xl hover:opacity-80"
              >
                Timeline →
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
