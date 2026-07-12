import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Portfolio | Developer & Designer",
  description:
    "A personal portfolio for developers and designers, built with Next.js and styled with TailwindCSS.",
  keywords: ["portfolio", "developer", "designer", "next.js", "react"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
