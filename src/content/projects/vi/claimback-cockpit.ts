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
