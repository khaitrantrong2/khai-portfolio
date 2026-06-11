import cockpit0 from "../../../assets/images/projects/claimback-cockpit/claimback-cockpit-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Claimback Review Cockpit",
  theme: "dark",
  tags: ["sheets", "appsscript", "html", "javascript", "netsuite", "powerquery"],
  videoBorder: false,
  description:
    "A review cockpit for tracking accruals, reversals, invoices, settlement status, operational progress, and control exceptions across multiple countries.<br/><br/><strong>Focus areas:</strong> claimback consolidation, accrual and reversal tracking, invoice and settlement monitoring, exception flags, and reviewer-friendly status visibility.<br/><br/><strong>Tools:</strong> Google Sheets, Apps Script, NetSuite data, Power Query.<br/><br/><em>Visuals use recreated and anonymized data.</em>",
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
