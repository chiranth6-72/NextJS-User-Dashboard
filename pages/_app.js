import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
      <Analytics />
    </>
  );
}
