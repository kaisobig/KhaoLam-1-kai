import { Phone, Facebook, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "โทรศัพท์",
      value: "099-999-9999",
      href: "tel:0999999999",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "เท่าแขน ข้าวหลามบุฟเฟ่ต์",
      href: "https://facebook.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@taokaen_khaolam",
      href: "https://instagram.com",
    },
    {
      icon: MapPin,
      label: "สถานที่",
      value: "กรุงเทพมหานคร",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Prompt']">
              ติดต่อเรา
            </h2>
            <p className="text-lg text-muted-foreground font-['Prompt']">
              พร้อมให้บริการและตอบคำถามทุกข้อสงสัย
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  boxShadow: "var(--shadow-soft)"
                }}
              >
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-bamboo)" }}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-['Prompt']">
                    {contact.label}
                  </div>
                  <div className="font-semibold text-primary font-['Prompt']">
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div 
            className="text-center p-12 rounded-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000"
            style={{ 
              background: "var(--gradient-hero)",
              boxShadow: "var(--shadow-card)"
            }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4 font-['Prompt']">
              สั่งซื้อวันนี้
            </h3>
            <p className="text-lg text-foreground/80 mb-6 font-['Prompt']">
              พร้อมส่งถึงมือคุณ สดใหม่ อร่อยทุกคำ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="rounded-full text-lg px-8 py-6 font-['Prompt'] font-semibold"
                style={{ background: "var(--gradient-bamboo)" }}
                asChild
              >
                <a href="tel:0999999999">โทรสั่งเลย</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 py-6 font-['Prompt'] font-semibold border-2 border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://www.canva.com/design/DAGzPTv-2Y8/1K7Y9o9NEDUH1j6OeMU03w/view?utm_content=DAGzPTv-2Y8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha92b0daa68">ดูพรีเซนเทชั่น</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
