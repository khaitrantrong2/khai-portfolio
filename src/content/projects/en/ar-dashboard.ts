import arDash0 from "../../../assets/images/projects/ar-dashboard/ar-dashboard-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "AR Monitoring & Working Capital Dashboard",
  theme: "dark",
  tags: ["powerbi", "sheets", "powerquery", "netsuite", "finance"],
  videoBorder: false,
  description:
    "A finance dashboard for monitoring outstanding receivables, processing timelines, disputes, settlement status, and long-lasting balances.<br/><br/>The dashboard converts operational transaction records from NetSuite into actionable working-capital analytics, enabling proactive management of the AR portfolio rather than reactive month-end scrambles.<br/><br/>Key analytics include journal-entry to invoice cycle, invoice to net-off cycle, outstanding-age analysis, 60-day and 90-day flags, brand and country drilldowns, dispute-reason tracking, and collection and settlement visibility.<br/><br/><em>Project visuals use recreated or anonymized data to protect confidential business information.</em>",
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
