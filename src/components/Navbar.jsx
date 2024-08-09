import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Crown, Info, Heart } from 'lucide-react';

const Navbar = ({ onConservationClick }) => {
  return (
    <nav className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Crown className="mr-2" />
          <span>Lion Kingdom</span>
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-amber-200">
            <Info className="mr-2 h-4 w-4" />
            About
          </Button>
          <Button variant="ghost" className="text-white hover:text-amber-200" onClick={onConservationClick}>
            <Heart className="mr-2 h-4 w-4" />
            Conservation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
