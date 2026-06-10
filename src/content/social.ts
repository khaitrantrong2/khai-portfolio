// TODO: Replace LinkedIn and GitHub URLs with real profile links before going live
export const social = [
  { url: "mailto:khai.trantrong2@gmail.com", name: "mail" },
  // { url: "https://github.com/TODO_KHAI_GITHUB", name: "github" },
  // { url: "https://www.linkedin.com/in/TODO_KHAI_LINKEDIN/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
