// api/slots/[id]
import connectMongo from "@/lib/connectMongo";
import { SlotModel } from "@/models/slot-model";
import { NextResponse } from "next/server";

// get the slot by id
export async function GET(request, props) {
  const params = await props.params;
  try {
    await connectMongo();
    const { id } = params;
    const slot = await SlotModel.findById(id);
    return NextResponse.json(slot, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching slot" + error },
      { status: 500 }
    );
  }
}

// add reservation to the slot
export async function PUT(request, props) {
  const params = await props.params;
  try {
    await connectMongo();
    // add reservations to 10 minutes only
    const { id } = params;
    console.log(id);
    const slot = await SlotModel.findById(id);
    slot.revervation = new Date(Date.now() + 10 * 60 * 1000);
    await slot.save();
    return NextResponse.json(slot, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error updating slot" }, { status: 500 });
  }
}

export async function PATCH(request, props) {
  const params = await props.params;
  try {
    await connectMongo();
    const { id } = params;

    // Find the slot by ID
    const slot = await SlotModel.findById(id);

    // Check if the slot has an existing reservation
    if (!slot.revervation) {
      return NextResponse.json(
        { error: "No existing reservation found" },
        { status: 400 }
      );
    }

    // Parse the existing reservation time
    const existingReservation = new Date(slot.revervation);
    const now = new Date();

    // Determine the new reservation time
    let newReservation;
    if (existingReservation > now) {
      // Add 5 minutes to the existing reservation time
      newReservation = new Date(existingReservation.getTime() + 5 * 60 * 1000);
    } else {
      // Set the reservation time to current time + 5 minutes
      newReservation = new Date(now.getTime() + 5 * 60 * 1000);
    }

    // Update the slot's reservation time
    slot.revervation = newReservation;

    // Save the updated slot
    await slot.save();

    // Return the updated slot
    return NextResponse.json(slot, { status: 200 });
  } catch (error) {
    console.error("Error updating slot:", error);
    return NextResponse.json({ error: "Error updating slot" }, { status: 500 });
  }
}

// add extra 5 minutes
// export async function PATCH(request, { params }) {
//   try {
//     await connectMongo();
//     const { id } = params;

//     // Find the slot by ID
//     const slot = await SlotModel.findById(id);

//     // Check if the slot has an existing reservation
//     if (!slot.revervation) {
//       return NextResponse.json(
//         { error: "No existing reservation found" },
//         { status: 400 }
//       );
//     }

//     // Add 5 minutes to the current reservation time
//     slot.revervation = new Date(Date.now() + 5 * 60 * 1000);

//     // Save the updated slot
//     await slot.save();

//     // Return the updated slot
//     return NextResponse.json(slot, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Error updating slot" }, { status: 500 });
//   }
// }
