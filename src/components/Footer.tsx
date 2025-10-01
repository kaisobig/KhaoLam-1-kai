import mascotImage from "@/assets/mascot.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={mascotImage} 
              alt="เท่าแขน" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold font-['Prompt']">
              เท่าแขน ข้าวหลามบุฟเฟ่ต์
            </span>
          </div>

          {/* Tagline */}
          <p className="text-primary-foreground/80 text-center font-['Prompt']">
            ข้าวหลามพื้นบ้าน ปรับโฉมใหม่ในสไตล์บุฟเฟ่ต์
          </p>

          {/* Copyright + Link */}
          <p className="text-sm font-['Prompt'] text-white/70">
            © 2025{" "}
            <a
              href="https://www.canva.com/design/DAGzPTv-2Y8/AvAcqkkGQjElUkVwXO0ydA/edit?utm_content=DAGzPTv-2Y8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffcc00] no-underline hover:underline"
            >
              เท่าแขน ข้าวหลามบุฟเฟ่ต์
            </a>{" "}
            • สงวนลิขสิทธิ์ • โดย นายภูริพัฒน์ ลครไทย
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
