"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart as RRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Replace with real data integrations once APIs are wired
const consistency = 76;
const activityData = [
  { month: "Jan", value: 18 },
  { month: "Feb", value: 27 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 29 },
  { month: "May", value: 42 },
  { month: "Jun", value: 51 },
];
const skillData = [
  { skill: "K8s", level: 6 },
  { skill: "AWS", level: 5 },
  { skill: "DSA", level: 4 },
  { skill: "Writing", level: 3 },
  { skill: "Outreach", level: 4 },
];
const goals = [
  { name: "Finish Kubernetes course", progress: 100, status: "Completed" },
  { name: "Apply to 3 jobs", progress: 60, status: "1/3" },
  { name: "Write blog post", progress: 40, status: "In Progress" },
];

export default function Dashboard() {
  // Memoize dasharray for radial progress
  const circumference = 2 * Math.PI * 80;
  const dashOffset = useMemo(
    () => circumference * (1 - consistency / 100),
    []
  );

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Consistency Meter */}
        <Card className="flex flex-col items-center justify-center">
          <CardHeader>
            <CardTitle>Consistency Meter</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="relative">
              <svg
                width="180"
                height="180"
                className="-rotate-90 transform"
              >
                <circle
                  cx="90"
                  cy="90"
                  r="80"
                  stroke="#2D2D2D"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="90"
                  cy="90"
                  r="80"
                  stroke="#5CE1E6"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 rotate-90 flex flex-col items-center justify-center">
                <span className="text-5xl font-semibold">{consistency}%</span>
                <span className="mt-1 text-xs uppercase tracking-wide text-gray-400">
                  Daily Task<br />Completion
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData} margin={{ top: 10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                <XAxis dataKey="month" tickLine={false} />
                <YAxis tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Skill Progress Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Progress</CardTitle>
          </CardHeader>
          <CardContent style={{ height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RRadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={skillData}
              >
                <PolarGrid strokeOpacity={0.1} />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar
                  dataKey="level"
                  stroke="#5CE1E6"
                  fill="#5CE1E6"
                  fillOpacity={0.3}
                />
              </RRadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Goal Tracker */}
        <Card>
          <CardHeader>
            <CardTitle>Goal Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {goals.map((g) => (
              <div key={g.name}>
                <div className="mb-1 flex justify-between text-sm font-medium">
                  <span>{g.name}</span>
                  <span>{g.status}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="h-2 rounded-full bg-cyan-400"
                    style={{ width: `${g.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}