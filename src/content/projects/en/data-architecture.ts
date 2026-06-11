import dataArch0 from "../../../assets/images/projects/data-architecture/data-architecture-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Finance Data Architecture Exploration",
  theme: "dark",
  tags: ["python", "bigquery", "duckdb", "sql", "sheets", "powerbi"],
  videoBorder: false,
  description:
    "A prototype analytical setup exploring scheduled finance data ingestion, centralized data layers, local exploration, and lightweight dashboarding.<br/><br/><strong>Focus areas:</strong> scheduled data ingestion, BigQuery analytical layer, DuckDB exploration, dashboard performance, and structured finance data models.<br/><br/><strong>Tools:</strong> BigQuery, DuckDB, Python, Google Sheets, Apps Script, Power BI.<br/><br/><em>Architecture is presented as a simplified prototype.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dataArch0,
        alt: "Finance Data Architecture diagram — from source sheets through Python ingestion to BigQuery and dashboards",
        caption: "Finance Data Architecture Exploration — System Design",
      },
    },
    {
      type: "text",
      props: {
        title: "Motivation",
        text: "Most finance operations rely heavily on Google Sheets, which becomes increasingly difficult to maintain as data volume, complexity, and team size grow. This exploration investigates a migration path toward more structured, scalable data infrastructure without requiring a full engineering team.",
      },
    },
    {
      type: "text",
      props: {
        title: "Approach",
        text: "Prototyped a multi-layer architecture: raw data from Google Sheets and NetSuite exports, Python-based ingestion scripts that schedule and load data into BigQuery, transformation layers using SQL and dbt-style models, Parquet files for offline analytical queries via DuckDB, and Power BI connected to BigQuery for dashboards.",
      },
    },
    {
      type: "text",
      props: {
        title: "Status",
        text: "This is an active exploration. Certain components have been tested individually. Full pipeline integration is ongoing. Key learnings from this project inform how finance tools are designed and structured in the current role.",
      },
    },
  ],
} as const satisfies ProjectContent;
