export type Practitioner = {
  name: string;
  role?: string;
  bio?: string;
  image?: string; // public path, e.g. /images/foo.svg
  notable?: string[];
  tags?: string[];
  years?: string;
};

export default function PractitionerCard({
  practitioner,
}: {
  practitioner: Practitioner;
}) {
  return (
    <article className="p-4 border-2 border-black bg-white flex gap-4 items-start">
      <div className="w-32 h-24 shrink-0 border-2 border-black overflow-hidden">
        {practitioner.image ? (
          // public/ is served from site root, so use absolute path
          // width/height left to CSS for responsiveness
          <img
            src={practitioner.image}
            alt={`${practitioner.name} image`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm">
            No image
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="text-xl font-semibold">{practitioner.name}</h3>
            {practitioner.role && (
              <div className="text-sm text-gray-700">{practitioner.role}</div>
            )}
          </div>
          {practitioner.years && (
            <div className="text-sm text-gray-600">{practitioner.years}</div>
          )}
        </div>

        {practitioner.bio && <p className="mt-2 text-sm">{practitioner.bio}</p>}

        {practitioner.tags && practitioner.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {practitioner.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 border-2 border-black">
                {t}
              </span>
            ))}
          </div>
        )}

        {practitioner.notable && practitioner.notable.length > 0 && (
          <div className="mt-3">
            <strong className="text-sm">Notable works:</strong>
            <ul className="list-disc ml-6 mt-1 text-sm">
              {practitioner.notable.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
