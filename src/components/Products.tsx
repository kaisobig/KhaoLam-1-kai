import { Card, CardContent } from "@/components/ui/card";
import productSet1 from "@/assets/product-set-1.png";
import productSet2 from "@/assets/product-set-2.png";
import dessertBalls from "@/assets/dessert-balls.png";
import bingsu from "@/assets/bingsu.png";
import smoothie from "@/assets/smoothie.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "ชุดข้าวหลาม 4 รส",
      description: "ข้าวหลามหลากรสชาติ ในหลอดไม้ไผ่แท้ พร้อมเสิร์ฟบนกระด้งไม้สวยงาม",
      image: productSet1,
    },
    {
      id: 2,
      name: "ชุดข้าวหลามบุฟเฟ่ต์",
      description: "เลือกได้ถึง 10 รส ในถาดไม้สวยงาม เหมาะสำหรับงานเลี้ยง",
      image: productSet2,
    },
    {
      id: 3,
      name: "ไอศกรีมข้าวหลาม",
      description: "ไอศกรีมข้าวเหนียวนุ่ม หลากสี หลากรส ตกแต่งสวยงาม",
      image: dessertBalls,
    },
    {
      id: 4,
      name: "บิงซูข้าวหลาม",
      description: "น้ำแข็งไสเนื้อนุ่ม ราดด้วยกะทิหอม ในหลอดไม้ไผ่",
      image: bingsu,
    },
    {
      id: 5,
      name: "สมูทตี้ข้าวหลาม",
      description: "เครื่องดื่มข้าวหลามปั่น เย็นชื่นใจ หอมกะทิ ราดคาราเมล",
      image: smoothie,
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Prompt']">
            สินค้าของเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Prompt']">
            ข้าวหลามหลากหลายรูปแบบ สดใหม่ทุกวัน ทำด้วยวัตถุดิบคุณภาพ
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
              style={{ 
                animationDelay: `${index * 150}ms`,
                boxShadow: "var(--shadow-card)"
              }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 font-['Prompt']">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground font-['Prompt']">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
