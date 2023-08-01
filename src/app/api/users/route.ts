import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  console.log(request.body);
  return NextResponse.json(
    {
      message: "It works",
      // email,
    },
    {
      status: 201,
      statusText: "Ok Request",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
