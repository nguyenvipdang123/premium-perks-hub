import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PremiumStore - Tài khoản Premium Giá Tốt Nhất | Spotify, YouTube, ChatGPT</title>
        <meta
          name="description"
          content="Mua tài khoản Spotify Premium, YouTube Premium, ChatGPT Plus, Netflix, Shopee voucher với giá tốt nhất. Kích hoạt tức thì, bảo hành trọn đời."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Features />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
