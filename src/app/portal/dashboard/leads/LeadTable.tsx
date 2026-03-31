"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { type ScoredLead, TIER_CONFIG } from "@/types/leads";

const PAGE_SIZE = 20;

const columns: ColumnDef<ScoredLead>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <a
        href={`/portal/dashboard/leads/${encodeURIComponent(row.original.email)}`}
        className="font-medium text-slate-900 hover:text-primary transition-colors"
      >
        {row.original.name || "—"}
      </a>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "composite_score",
    header: "Score",
    cell: ({ row }) => {
      const score = row.original.composite_score;
      const tier = row.original.tier;
      const cfg = TIER_CONFIG[tier];
      return (
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-sm tabular-nums">{score}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${cfg.color}`}>
            {cfg.label}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "source_type",
    header: "Source",
    cell: ({ getValue }) => {
      const src = getValue() as string;
      const colors: Record<string, string> = {
        quiz: "bg-purple-100 text-purple-700",
        audit: "bg-blue-100 text-blue-700",
        pdf: "bg-green-100 text-green-700",
      };
      return (
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${colors[src] || "bg-slate-100 text-slate-600"}`}>
          {src}
        </span>
      );
    },
  },
  {
    accessorKey: "utm_source",
    header: "UTM",
    cell: ({ getValue }) => (
      <span className="text-xs text-slate-400">{(getValue() as string) || "direct"}</span>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ getValue }) => {
      const d = new Date(getValue() as string);
      return (
        <span className="text-xs text-slate-400 tabular-nums">
          {d.toLocaleDateString("vi-VN")} {d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}
        </span>
      );
    },
  },
];

export default function LeadTable({ leads }: { leads: ScoredLead[] }) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "composite_score", desc: true },
  ]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const filteredData = useMemo(() => {
    let data = leads;
    if (tierFilter !== "all") data = data.filter((l) => l.tier === tierFilter);
    if (sourceFilter !== "all") data = data.filter((l) => l.source_type === sourceFilter);
    return data;
  }, [leads, tierFilter, sourceFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: PAGE_SIZE } },
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Search name or email..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 w-64"
        />
        <select
          value={tierFilter}
          onChange={(e) => setTierFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 bg-white"
        >
          <option value="all">All Tiers</option>
          <option value="hot">Hot (70+)</option>
          <option value="warm">Warm (40-69)</option>
          <option value="cold">Cold (&lt;40)</option>
        </select>
        <select
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 bg-white"
        >
          <option value="all">All Sources</option>
          <option value="quiz">Quiz</option>
          <option value="audit">Audit</option>
          <option value="pdf">PDF</option>
        </select>
        <span className="text-xs text-slate-400 ml-auto">
          {table.getFilteredRowModel().rows.length} leads
        </span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="border-b border-slate-100">
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-700 select-none"
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: " ↑",
                        desc: " ↓",
                      }[header.column.getIsSorted() as string] ?? ""}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => window.location.href = `/portal/dashboard/leads/${encodeURIComponent(row.original.email)}`}
                className="border-b border-slate-50 hover:bg-primary/5 transition-colors cursor-pointer"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {table.getRowModel().rows.length === 0 && (
          <div className="py-12 text-center text-sm text-slate-400">
            No leads found
          </div>
        )}
      </div>

      {/* Pagination */}
      {table.getPageCount() > 1 && (
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-slate-400">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
