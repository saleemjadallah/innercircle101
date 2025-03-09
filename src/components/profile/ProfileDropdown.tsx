
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserAvatar } from "./UserAvatar";
import { 
  User, 
  Settings, 
  LogOut, 
  HelpCircle, 
  Award, 
  Moon, 
  Sun, 
  Shield,
  Bell,
  BellOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { getRecentlyEarnedBadges } from "@/data/badgesData";

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileDropdown = ({ isOpen, onClose }: ProfileDropdownProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [notifications, setNotifications] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Get recently earned badges
  const recentBadges = getRecentlyEarnedBadges(7); // badges earned in the last 7 days
  const hasNewBadges = recentBadges.length > 0;
  
  useEffect(() => {
    // Handle click outside to close dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    toast({
      title: newMode ? "Dark mode enabled" : "Light mode enabled",
      duration: 2000,
    });
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
    toast({
      title: notifications ? "Notifications disabled" : "Notifications enabled",
      duration: 2000,
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-16 right-4 w-72 bg-card rounded-lg border shadow-lg z-50 overflow-hidden"
    >
      {/* Guest View (Not authenticated) */}
      {!isAuthenticated ? (
        <div className="divide-y divide-border">
          <div className="p-4 text-center">
            <h3 className="font-medium text-lg mb-2">Welcome to InnerCircle</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Sign in to track your social battery and access personalized features
            </p>
            <div className="space-y-2">
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => setIsAuthenticated(true)}
              >
                Sign In (Demo)
              </Button>
              <Link to="/auth?mode=signup" className="block w-full">
                <Button variant="outline" className="w-full">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                <span className="text-sm">Dark Mode</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            </div>
            
            <Link to="/faq" className="flex items-center gap-2 text-sm p-2 hover:bg-accent rounded-md">
              <HelpCircle size={18} />
              <span>FAQ & Help</span>
            </Link>
          </div>
        </div>
      ) : (
        // Authenticated User View
        <div className="divide-y divide-border">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <UserAvatar size="lg" showStatus status="online" />
              <div>
                <h3 className="font-medium">Guest User</h3>
                <p className="text-sm text-muted-foreground">guest@example.com</p>
              </div>
            </div>
          </div>
          
          <div className="p-2">
            <Link to="/profile" className="flex items-center gap-2 p-2 text-sm hover:bg-accent rounded-md">
              <User size={18} />
              <span>My Profile</span>
            </Link>
            
            <Link to="/profile?tab=badges" className="flex items-center justify-between p-2 text-sm hover:bg-accent rounded-md">
              <div className="flex items-center gap-2">
                <Award size={18} />
                <span>Badges & Achievements</span>
              </div>
              {hasNewBadges && (
                <Badge variant="default" className="text-xs">
                  {recentBadges.length} new
                </Badge>
              )}
            </Link>
            
            <Link to="/profile?tab=settings" className="flex items-center gap-2 p-2 text-sm hover:bg-accent rounded-md">
              <Settings size={18} />
              <span>Settings</span>
            </Link>
            
            <Link to="/profile?tab=privacy" className="flex items-center gap-2 p-2 text-sm hover:bg-accent rounded-md">
              <Shield size={18} />
              <span>Privacy & Data</span>
            </Link>
          </div>
          
          <div className="p-2 space-y-1">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2 text-sm">
                {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                <span>Dark Mode</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            </div>
            
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2 text-sm">
                {notifications ? <Bell size={18} /> : <BellOff size={18} />}
                <span>Notifications</span>
              </div>
              <Switch checked={notifications} onCheckedChange={toggleNotifications} />
            </div>
          </div>
          
          <div className="p-2">
            <Link to="/faq" className="flex items-center gap-2 p-2 text-sm hover:bg-accent rounded-md">
              <HelpCircle size={18} />
              <span>FAQ & Help</span>
            </Link>
            
            <button 
              className="flex items-center gap-2 p-2 text-sm hover:bg-accent rounded-md w-full text-left text-destructive"
              onClick={() => {
                toast({
                  title: "Signed out successfully",
                  duration: 2000,
                });
                setIsAuthenticated(false);
              }}
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
