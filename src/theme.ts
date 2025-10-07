export type ThemeName = "emerald" | "cacao" | "sunrise" | "mono"| "cupping";

export const themes: Record<ThemeName, any> = {
  emerald: {
    name: "Emerald",
    brand: "text-emerald-700",
    brandBg: "bg-emerald-600",
    brandBgHover: "hover:bg-emerald-700",
    pillBg: "bg-emerald-100",
    pillText: "text-emerald-700",
    gradFrom: "from-emerald-50",
  },
  cacao: {
    name: "Cacao",
    brand: "text-amber-900",
    brandBg: "bg-amber-900",
    brandBgHover: "hover:bg-amber-950",
    pillBg: "bg-amber-100",
    pillText: "text-amber-900",
    gradFrom: "from-amber-50",
  },
  sunrise: {
    name: "Sunrise",
    brand: "text-rose-700",
    brandBg: "bg-rose-600",
    brandBgHover: "hover:bg-rose-700",
    pillBg: "bg-rose-100",
    pillText: "text-rose-700",
    gradFrom: "from-rose-50",
  },
  mono: {
    name: "Mono",
    brand: "text-neutral-900",
    brandBg: "bg-neutral-900",
    brandBgHover: "hover:bg-black",
    pillBg: "bg-neutral-200",
    pillText: "text-neutral-900",
    gradFrom: "from-neutral-100",
  },
  cupping: {
name: "Cupping",
brand: "text-[#3c2722]",
brandBg: "bg-[#3c2722]",
brandBgHover: "hover:bg-[#2e1e1a]",
pillBg: "bg-[#ead4b5]",
pillText: "text-[#3c2722]",
gradFrom: "from-[#ead4b5]",
},
};
