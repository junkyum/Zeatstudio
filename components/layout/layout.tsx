import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return <div className="w-screen h-screen p-0">{children}</div>;
}
