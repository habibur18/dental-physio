import { CalendarDays } from "lucide-react";

export default function CalendarLoading() {
  return (
    <div className="relative z-20 bg-gradient-to-br from-teal-950 to-teal-900 p-8">
      <div className=" max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-2 animate-pulse text-center flex flex-col items-center">
          <div className="h-8 w-64 bg-teal-800/50 rounded-lg" />
          <div className="h-4 w-96 bg-teal-800/30 rounded-lg" />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          {["All Dentors", "Male Dentors", "Female Dentors"].map((pill, i) => (
            <div
              key={pill}
              className="h-10 px-6 rounded-full bg-teal-800/20 animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="border border-teal-700/50 rounded-xl p-4 bg-teal-900/50 backdrop-blur-sm">
          {/* Calendar Header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-teal-400 text-center text-sm">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid Skeleton */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-teal-800/20 animate-pulse"
                style={{ animationDelay: `${i * 30}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Time Slots Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-xl bg-teal-800/20 animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        {/* Loading Indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4 py-8">
          <CalendarDays className="w-6 h-6 text-teal-400 animate-spin" />
          <div className="text-teal-300 text-lg font-medium">
            Loading Your Schedule
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
      </div>
    </div>
  );
}
