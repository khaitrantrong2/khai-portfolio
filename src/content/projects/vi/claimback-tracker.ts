import tracker0 from "../../../assets/images/projects/claimback-tracker/claimback-tracker-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Claimback Master Tracker",
  theme: "dark",
  tags: ["sheets", "appsscript", "powerquery", "finance"],
  videoBorder: false,
  description:
    "Mô hình dữ liệu khu vực chuẩn hóa để hợp nhất hoạt động claimback trên nhiều quốc gia, nền tảng, thương hiệu và mô hình thương mại.<br/><br/>Phạm vi bao gồm Việt Nam, Singapore, Malaysia, Indonesia, Philippines và Thái Lan. Mỗi bản ghi theo dõi thương hiệu, quốc gia, nền tảng, loại yêu cầu, kỳ hoạt động, số tiền accrual, số tiền hóa đơn, bút toán nhật ký, reversal, credit note hoặc VRA, hoạt động net-off, ngày xử lý chính, trạng thái đặt chỗ và cờ đánh giá.<br/><br/><em>Hình ảnh dự án sử dụng dữ liệu được tái tạo hoặc ẩn danh để bảo vệ thông tin kinh doanh bảo mật.</em>",
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
