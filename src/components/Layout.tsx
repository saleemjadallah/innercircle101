import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Battery, Users, Brain, LineChart, Home, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/profile/UserAvatar";
import { ProfileDropdown } from "@/components/profile/ProfileDropdown";
import { Logo } from "@/components/ui/Logo";

const Layout = () => {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const NavItem = ({
    to,
    icon: Icon,
    label
  }: {
    to: string;
    icon: React.ElementType;
    label: string;
  }) => {
    const isActive = location.pathname === to;
    return <Link to={to} className="w-full">
        <Button variant="ghost" className={cn("w-full justify-start gap-2", isActive ? "bg-accent" : "hover:bg-accent/50")}>
          <Icon size={18} />
          <span>{label}</span>
        </Button>
      </Link>;
  };

  return <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center justify-between px-[12px] py-[14px]">
        <div className="flex-1"></div>
        <div className="flex justify-center flex-1">
          <Logo />
        </div>
        <div className="flex items-center justify-end flex-1">
          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <UserAvatar />
          </Button>
          {isProfileOpen && <ProfileDropdown isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-64 border-r p-3 hidden md:block">
          <div className="space-y-1">
            <NavItem to="/" icon={Home} label="Home" />
            <NavItem to="/social-battery" icon={Battery} label="Social Battery" />
            <NavItem to="/social-navigation" icon={Users} label="Social Navigation" />
            <NavItem to="/connection-builder" icon={Brain} label="Connection Builder" />
            <NavItem to="/wellbeing" icon={LineChart} label="Wellbeing" />
            <NavItem to="/profile" icon={User} label="My Profile" />
          </div>
        </nav>

        <div className="fixed bottom-0 left-0 right-0 border-t bg-white md:hidden z-10">
          <div className="flex justify-around py-2">
            <Link to="/" className={cn("p-2 rounded-full", location.pathname === "/" && "text-[#2A7D8B]")}>
              <Home size={28} className={location.pathname === "/" ? "text-[#2A7D8B]" : "text-[#8A94A6]"} />
            </Link>
            <Link to="/social-battery" className={cn("p-2 rounded-full", location.pathname === "/social-battery" && "text-[#2A7D8B]")}>
              <Battery size={28} className={location.pathname === "/social-battery" ? "text-[#2A7D8B]" : "text-[#8A94A6]"} />
            </Link>
            <Link to="/social-navigation" className={cn("p-2 rounded-full", location.pathname === "/social-navigation" && "text-[#2A7D8B]")}>
              <Users size={28} className={location.pathname === "/social-navigation" ? "text-[#2A7D8B]" : "text-[#8A94A6]"} />
            </Link>
            <Link to="/connection-builder" className={cn("p-2 rounded-full", location.pathname === "/connection-builder" && "text-[#2A7D8B]")}>
              <Brain size={28} className={location.pathname === "/connection-builder" ? "text-[#2A7D8B]" : "text-[#8A94A6]"} />
            </Link>
            <Link to="/wellbeing" className={cn("p-2 rounded-full", location.pathname === "/wellbeing" && "text-[#2A7D8B]")}>
              <LineChart size={28} className={location.pathname === "/wellbeing" ? "text-[#2A7D8B]" : "text-[#8A94A6]"} />
            </Link>
          </div>
        </div>

        <main className="flex-1 overflow-auto p-4 pb-16 md:pb-4">
          <Outlet />
        </main>
      </div>
    </div>;
};

export default Layout;
