import { CalendarIcon, MapPin, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
const slotData = {
  _id: "672f8035a20c1e01d275d5b5",
  date: "2024-11-15",
  time: "08:00 AM",
  doctor: "Dr. Debra",
  gender: "Female",
  reservation: "2024-11-20T15:25:46.269Z",
};
export default function ReservationDetails() {
  return (
    <div className="space-y-6">
      <Card className="bg-black/40 backdrop-blur-md border-teal-500/20">
        <CardHeader>
          <CardTitle className="text-2xl text-teal-50">
            Appointment Details
          </CardTitle>
          <CardDescription className="text-teal-200/70">
            Your selected time slot information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-teal-100">
              <User className="h-5 w-5 text-teal-400" />
              <div>
                <div className="font-medium">{slotData.doctor}</div>
                <div className="text-sm text-teal-300/70">
                  {slotData.gender}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-teal-100">
              <CalendarIcon className="h-5 w-5 text-teal-400" />
              <div>
                <div className="font-medium">{slotData.date}</div>
                <div className="text-sm text-teal-300/70">{slotData.time}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-teal-100">
              <MapPin className="h-5 w-5 text-teal-400" />
              <div className="font-medium">Consultation Room 3</div>
            </div>
          </div>
          <div className="pt-4 border-t border-teal-500/20">
            <div className="text-xs text-teal-300/70 mb-2">
              Booking Reference
            </div>
            <code className="text-sm font-mono bg-black/30 px-2 py-1 rounded text-teal-400">
              {slotData._id}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// export const ReservationDetails = () => {
//   const slotData = {
//     _id: "672f8035a20c1e01d275d5b5",
//     date: "2024-11-15",
//     time: "08:00 AM",
//     doctor: "Dr. Debra",
//     gender: "Female",
//     reservation: "2024-11-20T15:25:46.269Z",
//   };

//   return (
//     <div className="border border-teal-100 shadow-sm rounded-md p-4">
//       <h2 className="text-xl font-semibold mb-2">Reservation Details</h2>
//       <p className="text-sm text-muted-foreground mb-4">
//         Your appointment information
//       </p>
//       <div className="grid md:grid-cols-2 gap-6">
//         <DetailItem label="Doctor" value={slotData.doctor} />
//         <DetailItem label="Gender" value={slotData.gender} />
//         <DetailItem label="Date" value={slotData.date} />
//         <DetailItem label="Time" value={slotData.time} />
//       </div>
//     </div>
//   );
// };

// const DetailItem = ({ label, value }) => (
//   <div className="flex items-center gap-3">
//     <div className="w-2 h-2 rounded-full bg-teal-500" />
//     <span className="text-muted-foreground">{label}</span>
//     <span className="font-medium">{value}</span>
//   </div>
// );
