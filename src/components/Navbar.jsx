import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Crown, Info, Heart } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <Button variant="ghost" className="text-white hover:text-amber-200">
            <Heart className="mr-2 h-4 w-4" />
            Conservation
          </Button>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-amber-800 bg-white hover:bg-amber-100">
                Donate
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Donate to Lion Conservation</DialogTitle>
                <DialogDescription>
                  Your contribution helps protect lions and their habitats.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>Thank you for your interest in donating! This is a demo site, but in a real application, you would see donation options and a form here.</p>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
