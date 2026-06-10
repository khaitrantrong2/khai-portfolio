import glAnalysis0 from "../../../assets/images/projects/gl-analysis/gl-analysis-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "GL Analysis Engine",
  theme: "dark",
  tags: ["python", "duckdb", "sql", "excel", "netsuite"],
  videoBorder: false,
  description:
    "A Python-based accounting review engine that analyzes general-ledger data and highlights transactions requiring deeper investigation. This is an evolving system, not a fully autonomous product.<br/><br/>Traditional GL review involved manually filtering large transaction files and depended heavily on reviewer experience. The engine applies a set of configurable rules to evaluate accounting entries and surface potential issues.<br/><br/>Review areas include accrual and reversal mismatches, missing reversals, incorrect accounts, incorrect classes or departments, incorrect activity periods, unbalanced pass-through arrangements, potential over- or under-accruals, and journal-entry anomalies.<br/><br/><em>Project visuals use recreated or anonymized data to protect confidential business information.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: glAnalysis0,
        alt: "GL Analysis Engine — pipeline diagram and issue category dashboard",
        caption: "GL Analysis Engine — Rule-Based Review Pipeline",
      },
    },
    {
      type: "text",
      props: {
        title: "Problem",
        text: "Traditional GL review meant manually filtering thousands of journal entries and relying on individual reviewer experience to catch anomalies. Inconsistent approaches led to gaps in financial control coverage.",
      },
    },
    {
      type: "text",
      props: {
        title: "Approach",
        text: "Built a rule-based engine using Python and DuckDB to load, parse, and evaluate GL exports. Rules flag common issue patterns — mismatched reversals, incorrect accounts, wrong activity periods, anomalous journal entries — and output a prioritized review list.",
      },
    },
    {
      type: "text",
      props: {
        title: "Status",
        text: "This is an actively evolving system. The rule set is expanded over time as new patterns are identified. The goal is to make coverage consistent and reviewer effort more targeted.",
      },
    },
  ],
} as const satisfies ProjectContent;
