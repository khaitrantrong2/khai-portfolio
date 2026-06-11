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
        alt: "GL Analysis Engine — sơ đồ pipeline và dashboard phân loại vấn đề",
        caption: "GL Analysis Engine — Pipeline Đánh Giá Dựa Trên Quy Tắc",
      },
    },
    {
      type: "text",
      props: {
        title: "Vấn đề",
        text: "Đánh giá GL truyền thống có nghĩa là lọc thủ công hàng nghìn bút toán và dựa vào kinh nghiệm cá nhân để phát hiện bất thường. Các cách tiếp cận không nhất quán dẫn đến khoảng trống trong phạm vi kiểm soát tài chính.",
      },
    },
    {
      type: "text",
      props: {
        title: "Cách tiếp cận",
        text: "Xây dựng công cụ dựa trên quy tắc sử dụng Python và DuckDB để tải, phân tích cú pháp và đánh giá xuất GL. Các quy tắc gắn cờ các mẫu vấn đề phổ biến và xuất ra danh sách đánh giá ưu tiên.",
      },
    },
    {
      type: "text",
      props: {
        title: "Trạng thái",
        text: "Đây là hệ thống đang phát triển tích cực. Tập hợp quy tắc được mở rộng theo thời gian khi xác định được các mẫu mới. Mục tiêu là làm cho việc kiểm tra nhất quán và nỗ lực của người đánh giá có mục tiêu hơn.",
      },
    },
  ],
} as const satisfies ProjectContent;
