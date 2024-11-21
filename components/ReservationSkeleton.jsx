"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";

export default function ReservationSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white flex flex-col items-center py-10">
      <header className="w-full max-w-3xl flex justify-between items-center mb-6 px-4">
        <div className="text-2xl font-bold">
          <div className="h-8 bg-black/30 rounded w-3/4 animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="text-teal-400" />
          <div className="h-6 bg-black/30 rounded w-20 animate-pulse"></div>
        </div>
      </header>
      <div className="w-full max-w-3xl space-y-6">
        <div className="flex items-center justify-center gap-4 py-8">
          <CalendarDays className="w-6 h-6 text-teal-400 animate-spin" />
          <div className="text-teal-300 text-lg font-medium">
            Loading Your Reservation
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-teal-400 animate-bounce"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
        <Card className="bg-gradient-to-br from-teal-950 to-teal-900 p-6 rounded-lg shadow-md border border-teal-700">
          <CardContent className="space-y-4">
            <div className="h-6 bg-teal-800/50 rounded-sm w-1/3 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-teal-800/50 rounded-sm w-1/4 animate-pulse"></div>
              <div className="h-4 bg-teal-800/50 rounded-sm w-1/2 animate-pulse"></div>
              <div className="h-4 bg-teal-800/50 rounded-sm w-1/3 animate-pulse"></div>
              <div className="h-4 bg-teal-800/50 rounded-sm w-1/3 animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-teal-950 to-teal-900 p-6 rounded-lg shadow-md border border-teal-700">
          <CardContent className="space-y-4">
            <div className="h-6 bg-teal-800/50 rounded-sm w-1/3 animate-pulse"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-10 bg-teal-800/50 rounded-sm animate-pulse"></div>
              <div className="h-10 bg-teal-800/50 rounded-sm animate-pulse"></div>
              <div className="h-10 bg-teal-800/50 rounded-sm animate-pulse"></div>
              <div className="h-10 bg-teal-800/50 rounded-sm animate-pulse"></div>
              <div className="h-10 bg-teal-800/50 rounded-sm animate-pulse"></div>
              <div className="h-10 bg-teal-800/50 rounded-sm animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-teal-950 to-teal-900 p-6 rounded-lg shadow-md border border-teal-700">
          <CardContent className="space-y-4">
            <div className="h-6 bg-teal-800/50 rounded-sm w-1/3 animate-pulse"></div>
            <div className="h-10 bg-teal-800/50 rounded-sm animate-pulse"></div>
          </CardContent>
        </Card>
        <div className="flex justify-center mt-6">
          <div className="h-12 bg-teal-600 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
