import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { connectDB } from "@/lib/dbConnect"

export async function POST() {
  await connectDB()

  const cookieStore = await cookies()


  // Clear all cookies
  cookieStore.set("blogLoggedIn", "", {
    path: "/",
    httpOnly: true,
    maxAge: 0,
  })

  cookieStore.set("blogLoggedInClient", "", {
    path: "/",
    httpOnly: false,
    maxAge: 0,
  })

  return NextResponse.json({
    success: true,
    message: "Logout successful",
    clearLocalStorage: true, // Signal to clear localStorage
  })
}
