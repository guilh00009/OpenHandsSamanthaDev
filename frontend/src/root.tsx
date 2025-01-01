import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./tailwind.css";
import "./index.css";
import "./samantha.css";
import React from "react";
import { Toaster } from "react-hot-toast";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}

export const meta: MetaFunction = () => [
  { title: "Samantha-Coder ∞" },
  { name: "description", content: "Your AI companion for building beautiful things together." },
  { name: "theme-color", content: "#FF3B30" },
];

export default function App() {
  return <Outlet />;
}
