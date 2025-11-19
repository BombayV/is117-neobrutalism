import { Link } from "react-router";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t-4 border-black bg-white/90 mt-8">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">Neobrutalism</h3>
            <p className="text-sm text-gray-700">
              Exploring the raw, tactile aesthetic of neobrutalism in digital
              design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <nav className="space-y-2 text-sm">
              <div>
                <Link to="/" className="underline hover:font-bold">
                  What defines the style
                </Link>
              </div>
              <div>
                <Link to="/designers" className="underline hover:font-bold">
                  Key practitioners
                </Link>
              </div>
              <div>
                <Link to="/timeline" className="underline hover:font-bold">
                  Timeline
                </Link>
              </div>
            </nav>
          </div>

          {/* Creator */}
          <div>
            <h3 className="font-semibold mb-3">Creator</h3>
            <p className="text-sm text-gray-700 mb-2">
              Built with ❤️ by{" "}
              <a
                href="https://github.com/bombayv"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:font-bold"
              >
                BombayV
              </a>
            </p>
            <p className="text-xs text-gray-600">
              © {year} Neobrutalism Research
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black pt-4">
          <p className="text-xs text-center text-gray-600">
            Designed and built with raw honesty.
          </p>
        </div>
      </div>
    </footer>
  );
}
