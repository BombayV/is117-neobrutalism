export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t-4 border-black bg-white/90 mt-8">
      <div className="container mx-auto p-4 text-sm text-gray-800">
        <div className="flex items-center justify-between">
          <div>© {year} Neobrutalism Research</div>
          <div>Built with raw honesty.</div>
        </div>
      </div>
    </footer>
  );
}
