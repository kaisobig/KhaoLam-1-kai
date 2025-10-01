import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Package, Calendar } from "lucide-react";
import giftBoxImage from "@/assets/gift-box.png";

const Gifts = () => {
  const giftServices = [
    {
      icon: Gift,
      title: "ชุดของฝาก",
      description: "บรรจุภัณฑ์สวยงาม พร้อมส่ง เหมาะสำหรับมอบเป็นของขวัญ",
    },
    {
      icon: Package,
      title: "ปรับแต่งได้",
      description: "เลือกรสชาติได้ตามต้องการ ออกแบบกล่องได้ตามสไตล์",
    },
    {
      icon: Calendar,
      title: "รับจองล่วงหน้า",
      description: "รับจองสำหรับงานอีเวนต์ งานแต่งงาน และงานเลี้ยง",
    },
  ];

  return (
    <section id="gifts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Prompt']">
              บริการของฝาก
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Prompt']">
              จัดชุดของฝากสวยงาม พร้อมบริการครบวงจร สำหรับทุกโอกาสพิเศษ
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Gift Box Image */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <Card 
                className="overflow-hidden border-0"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted/50 to-muted">
                    <img
                      src={giftBoxImage}
                      alt="ชุดของฝาก"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gift Services */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              {giftServices.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl bg-background hover:bg-muted/50 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "var(--gradient-sweet)" }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-['Prompt']">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-['Prompt']">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}

              <Button 
                size="lg" 
                className="w-full rounded-full text-lg py-6 font-['Prompt'] font-semibold mt-8"
                style={{ background: "var(--gradient-bamboo)" }}
                asChild
              >
                <a href="#contact">สอบถามเพิ่มเติม</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
