"use client";
import type { AppProps } from "next/app";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
// Providers (providing supabase, next ui)

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
