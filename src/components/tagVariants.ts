export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  // Finance & Analytics tags
  | "python"
  | "sql"
  | "sheets"
  | "appsscript"
  | "powerbi"
  | "powerquery"
  | "netsuite"
  | "duckdb"
  | "bigquery"
  | "excel"
  | "finance";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  sql: "SQL",
  sheets: "Google Sheets",
  appsscript: "Apps Script",
  powerbi: "Power BI",
  powerquery: "Power Query",
  netsuite: "NetSuite",
  duckdb: "DuckDB",
  bigquery: "BigQuery",
  excel: "Excel",
  finance: "Finance",
} as const satisfies Record<TagVariant, string>;
