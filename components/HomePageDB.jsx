// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   addMonths,
//   eachDayOfInterval,
//   endOfMonth,
//   format,
//   getDay,
//   isSameDay,
//   isSameMonth,
//   parseISO,
//   startOfMonth,
//   subMonths,
// } from "date-fns";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useEffect, useMemo, useState } from "react";

// // Assuming fetched data structure from MongoDB
// export function HomePageDB() {
//   const [slots, setSlots] = useState([]);
//   // const [selectedMonth, setSelectedMonth] = useState(new Date(2024, 9)); // October 2024
//   const [selectedMonth, setSelectedMonth] = useState(new Date()); // October 2024
//   const [selectedDate, setSelectedDate] = useState(undefined);
//   const [doctorGender, setDoctorGender] = useState(undefined);

//   useEffect(() => {
//     const localDate = new Date(); // Current date in user's local time
//     setSelectedMonth(new Date(localDate.getFullYear(), localDate.getMonth())); // Set to current month
//   }, []);

//   // Fetch data from the backend
//   useEffect(() => {
//     async function fetchSlots() {
//       const res = await fetch("/api/slots");
//       const data = await res.json();
//       setSlots(data); // Assuming the data matches the structure you've shown in MongoDB
//       console.log();
//     }
//     fetchSlots();
//   }, []);
//   console.log(slots);
//   const handlePreviousMonth = () =>
//     setSelectedMonth(subMonths(selectedMonth, 1));
//   const handleNextMonth = () => setSelectedMonth(addMonths(selectedMonth, 1));

//   // Adjusted filtering logic based on gender and date
//   const filteredSlots = useMemo(() => {
//     if (!doctorGender) return slots;
//     return slots.filter(
//       (slot) => slot.gender.toLowerCase() === doctorGender.toLowerCase()
//     );
//   }, [doctorGender, slots]);

//   const availableDates = useMemo(() => {
//     return filteredSlots.map((slot) => parseISO(slot.date));
//   }, [filteredSlots]);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const handleGenderChange = (value) => {
//     setDoctorGender(value === "all" ? undefined : value);
//   };

//   const renderCalendar = () => {
//     const start = startOfMonth(selectedMonth);
//     const end = endOfMonth(selectedMonth);
//     const days = eachDayOfInterval({ start, end });
//     const startDayOfWeek = getDay(start);

//     // Generate 42 calendar cells (6 weeks)
//     const calendarDays = Array(42)
//       .fill(null)
//       .map((_, index) => {
//         const dayIndex = index - startDayOfWeek;
//         const date = new Date(start);
//         date.setDate(date.getDate() + dayIndex);
//         return date;
//       });

