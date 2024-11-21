"use client";
import { cn } from "@/lib/utils";
import { Calendar, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function ReservationForm() {
  const [date, setDate] = useState();
  return (
    <Card className="bg-black/40 backdrop-blur-md border-teal-500/20">
      <CardHeader>
        <CardTitle className="text-2xl text-teal-50">
          Personal Information
        </CardTitle>
        <CardDescription className="text-teal-200/70">
          Please fill in your details to complete the reservation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-teal-300" htmlFor="firstName">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                className="bg-black/30 border-teal-500/30 focus:border-teal-400 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-teal-300" htmlFor="lastName">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                className="bg-black/30 border-teal-500/30 focus:border-teal-400 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-teal-300" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="bg-black/30 border-teal-500/30 focus:border-teal-400 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-teal-300" htmlFor="phone">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-black/30 border-teal-500/30 focus:border-teal-400 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-teal-300" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="text"
                className="bg-black/30 border-teal-500/30 focus:border-teal-400 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-teal-300" htmlFor="dob">
                Date of Birth
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal text-white bg-black/30 border-teal-500/30 hover:bg-black/40",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="multiple"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";

// export const ReservationForm = () => {
//   const [dob, setDob] = useState({ year: 1994, month: 1, day: 1 });

//   const generateYears = () =>
//     Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

//   const generateMonths = () => Array.from({ length: 12 }, (_, i) => i + 1);

//   const generateDays = () => Array.from({ length: 31 }, (_, i) => i + 1);
// console.log()
//   return (
//     <form className="space-y-6">
//       <div className="grid md:grid-cols-2 gap-6">
//         <InputField id="firstName" label="First Name" defaultValue="John" />
//         <InputField id="lastName" label="Last Name" defaultValue="Doe" />
//         <InputField
//           id="email"
//           label="Email"
//           defaultValue="john@example.com"
//           type="email"
//         />
//         <InputField id="phone" label="Phone" defaultValue="+1 (555) 123-4567" />
//         <div className="space-y-2">
//           <Label>Date of Birth</Label>
//           <div className="flex gap-2">
//             <select
//               value={dob.year}
//               onChange={(e) => setDob({ ...dob, year: e.target.value })}
//               className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//             >
//               {generateYears().map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={dob.month}
//               onChange={(e) => setDob({ ...dob, month: e.target.value })}
//               className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//             >
//               {generateMonths().map((month) => (
//                 <option key={month} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={dob.day}
//               onChange={(e) => setDob({ ...dob, day: e.target.value })}
//               className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//             >
//               {generateDays().map((day) => (
//                 <option key={day} value={day}>
//                   {day}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <InputField
//           id="password"
//           label="Password"
//           defaultValue="••••••••"
//           type="password"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label>Payment Options</Label>
//         <div className="h-24 rounded-lg border border-dashed border-teal-200 flex items-center justify-center text-muted-foreground bg-teal-50/50">
//           Payment options placeholder
//         </div>
//       </div>

//       <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
//         Complete Reservation
//       </Button>
//     </form>
//   );
// };

// const InputField = ({ id, label, defaultValue, type = "text" }) => (
//   <div className="space-y-2">
//     <Label htmlFor={id}>{label}</Label>
//     <Input
//       id={id}
//       defaultValue={defaultValue}
//       type={type}
//       className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//     />
//   </div>
// );

// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";

// export const ReservationForm = () => {
//   const [dob, setDob] = useState({ year: "", month: "", day: "" });

//   const generateYears = () =>
//     Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

//   const generateMonths = () => Array.from({ length: 12 }, (_, i) => i + 1);

//   const generateDays = () => Array.from({ length: 31 }, (_, i) => i + 1);

//   console.log(dob); // Debugging purpose

//   return (
//     <form className="space-y-6">
//       <div className="grid md:grid-cols-2 gap-6">
//         <InputField id="firstName" label="First Name" defaultValue="John" />
//         <InputField id="lastName" label="Last Name" defaultValue="Doe" />
//         <InputField
//           id="email"
//           label="Email"
//           defaultValue="john@example.com"
//           type="email"
//         />
//         <InputField id="phone" label="Phone" defaultValue="+1 (555) 123-4567" />
//         <div className="space-y-2">
//           <Label>Date of Birth</Label>
//           <div className="flex gap-2">
//             {/* Year Dropdown */}
//             <select
//               value={dob.year}
//               onChange={(e) => setDob({ ...dob, year: e.target.value })}
//               className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//             >
//               <option value="" disabled>
//                 Year
//               </option>
//               {generateYears().map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>

//             {/* Month Dropdown */}
//             <select
//               value={dob.month}
//               onChange={(e) => setDob({ ...dob, month: e.target.value })}
//               className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//             >
//               <option value="" disabled>
//                 Month
//               </option>
//               {generateMonths().map((month) => (
//                 <option key={month} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>

//             {/* Day Dropdown */}
//             <select
//               value={dob.day}
//               onChange={(e) => setDob({ ...dob, day: e.target.value })}
//               className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//             >
//               <option value="" disabled>
//                 Day
//               </option>
//               {generateDays().map((day) => (
//                 <option key={day} value={day}>
//                   {day}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <InputField
//           id="password"
//           label="Password"
//           defaultValue="••••••••"
//           type="password"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label>Payment Options</Label>
//         <div className="h-24 rounded-lg border border-dashed border-teal-200 flex items-center justify-center text-muted-foreground bg-teal-50/50">
//           Payment options placeholder
//         </div>
//       </div>

//       <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
//         Complete Reservation
//       </Button>
//     </form>
//   );
// };

// const InputField = ({ id, label, defaultValue, type = "text" }) => (
//   <div className="space-y-2">
//     <Label htmlFor={id}>{label}</Label>
//     <Input
//       id={id}
//       defaultValue={defaultValue}
//       type={type}
//       className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//     />
//   </div>
// );

// "use client";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";

// export const ReservationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dob: "",
//   });

//   const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

//   const calculateAge = (dobString) => {
//     const dobDate = new Date(dobString);
//     const today = new Date();

//     if (isNaN(dobDate)) {
//       alert("Invalid date format! Use YYYY-MM-DD.");
//       return;
//     }

//     let years = today.getFullYear() - dobDate.getFullYear();
//     let months = today.getMonth() - dobDate.getMonth();
//     let days = today.getDate() - dobDate.getDate();

//     if (days < 0) {
//       months--;
//       days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
//     }

//     if (months < 0) {
//       years--;
//       months += 12;
//     }

//     setAge({ years, months, days });
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id]: value,
//     }));

//     // Automatically calculate age when dob changes
//     if (id === "dob" && value.match(/^\d{4}-\d{2}-\d{2}$/)) {
//       calculateAge(value);
//     }
//   };

//   return (
//     <form className="space-y-6">
//       <div className="grid md:grid-cols-2 gap-6">
//         <InputField
//           id="firstName"
//           label="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           placeholder="John"
//         />
//         <InputField
//           id="lastName"
//           label="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           placeholder="Doe"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="dob">Date of Birth (YYYY-MM-DD)</Label>
//         <Input
//           id="dob"
//           type="text"
//           value={formData.dob}
//           onChange={handleChange}
//           placeholder="1994-01-01"
//           className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//         />
//       </div>

//       {age.years > 0 || age.months > 0 || age.days > 0 ? (
//         <div className="space-y-2 mt-4 p-4 border rounded-lg bg-teal-50">
//           <h3 className="text-lg font-semibold">Your Age:</h3>
//           <p>
//             {age.years} Years, {age.months} Months, {age.days} Days
//           </p>
//         </div>
//       ) : null}
//     </form>
//   );
// };

// const InputField = ({
//   id,
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }) => (
//   <div className="space-y-2">
//     <Label htmlFor={id}>{label}</Label>
//     <Input
//       id={id}
//       value={value}
//       onChange={onChange}
//       type={type}
//       placeholder={placeholder}
//       className="border-teal-100 focus:border-teal-500 focus:ring-teal-500"
//     />
//   </div>
// );
