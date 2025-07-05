import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/Authprovider/Authprovider";
import { FileProvider } from "./components/fileContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume Worded | AI Resume Builder",
  description: "An AI-powered tool to build and improve your resume.",
  icons: {
    icon: "/image/Screenshot3.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <FileProvider>{children}</FileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
