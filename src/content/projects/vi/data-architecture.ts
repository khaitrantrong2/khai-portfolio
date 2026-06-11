import dataArch0 from "../../../assets/images/projects/data-architecture/data-architecture-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Finance Data Architecture Exploration",
  theme: "dark",
  tags: ["python", "bigquery", "duckdb", "sql", "sheets", "powerbi"],
  videoBorder: false,
  description:
    "A prototype analytical setup exploring scheduled finance data ingestion, centralized data layers, local exploration, and lightweight dashboarding.<br/><br/><strong>Focus areas:</strong> scheduled data ingestion, BigQuery analytical layer, DuckDB exploration, dashboard performance, and structured finance data models.<br/><br/><strong>Tools:</strong> BigQuery, DuckDB, Python, Google Sheets, Apps Script, Power BI.<br/><br/><em>Architecture is presented as a simplified prototype.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dataArch0,
        alt: "Sơ đồ kiến trúc dữ liệu tài chính — từ nguồn sheets qua ingestion Python đến BigQuery và dashboards",
        caption: "Finance Data Architecture Exploration — Thiết Kế Hệ Thống",
      },
    },
    {
      type: "text",
      props: {
        title: "Động lực",
        text: "Hầu hết các hoạt động tài chính dựa nhiều vào Google Sheets, điều này ngày càng khó bảo trì khi khối lượng dữ liệu, độ phức tạp và quy mô đội nhóm tăng lên. Khám phá này điều tra lộ trình chuyển đổi sang cơ sở hạ tầng dữ liệu có cấu trúc và có thể mở rộng hơn.",
      },
    },
    {
      type: "text",
      props: {
        title: "Cách tiếp cận",
        text: "Prototype kiến trúc đa lớp: dữ liệu thô từ Google Sheets và xuất NetSuite, scripts Python theo lịch tải dữ liệu vào BigQuery, lớp chuyển đổi sử dụng SQL, files Parquet cho truy vấn phân tích ngoại tuyến qua DuckDB và Power BI kết nối với BigQuery cho dashboards.",
      },
    },
    {
      type: "text",
      props: {
        title: "Trạng thái",
        text: "Đây là khám phá đang tiếp tục. Một số thành phần đã được kiểm tra riêng lẻ. Tích hợp pipeline đầy đủ đang được thực hiện. Các bài học từ dự án này ảnh hưởng đến cách các công cụ tài chính được thiết kế và cấu trúc trong vai trò hiện tại.",
      },
    },
  ],
} as const satisfies ProjectContent;
