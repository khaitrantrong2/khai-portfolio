import glAnalysis0 from "../../../assets/images/projects/gl-analysis/gl-analysis-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "GL Analysis Engine",
  theme: "dark",
  tags: ["python", "duckdb", "sql", "excel", "netsuite"],
  videoBorder: false,
  description:
    "Công cụ đánh giá kế toán dựa trên Python để phân tích dữ liệu sổ cái tổng hợp và làm nổi bật các giao dịch cần điều tra sâu hơn. Đây là hệ thống đang phát triển, không phải sản phẩm AI tự động hoàn toàn.<br/><br/>Công cụ áp dụng tập hợp quy tắc có thể cấu hình để đánh giá các bút toán kế toán và nêu ra các vấn đề tiềm ẩn như accrual và reversal không khớp, thiếu reversal, sai tài khoản, sai phân loại hoặc bộ phận, sai kỳ hoạt động và các bất thường bút toán nhật ký.<br/><br/><em>Hình ảnh dự án sử dụng dữ liệu được tái tạo hoặc ẩn danh để bảo vệ thông tin kinh doanh bảo mật.</em>",
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
