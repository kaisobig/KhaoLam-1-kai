import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "ทำด้วยใจ",
      description: "ใส่ใจทุกขั้นตอน ตั้งแต่การคัดสรรวัตถุดิบคุณภาพ จนถึงมือลูกค้า",
    },
    {
      icon: Sparkles,
      title: "สดใหม่ทุกวัน",
      description: "ผลิตสดใหม่ทุกวัน ไม่มีสารกันบูด รสชาติอร่อยแบบดั้งเดิม",
    },
    {
      icon: Users,
      title: "บริการครบครัน",
      description: "รับจัดชุดของฝาก งานอีเวนต์ และบุฟเฟ่ต์สำหรับงานเลี้ยง",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Prompt']">
            เกี่ยวกับเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-['Prompt'] leading-relaxed">
            เท่าแขน ข้าวหลามบุฟเฟ่ต์ เกิดจากแนวคิดที่ต้องการนำขนมไทยพื้นบ้านอย่างข้าวหลาม
            มาปรับโฉมให้ทันสมัย สะดวกในการเลือกชิม ด้วยรูปแบบบุฟเฟ่ต์หลากหลายรสชาติ
            เหมาะสำหรับทุกโอกาส ทั้งงานเลี้ยง ของฝาก และความอร่อยในทุกวัน
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ 
                animationDelay: `${index * 150}ms`,
                boxShadow: "var(--shadow-soft)"
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ background: "var(--gradient-bamboo)" }}
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-3 font-['Prompt']">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-['Prompt']">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
