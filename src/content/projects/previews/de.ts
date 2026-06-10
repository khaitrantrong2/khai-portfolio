// This file is now the Vietnamese locale previews (renamed for minimal code change)
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
    description: "Hệ thống đánh giá claimback đa quốc gia",
  },
  {
    title: "GL Analysis Engine",
    slug: "gl-analysis",
    thumbnail: thumbnailGlAnalysis,
    description: "Tự động hóa đánh giá GL bằng Python",
  },
  {
    title: "Claimback Master Tracker",
    slug: "claimback-tracker",
    thumbnail: thumbnailClaimbackTracker,
    description: "Mô hình dữ liệu claimback khu vực",
  },
  {
    title: "AR Monitoring Dashboard",
    slug: "ar-dashboard",
    thumbnail: thumbnailArDashboard,
    description: "Dashboard vốn lưu động & khoản phải thu",
  },
  {
    title: "Finance Data Architecture",
    slug: "data-architecture",
    thumbnail: thumbnailDataArchitecture,
    description: "Khám phá kiến trúc dữ liệu tài chính",
  },
] as const satisfies ProjectPreview[];
