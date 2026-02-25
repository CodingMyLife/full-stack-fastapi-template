import type { Metadata } from "next"
import RecoverPassword from "./RecoverPassword"

export const metadata: Metadata = {
  title: "Recover Password - FastAPI Template",
}

export default function Page() {
  return <RecoverPassword />
}
