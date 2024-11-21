// "use client";
// import ReservationDetails from "@/components/ReservationDetails";
// import ReservationForm from "@/components/ReservationForm";
// import StickyTimer from "@/components/StickyTimer";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

// export default function ReservationPage({ params }) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [expired, setExpired] = useState(false); // New expired state
//   const slotId = params.slotId;

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots/${slotId}`
//         );
//         const slot = await response.json();
//         setData(slot);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [slotId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (expired) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold text-teal-400 mb-4">
//           Reservation Expired
//         </h1>
//         <p className="text-lg text-teal-200 mb-8">
//           The reservation time has ended. Please return to the booking page and
//           try again if the slot is still available.
//         </p>
//         <Button
//           href="/#book"
//           size="lg"
//           className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 px-8"
//         >
//           Go to Booking Page
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white">
//       <StickyTimer
//         reservation={data.revervation}
//         slotId={slotId}
//         onTimeExpired={() => setExpired(true)} // Handle expiration
//       />
//       <main className="container max-w-[1000px] mx-auto p-4 mt-8">
//         <ReservationDetails slotData={data} />
//         <div className="my-8">
//           <ReservationForm />
//           <div className="space-y-2">
//             <div className="bg-black/30 p-6 rounded-lg border border-teal-500/30 flex items-center justify-center gap-3">
//               <span className="text-teal-100">
//                 Payment options will be integrated with -- Stripe or PayPal
//               </span>
//             </div>
//           </div>
//         </div>
//         <Button
//           type="submit"
//           size="lg"
//           className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-6 text-lg"
//         >
//           Confirm Reservation
//         </Button>
//       </main>
//     </div>
//   );
// }

// "use client";

// import ReservationDetails from "@/components/ReservationDetails";
// import ReservationForm from "@/components/ReservationForm";
// import StickyTimer from "@/components/StickyTimer";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

// export default function ReservationPage({ params }) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [expired, setExpired] = useState(false); // Handle expiration here
//   const slotId = params.slotId;

//   // Function to check if the reservation has expired
//   const checkExpiration = (reservationTime) => {
//     const now = new Date();
//     return new Date(reservationTime) <= now;
//   };

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots/${slotId}`
//         );
//         const slot = await response.json();

//         if (checkExpiration(slot.revervation)) {
//         } else {
//           setData(slot); // Only set data if not expired
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [slotId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (expired) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold text-teal-400 mb-4">
//           Reservation Expired
//         </h1>
//         <p className="text-lg text-teal-200 mb-8">
//           The reservation time has ended. Please return to the booking page and
//           try again if the slot is still available.
//         </p>
//         <Button
//           href="/#book"
//           size="lg"
//           className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 px-8"
//         >
//           Go to Booking Page
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white">
//       <StickyTimer
//         reservation={data.revervation}
//         slotId={slotId}
//         onTimeExpired={() => setExpired(true)} // Update state on expiration
//       />
//       <main className="container max-w-[1000px] mx-auto p-4 mt-8">
//         <ReservationDetails slotData={data} />
//         <div className="my-8">
//           <ReservationForm />
//           <div className="space-y-2">
//             <div className="bg-black/30 p-6 rounded-lg border border-teal-500/30 flex items-center justify-center gap-3">
//               <span className="text-teal-100">
//                 Payment options will be integrated with -- Stripe or PayPal
//               </span>
//             </div>
//           </div>
//         </div>
//         <Button
//           type="submit"
//           size="lg"
//           className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-6 text-lg"
//         >
//           Confirm Reservation
//         </Button>
//       </main>
//     </div>
//   );
// }

"use client";

import ReservationDetails from "@/components/ReservationDetails";
import ReservationForm from "@/components/ReservationForm";
import ReservationSkeleton from "@/components/ReservationSkeleton";
import StickyTimer from "@/components/StickyTimer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ReservationPage({ params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Ensure proper loading state
  const [expired, setExpired] = useState(false); // Handle expiration
  const slotId = params.slotId;

  // Check if the reservation time is expired
  const checkExpiration = (reservationTime) => {
    const now = new Date();
    return new Date(reservationTime) <= now;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots/${slotId}`
        );
        const slot = await response.json();

        // Check expiration and update state
        if (
          !slot.revervation ||
          slot.revervation === null ||
          slot.revervation === undefined ||
          checkExpiration(slot.revervation)
        ) {
          setExpired(true);
        } else {
          setData(slot);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [slotId]);

  // Block rendering until the expiration check is complete
  if (loading) {
    return <ReservationSkeleton />;
  }

  // Show the expired UI immediately if expired
  if (expired) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-teal-400 mb-4">
          Reservation Expired
        </h1>
        <p className="text-lg text-teal-200 mb-8">
          The reservation time has ended. Please return to the booking page and
          try again if the slot is still available.
        </p>
        <Button
          href="/#book"
          size="lg"
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 px-8"
        >
          Go to Booking Page
        </Button>
      </div>
    );
  }

  // Show reservation details if valid
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-black text-white">
      <StickyTimer
        reservation={data.revervation}
        slotId={slotId}
        onTimeExpired={() => setExpired(true)} // Handle expiration in real time
      />
      <main className="container max-w-[1000px] mx-auto p-4 mt-8">
        <ReservationDetails slotData={data} />
        <div className="my-8">
          <ReservationForm />
          <div className="space-y-2">
            <div className="bg-black/30 p-6 rounded-lg border border-teal-500/30 flex items-center justify-center gap-3">
              <span className="text-teal-100">
                Payment options will be integrated with -- Stripe or PayPal
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
