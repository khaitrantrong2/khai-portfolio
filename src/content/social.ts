export const social = [
  { url: "mailto:khai.trantrong2@gmail.com", name: "mail" },
  { url: "https://github.com/khaitrantrong2", name: "github" },
  { url: "https://www.linkedin.com/in/khaitran22297/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
