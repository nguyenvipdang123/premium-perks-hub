import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

const ProductCard = ({
  name,
  description,
  price,
  originalPrice,
  image,
  features,
  popular = false,
  delay = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative group rounded-2xl overflow-hidden ${
        popular ? "gradient-border" : "border border-border"
      }`}
    >
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3" />
            HOT
          </span>
        </div>
      )}

      <div className="glass p-6 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative h-32 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
          <img
            src={image}
            alt={name}
            className="relative w-20 h-20 object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & CTA */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold gradient-text">{price}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                {originalPrice}
              </span>
            )}
          </div>

          <Button
            variant={popular ? "gradient" : "default"}
            className="w-full"
            size="lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Mua ngay
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
