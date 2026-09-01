import type { Metadata } from "next";
import { SastikTemplate } from "@/components/SastikTemplate";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <SastikTemplate />;
}
