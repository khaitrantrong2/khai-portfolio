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
        alt: "Claimback Master Tracker — mô hình dữ liệu khu vực bao gồm 6 quốc gia với tiến độ hoàn thành",
        caption: "Claimback Master Tracker — Mô Hình Dữ Liệu Khu Vực",
      },
    },
    {
      type: "text",
      props: {
        title: "Vấn đề",
        text: "Dữ liệu claimback được lưu trữ trong các tệp không chuẩn hóa theo từng quốc gia. Phân tích đa quốc gia đòi hỏi nỗ lực thủ công đáng kể và tạo ra kết quả không nhất quán.",
      },
    },
    {
      type: "text",
      props: {
        title: "Giải pháp",
        text: "Thiết kế mô hình dữ liệu thống nhất bao gồm tất cả các trường claimback quan trọng. Power Query chuẩn hóa dữ liệu đến từ các nguồn quốc gia khác nhau. Apps Script xử lý cập nhật trạng thái tự động và logic cờ đánh giá.",
      },
    },
    {
      type: "text",
      props: {
        title: "Tác động",
        text: "Cải thiện tính nhất quán dữ liệu, khả năng hiển thị khu vực và khả năng phân tích hoạt động claimback trên các mô hình vận hành khác nhau.",
      },
    },
  ],
} as const satisfies ProjectContent;
