import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">
          <span className="gradient-text">ToolzFlow</span>
          <span className="ml-1 text-muted-foreground">Agency</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Team
          </a>
          <Button variant="default" size="sm">
            Book a Call
          </Button>
        </nav>

        <Button variant="ghost" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};