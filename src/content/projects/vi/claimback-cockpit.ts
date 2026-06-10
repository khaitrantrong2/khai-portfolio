import cockpit0 from "../../../assets/images/projects/claimback-cockpit/claimback-cockpit-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Claimback Review Cockpit",
  theme: "dark",
  tags: ["sheets", "appsscript", "html", "javascript", "netsuite", "powerquery"],
  videoBorder: false,
  description:
    "Hệ thống đánh giá tài chính được thiết kế để hợp nhất hoạt động claimback trên sáu quốc gia, tự động hóa kiểm tra kiểm soát, theo dõi trạng thái xử lý và giúp người đánh giá xác định các vấn đề tài chính tiềm ẩn.<br/><br/>Các đánh giá claimback trước đây bị phân tán, rất thủ công và phụ thuộc vào kiến thức cá nhân — tạo ra rủi ro về accrual còn thiếu, reversal không đúng, sai tài khoản, hóa đơn bị trễ và theo dõi thanh toán chưa đầy đủ. Cockpit này cung cấp một góc nhìn tổng hợp, có cấu trúc cho cả người chuẩn bị và người đánh giá.<br/><br/><em>Hình ảnh dự án sử dụng dữ liệu được tái tạo hoặc ẩn danh để bảo vệ thông tin kinh doanh bảo mật.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cockpit0,
        alt: "Claimback Review Cockpit — dashboard đa quốc gia hiển thị claims, ngoại lệ và trạng thái thanh toán",
        caption: "Claimback Review Cockpit — Dashboard Đa Quốc Gia",
      },
    },
    {
      type: "text",
      props: {
        title: "Vấn đề",
        text: "Đánh giá claimback rất thủ công, bị phân tán theo từng quốc gia và phụ thuộc vào kiến thức cá nhân. Điều này tạo ra rủi ro về accrual còn thiếu, reversal không đúng, sai tài khoản và theo dõi thanh toán không đầy đủ.",
      },
    },
    {
      type: "text",
      props: {
        title: "Giải pháp",
        text: "Thiết kế một cockpit đánh giá tổng hợp kết hợp dữ liệu vận hành, trạng thái kế toán, cờ ngoại lệ và phân tích quản lý. Hệ thống theo dõi accrual, reversal, invoice, credit note, VRA và hoạt động net-off trên Việt Nam, Singapore, Malaysia, Indonesia, Philippines và Thái Lan.",
      },
    },
    {
      type: "text",
      props: {
        title: "Tác động",
        text: "Giảm sự phụ thuộc vào đánh giá thủ công thuần túy và tạo nền tảng có thể mở rộng cho các kiểm soát tài chính mạnh hơn. Người đánh giá giờ có thể xác định ngoại lệ và các mục tồn đọng ngay lập tức.",
      },
    },
  ],
} as const satisfies ProjectContent;
