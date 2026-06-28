import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Syed Abdul Rahman — AI in Education Consultant & Microsoft Education Specialist · sarahman.in",
  description:
    "Syed Abdul Rahman is an AI in Education Consultant, Microsoft Education Specialist, and Educator Trainer with 25+ years of experience. Principal at Pragati Educational Institutions, author of 'The Exhausted Educator', and trainer of 500+ educators across India on AI-powered teaching, Microsoft 365 Education, and digital pedagogy.",
  keywords: [
    "Syed Abdul Rahman",
    "AI in Education",
    "Microsoft Education Specialist",
    "Microsoft Innovative Educator",
    "Educator Trainer",
    "Teacher Professional Development",
    "ChatGPT in Education",
    "NotebookLM",
    "Microsoft Teams for Education",
    "Digital Transformation in Education",
    "The Exhausted Educator",
    "Pragati Educational Institutions",
    "sarahman.in",
    "Rajamahendravaram education consultant",
  ],
  authors: [{ name: "Syed Abdul Rahman" }],
  alternates: { canonical: "https://sarahman.in" },
  openGraph: {
    title: "Syed Abdul Rahman — AI in Education Consultant",
    description:
      "25+ years in educational leadership. Trainer of 500+ educators on AI-powered teaching and Microsoft Education. Author of 'The Exhausted Educator'.",
    url: "https://sarahman.in",
    siteName: "Syed Abdul Rahman",
    type: "profile",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Abdul Rahman — AI in Education Consultant",
    description:
      "25+ years in educational leadership. Trainer of 500+ educators on AI-powered teaching and Microsoft Education. Author of 'The Exhausted Educator'.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pre-paint theme to avoid flash — amansaurav.com style */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark') } else { document.documentElement.classList.remove('dark') }`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
