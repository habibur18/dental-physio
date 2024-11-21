// api/slots
// export const dynamic = "force-dynamic";

import connectMongo from "@/lib/connectMongo";
import { SlotModel } from "@/models/slot-model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    const slots = await SlotModel.find({});
    return NextResponse.json(slots, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching slots" + error },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectMongo();
    const { date, time, doctor, gender } = await request.json();
    const newSlot = new SlotModel({ date, time, doctor, gender });
    await newSlot.save();
    return NextResponse.json(newSlot, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating slot" }, { status: 500 });
  }
}
