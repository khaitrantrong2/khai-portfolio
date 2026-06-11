import thumbnailClaimbackCockpit from "../../../assets/thumbnails/claimback-cockpit.svg";
import thumbnailGlAnalysis from "../../../assets/thumbnails/gl-analysis.svg";
import thumbnailClaimbackTracker from "../../../assets/thumbnails/claimback-tracker.svg";
import thumbnailArDashboard from "../../../assets/thumbnails/ar-dashboard.svg";
import thumbnailDataArchitecture from "../../../assets/thumbnails/data-architecture.svg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Claimback Review Cockpit",
    slug: "claimback-cockpit",
    thumbnail: thumbnailClaimbackCockpit,
    description: "Cross-country claimback review & control system",
  },
  {
    title: "GL Analysis Engine",
    slug: "gl-analysis",
    thumbnail: thumbnailGlAnalysis,
    description: "Python + DuckDB GL anomaly detection engine",
  },
  {
    title: "Claimback Master Tracker",
    slug: "claimback-tracker",
    thumbnail: thumbnailClaimbackTracker,
    description: "Regional claimback data model",
  },
  {
    title: "AR Monitoring Dashboard",
    slug: "ar-dashboard",
    thumbnail: thumbnailArDashboard,
    description: "Working capital & receivables dashboard",
  },
  {
    title: "Finance Data Architecture",
    slug: "data-architecture",
    thumbnail: thumbnailDataArchitecture,
    description: "BigQuery + DuckDB finance data prototype",
  },
] as const satisfies ProjectPreview[];
