"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const mockSlots = {
  "2024-05-15": [
    { id: 1, time: "09:00 AM", doctor: "Dr. Johnson", gender: "female" },
    { id: 2, time: "11:00 AM", doctor: "Dr. Brown", gender: "female" },
  ],
  "2024-05-16": [
    { id: 3, time: "10:00 AM", doctor: "Dr. Anderson", gender: "female" },
    { id: 4, time: "02:00 PM", doctor: "Dr. Smith", gender: "male" },
  ],
  "2024-05-20": [
    { id: 5, time: "11:00 AM", doctor: "Dr. Wilson", gender: "female" },
  ],
  "2024-05-24": [
    { id: 6, time: "03:00 PM", doctor: "Dr. Taylor", gender: "female" },
    { id: 7, time: "04:00 PM", doctor: "Dr. Roberts", gender: "male" },
  ],
  "2024-06-20": [
    { id: 8, time: "11:00 AM", doctor: "Dr. Wilson", gender: "female" },
  ],
};

export function HomePage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date(2024, 4)); // May 2024
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [doctorGender, setDoctorGender] = useState(undefined);

  const handlePreviousMonth = () =>
    setSelectedMonth(subMonths(selectedMonth, 1));
  const handleNextMonth = () => setSelectedMonth(addMonths(selectedMonth, 1));

  const filteredSlots = useMemo(() => {
    return Object.entries(mockSlots).reduce((acc, [date, slots]) => {
      const filteredSlots = slots.filter((slot) =>
        doctorGender ? slot.gender === doctorGender : true
      );
      if (filteredSlots.length > 0) {
        acc[date] = filteredSlots;
      }
      return acc;
    }, {});
  }, [doctorGender]);

  const availableDates = useMemo(() => {
    return Object.keys(filteredSlots).map((dateString) => parseISO(dateString));
  }, [filteredSlots]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleGenderChange = (value) => {
    setDoctorGender(value === "all" ? undefined : value);
  };

  const renderCalendar = () => {
    const start = startOfMonth(selectedMonth);
    const end = endOfMonth(selectedMonth);
    const days = eachDayOfInterval({ start, end });
    const startDayOfWeek = getDay(start);

    const calendarDays = Array(42)
      .fill(null)
      .map((_, index) => {
        const dayIndex = index - startDayOfWeek;
        const date = new Date(start);
        date.setDate(date.getDate() + dayIndex);
        return date;
      });

    return (
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold p-2 border-b"
          >
            {day}
          </div>
        ))}
        {calendarDays.map((date, index) => {
          const isCurrentMonth = isSameMonth(date, selectedMonth);
          const isAvailable = availableDates.some((d) => isSameDay(d, date));
          return (
            <div
              key={index}
              className={`p-2 border ${
                isCurrentMonth
                  ? isAvailable
                    ? "bg-green-100 cursor-pointer hover:bg-green-200"
                    : "bg-white"
                  : "bg-gray-100"
              }`}
              onClick={() =>
                isCurrentMonth && isAvailable && handleDateSelect(date)
              }
            >
              {isCurrentMonth && (
                <>
                  <div className="font-semibold">{format(date, "d")}</div>
                  <div className="text-xs text-gray-500">
                    {format(date, "EEE")}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto mx-auto p-4 bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen">
      <Card className="w-full shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-3xl font-bold">
            PhysioHealth Appointments
          </CardTitle>
          <CardDescription className="text-blue-100">
            Book your physiotherapy session with our expert doctors
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Select defaultValue="all" onValueChange={handleGenderChange}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Filter by gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Doctors</SelectItem>
                <SelectItem value="male">Male Doctors</SelectItem>
                <SelectItem value="female">Female Doctors</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePreviousMonth}
                className="bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-lg font-semibold">
                {format(selectedMonth, "MMMM yyyy")}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextMonth}
                className="bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-inner p-4">
            {renderCalendar()}
          </div>
          {selectedDate && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">
                Available Slots for {format(selectedDate, "EEEE, MMMM d, yyyy")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredSlots[format(selectedDate, "yyyy-MM-dd")]?.map(
                  (slot) => (
                    <Button
                      key={slot.id}
                      variant="outline"
                      className="justify-start h-auto py-3 px-4 bg-white hover:bg-blue-50"
                    >
                      <div className="text-left">
                        <div className="font-semibold">{slot.time}</div>
                        <div className="text-sm text-gray-600">
                          {slot.doctor}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {slot.gender}
                        </div>
                      </div>
                    </Button>
                  )
                )}
                {!filteredSlots[format(selectedDate, "yyyy-MM-dd")] && (
                  <p className="text-center text-gray-500 col-span-full">
                    No available slots for this date
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
