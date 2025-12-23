import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Spotify Premium",
    description: "Nghe nhạc không giới hạn, không quảng cáo",
    price: "49K",
    originalPrice: "59K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png",
    features: [
      "Nghe nhạc không quảng cáo",
      "Tải xuống nghe offline",
      "Chất lượng âm thanh cao",
    ],
    popular: true,
  },
  {
    name: "YouTube Premium",
    description: "Xem video không quảng cáo, YouTube Music",
    price: "59K",
    originalPrice: "79K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png",
    features: [
      "Không quảng cáo YouTube",
      "YouTube Music Premium",
      "Tải video xem offline",
    ],
    popular: true,
  },
  {
    name: "ChatGPT Plus",
    description: "Truy cập GPT-4, ưu tiên khi cao tải",
    price: "299K",
    originalPrice: "450K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png",
    features: [
      "Truy cập GPT-4 Turbo",
      "Tạo ảnh với DALL-E",
      "Ưu tiên trong giờ cao điểm",
    ],
    popular: true,
  },
  {
    name: "Gemini Pro",
    description: "AI của Google với khả năng đa phương tiện",
    price: "249K",
    originalPrice: "350K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/512px-Google_Gemini_logo.svg.png",
    features: [
      "Gemini 1.5 Pro",
      "Phân tích hình ảnh",
      "Tích hợp Google Workspace",
    ],
  },
  {
    name: "Shopee Voucher 80K",
    description: "Tài khoản Shopee có voucher 80.000đ",
    price: "35K",
    originalPrice: "50K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/512px-Shopee.svg.png",
    features: [
      "Voucher giảm 80K",
      "Áp dụng mọi đơn hàng",
      "Không giới hạn sản phẩm",
    ],
  },
  {
    name: "Shopee Voucher 100K",
    description: "Tài khoản Shopee có voucher 100.000đ",
    price: "45K",
    originalPrice: "60K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/512px-Shopee.svg.png",
    features: [
      "Voucher giảm 100K",
      "Freeship Extra",
      "Áp dụng mọi shop",
    ],
  },
  {
    name: "Netflix Premium",
    description: "Xem phim 4K, 4 màn hình cùng lúc",
    price: "79K",
    originalPrice: "99K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
    features: [
      "Chất lượng 4K Ultra HD",
      "4 thiết bị cùng lúc",
      "Tải xuống xem offline",
    ],
  },
  {
    name: "Canva Pro",
    description: "Thiết kế chuyên nghiệp với 100M+ templates",
    price: "99K",
    originalPrice: "149K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/512px-Canva_icon_2021.svg.png",
    features: [
      "100M+ templates premium",
      "Xóa nền tự động",
      "Brand Kit đầy đủ",
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sản phẩm
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Tài khoản <span className="gradient-text">Premium</span> phổ biến
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đa dạng sản phẩm, giá cả cạnh tranh nhất thị trường. Bảo hành và hỗ trợ tận tình.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
