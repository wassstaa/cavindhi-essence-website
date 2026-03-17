export default function NotesVisual({ notes }: any) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {Object.entries(notes).map(([layer, items]) => (
        <div key={layer}>
          <h4 className="font-serif capitalize mb-2">{layer} Notes</h4>
          <ul className="text-sm text-neutral-700">
            {(items as string[]).map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
