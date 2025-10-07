"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { themes, ThemeName } from "@/src/theme";

type ThemeCtx = { themeName: ThemeName; setThemeName: (t: ThemeName) => void; theme: any };
const Ctx = createContext<ThemeCtx>({ themeName: "cupping", setThemeName: () => {}, theme: themes.emerald });

export const useTheme = () => useContext(Ctx);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("cupping");
  const theme = useMemo(() => themes[themeName], [themeName]);
  return <Ctx.Provider value={{ themeName, setThemeName, theme }}>{children}</Ctx.Provider>;
}
