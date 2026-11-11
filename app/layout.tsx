import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Deutsche Bäckerei | Монголын Германы Хэв Маягийн Талхны Үйлдвэр",
  description:
    "Deutsche Bäckerei нь Германы уламжлалт жигнэх арга, чанартай үрлийн бүтэц, орчин үеийн технологийг нэгтгэн Монголд гар хийцийн чанартай талх, хобо, булки болон бусад нарийн боов үйлдвэрлэдэг.",
  keywords: ["Deutsche Bäckerei", "Монгол талх", "Герман уламжлал", "нарийн боов", "талхны үйлдвэр"],
  openGraph: {
    title: "Deutsche Bäckerei — German-Inspired Bakery in Mongolia",
    description: "German-inspired baking standards. Quality ingredients. Made fresh in Mongolia.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
