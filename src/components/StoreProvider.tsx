"use client";
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

// Wrap the children in this client component, but because we passed them
// as props they would stay as server components
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}