import type { Metadata } from "next";
import { Header } from "@/shared/components/shared/header";

export const metadata: Metadata = {
  title: "Pizza | Главная",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
      <main className="min-h-screen">
        <Header />
        {modal}
        {children}
      </main>
  );
}