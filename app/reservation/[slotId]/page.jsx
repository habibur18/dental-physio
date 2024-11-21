// export default async function ReservetionPage({ params }) {
//   const { slotId } = await params;

//   const res = await fetch(`${process.env.BASE_URL}/slots/${slotId}`);
//   const data = await res.json();
//   console.log(data);
//   // response sameple
//   // {
//   //   _id: '672f8035a20c1e01d275d5b5',
//   //   date: '2024-11-15',
//   //   time: '08:00 AM',
//   //   doctor: 'Dr. Debra',
//   //   gender: 'Female',
//   //   revervation: '2024-11-20T15:25:46.269Z'
//   // }
//   return (
//     <div>
//       <h1>Reservation Page</h1>
//       <p>Slot ID: {slotId}</p>
//     </div>
//   );
// }

// export default async function ReservetionPage() {
//   const slotData = {
//     _id: "672f8035a20c1e01d275d5b5",
//     date: "2024-11-15",
//     time: "08:00 AM",
//     doctor: "Dr. Debra",
//     gender: "Female",
//     revervation: "2024-11-20T15:25:46.269Z",
//   };
//   return (
//     <div>
//       <h1>Reservation Page</h1>
//       <p>Slot ID: {slotData._id}</p>
//     </div>
//   );
// }

import ReservationDetails from "@/components/ReservationDetails";
import ReservationForm from "@/components/ReservationForm";
import StickyTimer from "@/components/StickyTimer";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export default async function ReservationPage({ params }) {
  // Slot data from the original code
  const slotData = {
    _id: "672f8035a20c1e01d275d5b5",
    date: "2024-11-15",
    time: "08:00 AM",
    doctor: "Dr. Debra",
    gender: "Female",
    reservation: "2024-11-20T15:25:46.269Z",
  };
  const { slotId } = await params;
  const res = await fetch(`${process.env.BASE_URL}/slots/${slotId}`);
  const data = await res.json();
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white">
      {/* Enhanced Header with Timer */}
      <StickyTimer reservation={data.revervation} />
      <main className="container max-w-[1000px] mx-auto p-4 mt-8">
        {/* Slot Details Card */}
        <ReservationDetails />
        {/* Form Section */}
        <div className="mt-8">
          {/* Main Form Section */}
          <ReservationForm />
          {/* payment options */}
          <div className="space-y-2">
            <div className="bg-black/30 p-6 rounded-lg border border-teal-500/30 flex items-center justify-center gap-3">
              <CreditCard className="h-16 w-16 text-teal-400" />
              <span className="text-teal-100">
                Payment options placeholder -- Stripe or Paypal etc
              </span>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-6 text-lg"
        >
          Confirm Reservation
        </Button>
      </main>
    </div>
  );
}
