import { Link } from "react-router";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full border-b-4 border-black bg-white/90">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        <Link to="/" className="text-xl font-bold mb-3 md:mb-0">
          Neobrutalism
        </Link>
        <nav className="flex flex-wrap gap-2 md:gap-2 items-center">
          <Button asChild variant="noShadow" size="default">
            <Link to="/">What defines the style</Link>
          </Button>
          <Button asChild variant="noShadow" size="default">
            <Link to="/designers">Key practitioners</Link>
          </Button>
          <Button asChild variant="noShadow" size="default">
            <Link to="/timeline">Timeline</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
