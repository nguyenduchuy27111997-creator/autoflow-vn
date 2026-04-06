export default function ComparisonTable({
  headers,
  rows,
  highlightCol,
}: {
  headers: string[];
  rows: string[][];
  highlightCol?: number;
}) {
  return (
    <div className="my-8 overflow-x-auto not-prose">
      <table className="w-full text-sm border-collapse min-w-[480px]">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`px-4 py-3 text-left font-display font-bold text-xs uppercase tracking-wider ${
                  i === highlightCol
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-600"
                } ${i === 0 ? "rounded-tl-lg" : ""} ${i === headers.length - 1 ? "rounded-tr-lg" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-slate-100">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 ${
                    ci === highlightCol
                      ? "bg-primary/5 font-medium text-slate-900"
                      : "text-slate-600"
                  } ${ci === 0 ? "font-medium text-slate-800" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
