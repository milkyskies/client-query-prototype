"use client";

import type { FC } from "react";
import { DataCard } from "./_components/data-card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/ui/card";

const WEEKLY_SALES_DATA = [
  { day: "月", sales: 4000 },
  { day: "火", sales: 3000 },
  { day: "水", sales: 2000 },
  { day: "木", sales: 2780 },
  { day: "金", sales: 1890 },
  { day: "土", sales: 2390 },
  { day: "日", sales: 3490 },
];

const Page: FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
          <DataCard title="現在の注文数" value="10件" />
          <DataCard title="本日の予約数" value="10件" />
          <DataCard title="未処理の予約数" value="10件" />
          <DataCard title="本日の売上" value="10件" />
        </div>
        {/* End Stats Grid */}

        {/* Weekly Sales Chart */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">週間売上</h2>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={WEEKLY_SALES_DATA}
                margin={{ top: 24, right: 32, left: 24, bottom: 24 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280" }}
                  label={{
                    value: "曜日",
                    position: "bottom",
                    offset: 0,
                    fill: "#6b7280",
                  }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280" }}
                  label={{
                    value: "売上 (円)",
                    angle: -90,
                    position: "insideLeft",
                    dy: 60,
                    dx: -10,
                    fill: "#6b7280",
                  }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-2 border border-gray-200 rounded shadow">
                          <p className="text-sm text-gray-600">{`${data.day}曜日`}</p>
                          <p className="text-sm font-bold text-gray-800">{`売上: ${data.sales.toLocaleString()}円`}</p>
                        </div>
                      );
                    }

                    return;
                  }}
                />
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        {/* End Weekly Sales Chart */}
      </div>
    </div>
  );
};

export default Page;
