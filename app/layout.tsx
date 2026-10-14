import type { Metadata, Viewport } from "next"; import "./globals.css";
export const metadata: Metadata={title:"RAKENNE. — Suunnitelmista todeksi",description:"Kuvitteellisen rakennusliikkeen verkkosivukonsepti.",robots:{index:false,follow:false}}; export const viewport:Viewport={themeColor:"#181d1c"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fi"><body>{children}</body></html>}
