import localFont from "next/font/local";
import "./globals.css";

const hankenGrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/HankenGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HankenGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HankenGrotesk-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-hanken",
});

export const metadata = {
  title: "Results Summary",
  description: "Results Summary Component",
  icons: {
    icon: "/assets/images/favicon-32x32.png",
    shortcut: "/assets/images/favicon-32x32.png",
    apple: "/assets/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </head>
      <body className={`${hankenGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
