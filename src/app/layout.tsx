import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAMZES TATTOO — тату-мастер в Новосибирске",
  description: "RAMZES — тату-мастер в Новосибирске. Графика, реализм и акварель. Индивидуальные эскизы, запись на консультацию. Опыт с 2019 года.",
  keywords: ["тату Новосибирск", "тату мастер Новосибирск", "RAMZES TATTOO", "графика тату", "реализм тату", "акварель тату"],
  openGraph: {
    title: "RAMZES TATTOO — тату-мастер в Новосибирске",
    description: "Татуировки с характером. Индивидуальные проекты и авторские эскизы.",
    locale: "ru_RU",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}