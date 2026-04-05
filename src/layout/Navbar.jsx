import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [{href:"#about", label:"About"}, {href:"#experience", label:"Experience"}, {href:"#projects", label:"Projects"}]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
    <nav className="container mx-auto px-6 flex items-center justify-between">
      <a href="#" className="text-xl font-bold hover:text-primary">
        LK<span className="text-primary">.</span>
      </a>

    {/* Desktop Navbar */}
    <div className="hidden md:flex items-center gap-1">
      <div className="smoke-bg rounded-full px-2 py-1 flex items-center gap-1">
        {navLinks.map((link, index) => (
          <a href={link.href} key={index} className="px-4 text-sm hover:text-primary">
            {link.label}
          </a>
        ))}
      </div>
    </div>
{/* CTA Button  */}
    <div className="hidden md:block">
      <Button size="sm" className="cursor-pointer">
        Download my CV
      </Button>
    </div>
{/* mobile hamburguer */}
    <button className="md:hidden p-2 text-primary" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
        {isMobileMenuOpen ? <X /> : <Menu />}
    </button>
    </nav>
    {isMobileMenuOpen && (
    <div className="md:hidden animate-fade-in">
      <div className="container mx-auto p-6 flex flex-col gap-4">
         {navLinks.map((link, index) => (
          <a href={link.href} key={index} className="px-4 text-sm hover:text-primary" onClick = {() => setIsMobileMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <Button size="sm">
        Download my CV
      </Button>
      </div>
    </div>
    )}
  </header>
}
