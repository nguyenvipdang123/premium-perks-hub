import { motion } from "framer-motion";
import { Zap, Facebook, MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Sẵn sàng trải nghiệm <span className="gradient-text">Premium</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Liên hệ ngay để được tư vấn và hỗ trợ mua hàng nhanh nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0068FF]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,104,255,0.4)]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Zalo
            </a>
            <a
              href="https://m.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00C6FF] to-[#0078FF] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,198,255,0.4)]"
            >
              <Facebook className="w-5 h-5" />
              Messenger
            </a>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">Premium</span>Store
              </span>
            </a>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Cung cấp tài khoản Premium chính hãng với giá tốt nhất thị trường. Bảo hành và hỗ trợ tận tình 24/7.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Sản phẩm</h4>
            <ul className="space-y-3">
              {["Spotify Premium", "YouTube Premium", "ChatGPT Plus", "Netflix"].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                0123 456 789
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                support@premiumstore.vn
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PremiumStore. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