//     console.log(filteredSlots);
//     return (
//       <div className="grid grid-cols-7 gap-1">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <div
//             key={day}
//             className="text-center text-sm font-semibold p-2 border-b"
//           >
//             {day}
//           </div>
//         ))}
//         {calendarDays.map((date, index) => {
//           const isCurrentMonth = isSameMonth(date, selectedMonth);
//           const isAvailable = availableDates.some((d) => isSameDay(d, date));
//           return (
//             <div
//               key={index}
//               className={`p-2 border ${
//                 isCurrentMonth
//                   ? isAvailable
//                     ? "bg-green-100 cursor-pointer hover:bg-green-200"
//                     : "bg-white"
//                   : "bg-gray-100"
//               }`}
//               onClick={() =>
//                 isCurrentMonth && isAvailable && handleDateSelect(date)
//               }
//             >
//               {isCurrentMonth && (
//                 <>
//                   <div className="font-semibold">{format(date, "d")}</div>
//                   <div className="text-xs text-gray-500">
//                     {format(date, "EEE")}
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className="container mx-auto mx-auto p-4 bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen">
//       <Card className="w-full shadow-lg">
//         <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//           <CardTitle className="text-3xl font-bold">
//             PhysioHealth Appointments
//           </CardTitle>
//           <CardDescription className="text-blue-100">
//             Book your physiotherapy session with our expert doctors
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <Select defaultValue="all" onValueChange={handleGenderChange}>
//               <SelectTrigger className="w-[180px] bg-white">
//                 <SelectValue placeholder="Filter by gender" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Doctors</SelectItem>
//                 <SelectItem value="male">Male Doctors</SelectItem>
//                 <SelectItem value="female">Female Doctors</SelectItem>
//               </SelectContent>
//             </Select>
//             <div className="flex items-center space-x-4">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={handlePreviousMonth}
//                 className="bg-white"
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>
//               <span className="text-lg font-semibold">
//                 {format(selectedMonth, "MMMM yyyy")}
//               </span>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={handleNextMonth}
//                 className="bg-white"
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-inner p-4">
//             {renderCalendar()}
//           </div>
//           {selectedDate && (
//             <div className="mt-6">
//               <h3 className="text-xl font-semibold mb-4">
//                 Available Slots for {format(selectedDate, "EEEE, MMMM d, yyyy")}
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {filteredSlots
//                   .filter((slot) =>
//                     isSameDay(parseISO(slot.date), selectedDate)
//                   )
//                   .sort((a, b) => {
//                     const timeA = new Date(
//                       `1970-01-01T${convertTo24HourFormat(a.time)}`
//                     );
//                     const timeB = new Date(
//                       `1970-01-01T${convertTo24HourFormat(b.time)}`
//                     );
//                     return timeA - timeB;
//                   })
//                   .map((slot) => (
//                     <Button
//                       key={slot._id}
//                       variant="outline"
//                       className="justify-start h-auto py-3 px-4 bg-white hover:bg-blue-50"
//                     >
//                       <div className="text-left">
//                         <div className="font-semibold">{slot.time}</div>
//                         <div className="text-sm text-gray-600">
//                           {slot.doctor}
//                         </div>
//                         <div className="text-xs text-gray-500 capitalize">
//                           {slot.gender}
//                         </div>
//                       </div>
//                     </Button>
//                   ))}

//                 {!filteredSlots.some((slot) =>
//                   isSameDay(parseISO(slot.date), selectedDate)
//                 ) && (
//                   <p className="text-center text-gray-500 col-span-full">
//                     No available slots for this date
//                   </p>
//                 )}
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// function convertTo24HourFormat(timeStr) {
//   // Example input: "09:00 AM", "03:00 PM"
//   const [time, modifier] = timeStr.split(" ");

//   let [hours, minutes] = time.split(":");

//   // Ensure that hours is treated as a string for padStart
//   hours = String(hours);

//   // Handle AM/PM conversion
//   if (modifier === "PM" && hours !== "12") {
//     hours = String(parseInt(hours, 10) + 12);
//   } else if (modifier === "AM" && hours === "12") {
//     hours = "00";
//   }

//   // Ensure that the hours part is always two digits using padStart
//   return `${hours.padStart(2, "0")}:${minutes}:00`;
// }

// main component
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
  max,
  min,
  parseISO,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export function HomePageDB() {
  const [slots, setSlots] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [doctorGender, setDoctorGender] = useState(undefined);
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);

  useEffect(() => {
    async function fetchSlots() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/slots`);
      const data = await res.json();
      setSlots(data);

      // Parse the date values properly to get min/max dates
      const dates = data.map((slot) => parseISO(slot.date));
      console.log(dates);

      // Set min and max dates
      const newMinDate = min(dates);
      const newMaxDate = max(dates);

      setMinDate(newMinDate);
      setMaxDate(newMaxDate);
    }
    fetchSlots();
  }, []);

  console.log(minDate, maxDate); // This should now correctly log min/max dates

  // Previous month navigation
  const handlePreviousMonth = () => {
    const previousMonth = subMonths(selectedMonth, 1);
    // Prevent navigating before the minDate
    if (minDate && previousMonth >= startOfMonth(minDate)) {
      setSelectedMonth(previousMonth);
    }
  };

  // Next month navigation
  const handleNextMonth = () => {
    const nextMonth = addMonths(selectedMonth, 1);
    // Prevent navigating beyond the maxDate
    if (maxDate && nextMonth <= endOfMonth(maxDate)) {
      setSelectedMonth(nextMonth);
    }
  };

  const filteredSlots = useMemo(() => {
    const filtered = slots.filter(
      (slot) =>
        (!doctorGender ||
          slot.gender.toLowerCase() === doctorGender.toLowerCase()) &&
        isSameMonth(parseISO(slot.date), selectedMonth)
    );
    return filtered;
  }, [doctorGender, selectedMonth, slots]);

  const availableDates = useMemo(() => {
    return filteredSlots.map((slot) => parseISO(slot.date));
  }, [filteredSlots]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleGenderChange = (value) => {
    setDoctorGender(value === "all" ? undefined : value);
    setSelectedDate(undefined); // Reset selected date when changing gender
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
          const hasMale = filteredSlots.some(
            (slot) =>
              isSameDay(parseISO(slot.date), date) &&
              slot.gender.toLowerCase() === "male"
          );
          const hasFemale = filteredSlots.some(
            (slot) =>
              isSameDay(parseISO(slot.date), date) &&
              slot.gender.toLowerCase() === "female"
          );

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
                  <div className="flex space-x-1 mt-1">
                    {hasMale && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                    {hasFemale && (
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    )}
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
    <div className="container mx-auto p-4 bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen">
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
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-lg font-semibold">
                {format(selectedMonth, "MMMM yyyy")}
              </span>
              <Button variant="outline" size="icon" onClick={handleNextMonth}>
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
                {filteredSlots
                  .filter((slot) =>
                    isSameDay(parseISO(slot.date), selectedDate)
                  )
                  .sort((a, b) => {
                    const timeA = new Date(
                      `1970-01-01T${convertTo24HourFormat(a.time)}`
                    );
                    const timeB = new Date(
                      `1970-01-01T${convertTo24HourFormat(b.time)}`
                    );
                    return timeA - timeB;
                  })
                  .map((slot) => (
                    <div
                      key={slot._id}
                      className="border p-4 rounded-lg hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="text-lg font-semibold">
                        {/* {format(parseISO(slot.date), "h:mm a")} new */}
                        {slot.time}
                      </div>
                      <div className="text-sm text-gray-500 flex gap-3 items-center">
                        <Image
                          src={
                            slot.gender.toLowerCase() === "male"
                              ? "/maleIcon.svg"
                              : "/FemaleIcon.svg"
                          }
                          width={20}
                          height={20}
                          alt=""
                        />
                        {slot.gender.toLowerCase() === "male"
                          ? "Male Doctor"
                          : "Female Doctor"}
                      </div>
                      {/* doctor name */}
                      <div className="text-sm text-gray-500">
                        {" "}
                        {slot.doctor}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function convertTo24HourFormat(timeStr) {
  // Example input: "09:00 AM", "03:00 PM"
  const [time, modifier] = timeStr.split(" ");

  let [hours, minutes] = time.split(":");

  // Ensure that hours is treated as a string for padStart
  hours = String(hours);

  // Handle AM/PM conversion
  if (modifier === "PM" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  } else if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  // Ensure that the hours part is always two digits using padStart
  return `${hours.padStart(2, "0")}:${minutes}:00`;
}
