import "./globals.css";
import type { Metadata } from "next";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/queryClient";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme";

export const metadata: Metadata = {
  title: "openFDA Medication Search",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}