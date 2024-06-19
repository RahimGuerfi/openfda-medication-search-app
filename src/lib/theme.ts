"use client";

import { createTheme } from "@mui/material/styles";

import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#007CBB",
    },
  },
  typography: {
    fontFamily: [interFont.style.fontFamily, "sans-serif"].join(","),
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
});

export default theme;
