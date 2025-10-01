import { Button } from "@/components/ui/button";
import mascotImage from "@/assets/mascot.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center pt-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content (ซ้าย) */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-['Prompt']">
              เท่าแขน ข้าวหลามบุฟเฟ่ต์
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 mb-8 max-w-2xl font-['Prompt']">
              ข้าวหลามพื้นบ้าน ปรับโฉมใหม่ในสไตล์บุฟเฟ่ต์
              <br />
              หลากหลายรสชาติ เลือกได้ตามใจชอบ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full font-['Prompt'] font-semibold"
                style={{ background: "var(--gradient-bamboo)" }}
                asChild
              >
                <a href="#products">ดูสินค้า</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full font-['Prompt'] font-semibold border-2 border-primary hover:bg-primary/10"
                asChild
              >
                <a href="#contact">ติดต่อเรา</a>
              </Button>
            </div>
          </div>

          {/* Mascot Image (ขวา) */}
          <div className="flex justify-center md:justify-end">
            <img
              src={mascotImage}
              alt="เท่าแขน มาสคอต"
              className="w-56 h-56 md:w-[400px] md:h-[400px] object-contain drop-shadow-2xl animate-float-slow motion-reduce:animate-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
