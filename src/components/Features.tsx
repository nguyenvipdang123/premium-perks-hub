import { motion } from "framer-motion";
import { Shield, Zap, HeadphonesIcon, RefreshCw, CreditCard, Gift } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Kích hoạt tức thì",
    description: "Nhận tài khoản ngay sau khi thanh toán, không cần chờ đợi lâu.",
  },
  {
    icon: Shield,
    title: "Bảo hành trọn đời",
    description: "Cam kết hỗ trợ và thay thế miễn phí nếu có vấn đề phát sinh.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ CSKH luôn sẵn sàng giải đáp mọi thắc mắc của bạn.",
  },
  {
    icon: RefreshCw,
    title: "Cập nhật liên tục",
    description: "Sản phẩm mới và khuyến mãi được cập nhật thường xuyên.",
  },
  {
    icon: CreditCard,
    title: "Thanh toán đa dạng",
    description: "Hỗ trợ Momo, ZaloPay, chuyển khoản ngân hàng và nhiều hơn nữa.",
  },
  {
    icon: Gift,
    title: "Ưu đãi thành viên",
    description: "Giảm giá đặc biệt cho khách hàng thân thiết và mua số lượng lớn.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Dịch vụ <span className="gradient-text-accent">uy tín hàng đầu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cam kết mang đến trải nghiệm mua sắm tốt nhất cho khách hàng
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/50">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
