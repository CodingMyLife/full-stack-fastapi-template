import type { Metadata } from "next"
import Login from "./Login"

export const metadata: Metadata = {
  title: "Log In - FastAPI Template",
}

export default function Page() {
  return <Login />
}
