import type { Metadata } from "next"
import SignUp from "./SignUp"

export const metadata: Metadata = {
  title: "Sign Up - FastAPI Template",
}

export default function Page() {
  return <SignUp />
}
