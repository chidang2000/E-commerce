import { AiOutlineCreditCard } from "react-icons/ai";
import { BiCart, BiDiamond } from "react-icons/bi";
import { RiHandHeartLine } from "react-icons/ri";
const policy = [
  {
    name: "Miễn phí giao hàng",
    description: "Miễn phí ship với đơn hàng > 239K",
    icon: <BiCart />,
  },
  {
    name: "Thanh toán COD",
    description: "Thanh toán khi nhận hàng (COD)",
    icon: <AiOutlineCreditCard />,
  },
  {
    name: "Khách hàng VIP",
    description: "Ưu đãi dành cho khách hàng VIP",
    icon: <BiDiamond />,
  },
  {
    name: "Hỗ trợ bảo hành",
    description: "Đổi, sửa đồ tại tất cả store",
    icon: <RiHandHeartLine />,
  },
];

export default policy;
