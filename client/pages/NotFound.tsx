import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-9xl font-extrabold text-primary/20 mb-4 animate-pulse">404</h1>
        <h2 className="text-4xl font-bold mb-4">Lost in the Valley?</h2>
        <p className="text-xl text-foreground/60 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/">Return to Civilization</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
