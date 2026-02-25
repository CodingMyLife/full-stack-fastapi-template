import type { Metadata } from "next"
import Items from "./Items"

export const metadata: Metadata = {
  title: "Items - FastAPI Template",
}

export default function Page() {
  return <Items />
}
