import { Button } from "@/components/Button";
const navLinks = [{href:"#about", label:"About"}, {href:"#experience", label:"Experience"}, {href:"#projects", label:"Projects"}]
export const Navbar = () => {
  return <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
    <nav className="container mx-auto px-6 flex items-center justify-between">
      <a href="#" className="text-xl font-bold hover:text-primary">
        LK<span className="text-primary">.</span>
      </a>

    {/* Desktop Navbar */}
    <div className="flex items-center gap-1">
      <div className="smoke-bg rounded-full px-2 py-1 flex items-center gap-1">
        {navLinks.map((link, index) => (
          <a href={link.href} key={index} className="px-4 text-sm hover:text-primary">
            {link.label}
          </a>
        ))}
      </div>
    </div>
{/* CTA Button  */}
    <div>
      <Button>
        Download my CV
      </Button>
    </div>
    </nav>
  </header>
}
