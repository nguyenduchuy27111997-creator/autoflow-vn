"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface DailyData {
  date: string;
  leads: number;
}

interface UTMData {
  source: string;
  avg_score: number;
  count: number;
}

interface TierData {
  name: string;
  value: number;
  fill: string;
}

export default function AnalyticsCharts({
  dailyData,
  utmData,
  tierData,
}: {
  dailyData: DailyData[];
  utmData: UTMData[];
  tierData: TierData[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Line Chart: Leads per day */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 lg:col-span-2">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">
          Leads per Day (30 days)
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              interval="preserveStartEnd"
            />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} allowDecimals={false} />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                fontSize: "13px",
              }}
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#0066FF"
              strokeWidth={2}
              dot={{ r: 3, fill: "#0066FF" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart: UTM Source × Avg Score */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">
          UTM Source × Avg Score
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={utmData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis type="number" tick={{ fontSize: 11, fill: "#94A3B8" }} domain={[0, 100]} />
            <YAxis
              type="category"
              dataKey="source"
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              width={80}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                fontSize: "13px",
              }}
              formatter={(value: unknown, name: unknown) => [
                name === "avg_score" ? `${value}/100` : String(value),
                name === "avg_score" ? "Avg Score" : "Leads",
              ]}
            />
            <Bar dataKey="avg_score" fill="#0066FF" radius={[0, 4, 4, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart: Tier Distribution */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">
          Lead Tier Distribution
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={tierData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
              labelLine={{ stroke: "#94A3B8" }}
            >
              {tierData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                fontSize: "13px",
              }}
            />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{ fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
