import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { navItems } from "./sidebar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <MobileNav />
          <Link to="/" className="font-semibold text-lg sm:text-xl">
            ⚡ MyDashboard
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/login" className="hidden sm:block">
            <Button variant="secondary" size="sm">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={20} />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72">
        <nav className="p-4 space-y-1" aria-label="Mobile navigation">
          {navItems.map(({ to, label, icon: Icon }) => (
            <SheetClose asChild key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md p-2 text-base transition-colors ${
                    isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent"
                  }`
                }
              >
                <Icon size={18} aria-hidden />
                <span>{label}</span>
              </NavLink>
            </SheetClose>
          ))}
          <div className="pt-2 border-t mt-3">
            <SheetClose asChild>
              <Link to="/login" className="block">
                <Button variant="secondary" className="w-full">Login</Button>
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
