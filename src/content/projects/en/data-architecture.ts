import dataArch0 from "../../../assets/images/projects/data-architecture/data-architecture-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Finance Data Architecture Exploration",
  theme: "dark",
  tags: ["python", "bigquery", "duckdb", "sql", "sheets", "powerbi"],
  videoBorder: false,
  description:
    "An architecture exploration and prototype investigating how to build scalable finance-data infrastructure using scheduled ingestion, BigQuery, structured data models, and lightweight internal dashboards.<br/><br/>This is a learning and prototyping project rather than a production system. The goal is to understand how finance teams could move beyond manual Google Sheets toward a more structured, queryable, and maintainable data architecture.<br/><br/>Topics explored include consolidating multiple Google Sheets, scheduled data ingestion via Python, BigQuery as a centralized analytical layer, dashboard performance improvements through data partitioning, efficient storage using Parquet and DuckDB, and connecting structured data to Power BI.<br/><br/><em>This project is clearly labeled as an architecture exploration and prototype.</em>",
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
