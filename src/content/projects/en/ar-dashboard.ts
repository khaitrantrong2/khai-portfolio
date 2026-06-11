import arDash0 from "../../../assets/images/projects/ar-dashboard/ar-dashboard-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "AR Monitoring & Working Capital Dashboard",
  theme: "dark",
  tags: ["powerbi", "sheets", "powerquery", "netsuite", "finance"],
  videoBorder: false,
  description:
    "A dashboard concept for monitoring receivable aging, invoice-to-settlement cycles, dispute status, and long-lasting balances.<br/><br/><strong>Focus areas:</strong> outstanding receivables, aging review, invoice-to-net-off cycle, dispute visibility, and working-capital monitoring.<br/><br/><strong>Tools:</strong> Power BI, Power Query, Google Sheets, NetSuite data.<br/><br/><em>Figures and visuals are anonymized mock data.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: arDash0,
        alt: "AR Monitoring Dashboard — outstanding receivables by age, country breakdown, and settlement pipeline",
        caption: "AR Monitoring & Working Capital Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Problem",
        text: "AR status was tracked manually and inconsistently. Finance teams lacked a real-time view of outstanding balances by age, dispute reason, or country. Escalations often came too late.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "Built a Power BI dashboard connecting to Google Sheets data sourced from NetSuite exports. Power Query handles data cleansing and transformation. The dashboard provides drill-through views by brand, country, and aging bucket, with automated flags for balances exceeding 60 and 90 days.",
      },
    },
    {
      type: "text",
      props: {
        title: "Impact",
        text: "Enabled collections teams to prioritize follow-up based on data rather than memory. Working-capital reviews became structured conversations around a shared dashboard rather than ad hoc status updates.",
      },
    },
  ],
} as const satisfies ProjectContent;
