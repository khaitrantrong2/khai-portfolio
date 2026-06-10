import arDash0 from "../../../assets/images/projects/ar-dashboard/ar-dashboard-0.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "AR Monitoring & Working Capital Dashboard",
  theme: "dark",
  tags: ["powerbi", "sheets", "powerquery", "netsuite", "finance"],
  videoBorder: false,
  description:
    "Dashboard tài chính để theo dõi các khoản phải thu tồn đọng, lịch trình xử lý, tranh chấp, trạng thái thanh toán và số dư kéo dài.<br/><br/>Dashboard chuyển đổi hồ sơ giao dịch vận hành từ NetSuite thành phân tích vốn lưu động có thể thực hiện được, cho phép quản lý chủ động danh mục AR.<br/><br/>Các phân tích chính bao gồm chu kỳ từ bút toán nhật ký đến hóa đơn, chu kỳ từ hóa đơn đến net-off, phân tích tuổi tồn đọng, cờ 60 và 90 ngày, phân tích chi tiết theo thương hiệu và quốc gia, theo dõi lý do tranh chấp, và khả năng hiển thị thu nợ và thanh toán.<br/><br/><em>Hình ảnh dự án sử dụng dữ liệu được tái tạo hoặc ẩn danh để bảo vệ thông tin kinh doanh bảo mật.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: arDash0,
        alt: "AR Monitoring Dashboard — khoản phải thu tồn đọng theo tuổi, phân tích theo quốc gia và pipeline thanh toán",
        caption: "AR Monitoring & Working Capital Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Vấn đề",
        text: "Trạng thái AR được theo dõi thủ công và không nhất quán. Các đội tài chính thiếu góc nhìn thời gian thực về số dư tồn đọng theo tuổi, lý do tranh chấp hoặc quốc gia. Các vấn đề leo thang thường đến quá muộn.",
      },
    },
    {
      type: "text",
      props: {
        title: "Giải pháp",
        text: "Xây dựng dashboard Power BI kết nối với dữ liệu Google Sheets có nguồn gốc từ xuất NetSuite. Power Query xử lý làm sạch và chuyển đổi dữ liệu. Dashboard cung cấp các góc nhìn chi tiết theo thương hiệu, quốc gia và nhóm tuổi, với cờ tự động cho số dư vượt quá 60 và 90 ngày.",
      },
    },
    {
      type: "text",
      props: {
        title: "Tác động",
        text: "Giúp các đội thu nợ ưu tiên theo dõi dựa trên dữ liệu thay vì ký ức. Các đánh giá vốn lưu động trở thành các cuộc trò chuyện có cấu trúc xung quanh dashboard chung.",
      },
    },
  ],
} as const satisfies ProjectContent;
