import cockpit0 from "../../../assets/images/projects/claimback-cockpit/claimback-cockpit-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Claimback Review Cockpit",
  theme: "dark",
  tags: ["sheets", "appsscript", "html", "javascript", "netsuite", "powerquery"],
  videoBorder: false,
  description:
    "A finance review system designed to consolidate claimback operations across six countries, automate control checks, monitor processing status, and help reviewers identify potential financial issues.<br/><br/>Claimback reviews were previously fragmented, highly manual, and dependent on individual knowledge — creating risks around missing accruals, incorrect reversals, wrong accounts, delayed invoicing, and incomplete settlement tracking. This cockpit provides a structured, single-source view for both preparers and reviewers.<br/><br/>Key capabilities include cross-country consolidation, accrual and reversal status tracking, missing-document flags, delayed-processing alerts, accounting-alignment checks, and management-level visibility dashboards.<br/><br/><em>Project visuals use recreated or anonymized data to protect confidential business information.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cockpit0,
        alt: "Claimback Review Cockpit — cross-country dashboard showing claims, exceptions, and settlement status",
        caption: "Claimback Review Cockpit — Cross-Country Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Problem",
        text: "Claimback reviews were highly manual, fragmented across countries, and dependent on individual reviewer knowledge. This created risks around missing accruals, incorrect reversals, wrong accounts, incorrect classes, delayed invoicing, and incomplete settlement tracking.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "Designed a consolidated review cockpit combining operational data, accounting status, exception flags, and management analytics. The system tracks accruals, reversals, invoices, credit notes, VRAs, and net-off activities across Vietnam, Singapore, Malaysia, Indonesia, the Philippines, and Thailand.",
      },
    },
    {
      type: "text",
      props: {
        title: "Impact",
        text: "Reduced reliance on purely manual review and created a scalable foundation for stronger finance controls. Reviewers can now identify exceptions and outstanding items at a glance rather than hunting through fragmented files.",
      },
    },
  ],
} as const satisfies ProjectContent;
