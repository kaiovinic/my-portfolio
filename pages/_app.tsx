import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo, Space_Grotesk } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${archivo.variable} ${spaceGrotesk.variable} font-body bg-backgroundColor text-textColor min-h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
