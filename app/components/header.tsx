import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full border-b-4 border-black bg-white/90">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center gap-4">
        <Link to="/" className="text-xl font-bold">
          Neobrutalism
        </Link>
        <nav className="flex flex-wrap gap-2 justify-center items-center">
          <Button
            asChild
            variant={isActive("/") ? "default" : "noShadow"}
            size="default"
          >
            <Link to="/">What defines the style</Link>
          </Button>
          <Button
            asChild
            variant={isActive("/designers") ? "default" : "noShadow"}
            size="default"
          >
            <Link to="/designers">Key practitioners</Link>
          </Button>
          <Button
            asChild
            variant={isActive("/timeline") ? "default" : "noShadow"}
            size="default"
          >
            <Link to="/timeline">Timeline</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
