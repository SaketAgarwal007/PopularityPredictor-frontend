import { motion } from "framer-motion"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { year: 2023, value: 5 },
  { year: 2024, value: 8 },
  { year: 2025, value: 15 },
  { year: 2026, value: 10 },
  { year: 2027, value: 12 },
  { year: 2028, value: 18 },
  { year: 2029, value: 15 },
  { year: 2030, value: 8 },
]

export function PredictionGraph() {
  return (
    <motion.div
      className="bg-[#1E1E1E] rounded-lg p-6 shadow-xl h-[400px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-bold text-white mb-4">Popularity Prediction</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="year" stroke="#6B7280" tick={{ fill: "#6B7280" }} />
          <YAxis stroke="#6B7280" tick={{ fill: "#6B7280" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E1E1E",
              border: "1px solid #374151",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#F3F4F6" }}
            itemStyle={{ color: "#7C3AED" }}
          />
          <Area type="monotone" dataKey="value" stroke="#7C3AED" fillOpacity={1} fill="url(#gradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

