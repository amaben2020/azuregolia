import { NextResponse } from "next/server";

export const GET = async (
  // request: Request,
  { query }: { query: { slug: string } },
) => {
  console.log(query);

  return NextResponse.json({
    message: "It works",
    // email,
  });
};
