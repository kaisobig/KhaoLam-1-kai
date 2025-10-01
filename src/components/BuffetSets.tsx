import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Clock, Sparkles } from "lucide-react";

const BuffetSets = () => {
  const sets = [
    { id: 1, name: "Set มินิ", price: "149", people: "1-2 คน", duration: "1 ชั่วโมง",
      features: ["ข้าวหลาม 8 รส","น้ำดื่ม 2 ขวด","กะทิหอมๆ","ที่นั่งสบาย"], highlight: false },
    { id: 2, name: "Set สแตนดาร์ด", price: "249", people: "3-4 คน", duration: "1.5 ชั่วโมง",
      features: ["ข้าวหลาม 12 รส","เครื่องดื่ม 4 แก้ว","ไอศกรีมข้าวหลาม","กะทิหอมๆ","ของว่างเสริม","ที่นั่งสบาย"], highlight: true },
    { id: 3, name: "Set ครอบครัว", price: "499", people: "5-8 คน", duration: "2 ชั่วโมง",
      features: ["ข้าวหลามไม่จำกัด","เครื่องดื่มไม่จำกัด","ไอศกรีมข้าวหลาม","บิงซูข้าวหลาม","กะทิหอมๆ","ของว่างพิเศษ","ที่นั่งโซนพิเศษ"], highlight: false },
  ];

  return (
    <section id="buffet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-['Prompt']">
              Set บุฟเฟ่ต์
            </h2>
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Prompt']">
            ทานได้ไม่อั้น! เลือก Set ที่เหมาะกับคุณ ราคาประหยัด คุ้มค่า
          </p>
        </div>

        {/* Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sets.map((set, index) => (
            <Card
              key={set.id}
              className={`relative overflow-visible transition-all duration-300 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 ${
                set.highlight ? "border-2 border-secondary scale-105 shadow-xl" : "border-0 hover:scale-105"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                boxShadow: set.highlight ? "var(--shadow-card)" : "var(--shadow-soft)",
              }}
            >
              <CardHeader className="relative text-center pb-4 pt-12">
                {/* Popular Pointer Tag */}
                {set.highlight && (
                  <div className="absolute top-1 right-1 z-10">
                    <div
                      className="relative inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm md:text-base font-bold text-white shadow-lg font-['Prompt']"
                      style={{ background: "var(--gradient-sweet)" }}
                    >
                      ✨ <span>ยอดนิยม</span>
                    </div>
                  </div>
                )}

                {/* Set Name */}
                <CardTitle className="text-3xl font-bold text-primary mb-2 font-['Prompt']">
                  {set.name}
                </CardTitle>

                {/* Price */}
                <div className="mt-2">
                  <span className="text-5xl font-bold text-secondary">{set.price}</span>
                  <span className="text-xl text-muted-foreground font-['Prompt']"> บาท</span>
                </div>

                {/* People & Duration */}
                <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="font-['Prompt']">{set.people}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-['Prompt']">{set.duration}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {set.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "var(--gradient-bamboo)" }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground font-['Prompt']">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-full py-6 text-lg font-['Prompt'] font-semibold ${set.highlight ? "" : "opacity-90"}`}
                  style={{ background: set.highlight ? "var(--gradient-sweet)" : "var(--gradient-bamboo)" }}
                  asChild
                >
                  {/* <a href="#contact">จองเลย</a> */}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 p-6 rounded-2xl bg-muted/30 max-w-3xl mx-auto">
          <p className="text-muted-foreground font-['Prompt']">
            💡 <strong>หมายเหตุ:</strong> สามารถจองล่วงหน้าได้ • รับจัดงานเลี้ยง/อีเวนต์ • ราคาพิเศษสำหรับกลุ่มใหญ่ • ติดต่อสอบถามเพิ่มเติมได้ที่ช่องทางด้านล่าง
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuffetSets;
