import type { Metadata } from "next"
import ResetPassword from "./ResetPassword"

export const metadata: Metadata = {
  title: "Reset Password - FastAPI Template",
}

export default function Page() {
  return <ResetPassword />
}
