import { useState } from "react";
import { Menu, X } from "lucide-react";
import mascotImage from "@/assets/mascot.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "หน้าแรก", href: "#home" },
    { label: "สินค้า", href: "#products" },
    { label: "Set บุฟเฟ่ต์", href: "#buffet" },
    { label: "เกี่ยวกับเรา", href: "#about" },
    { label: "ของฝาก", href: "#gifts" },
    { label: "ติดต่อ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={mascotImage} 
              alt="เท่าแขน มาสคอต" 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold text-primary font-['Prompt']">
              เท่าแขน ข้าวหลามบุฟเฟ่ต์
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground font-medium font-['Prompt'] hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground font-medium font-['Prompt'] hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
