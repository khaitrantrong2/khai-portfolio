import glAnalysis0 from "../../../assets/images/projects/gl-analysis/gl-analysis-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "GL Analysis Engine",
  theme: "dark",
  tags: ["python", "duckdb", "sql", "excel", "netsuite"],
  videoBorder: false,
  description:
    "A rule-based review engine for analyzing general-ledger data and highlighting transactions that may require deeper accounting review.<br/><br/><strong>Focus areas:</strong> accrual and reversal mismatches, missing reversals, incorrect accounts, wrong classes or departments, period issues, and pass-through imbalance checks.<br/><br/><strong>Tools:</strong> Python, DuckDB, Pandas, Excel, NetSuite GL data.<br/><br/><em>Rules and visuals are simplified for portfolio presentation.</em>",
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
