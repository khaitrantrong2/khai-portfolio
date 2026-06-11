import tracker0 from "../../../assets/images/projects/claimback-tracker/claimback-tracker-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Claimback Master Tracker",
  theme: "dark",
  tags: ["sheets", "appsscript", "powerquery", "finance"],
  videoBorder: false,
  description:
    "A standardized data model for consolidating claimback activity across countries, brands, platforms, activity periods, and accounting status.<br/><br/><strong>Focus areas:</strong> country-level consolidation, brand and platform mapping, activity-period tracking, booking status visibility, and review flag standardization.<br/><br/><strong>Tools:</strong> Google Sheets, Apps Script, Power Query, NetSuite data.<br/><br/><em>Displayed data is fictional and recreated.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tracker0,
        alt: "Claimback Master Tracker — regional data model covering 6 countries with completion progress",
        caption: "Claimback Master Tracker — Regional Data Model",
      },
    },
    {
      type: "text",
      props: {
        title: "Problem",
        text: "Claimback data was stored in country-specific, non-standardized files. Cross-country analysis required significant manual effort and produced inconsistent results due to different field naming and structure conventions.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "Designed a unified data model covering all material claimback fields. Power Query transformations standardize incoming data from different country sources. Apps Script handles automated status updates and review-flag logic.",
      },
    },
    {
      type: "text",
      props: {
        title: "Impact",
        text: "Improved data consistency, regional visibility, and the ability to analyze claimback activity across different operating models. Regional finance reviews that previously required days of preparation now start from a clean, current dataset.",
      },
    },
  ],
} as const satisfies ProjectContent;
