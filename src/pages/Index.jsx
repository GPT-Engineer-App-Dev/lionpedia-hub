import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cat, Info, Crown, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';

const LionFacts = [
  "Lions are the only cats that live in groups, which are called prides.",
  "A male lion's roar can be heard up to 5 miles away.",
  "Female lions do 85-90% of the pride's hunting.",
  "Lions can sleep up to 20 hours a day.",
  "A lion's heels don't touch the ground when it walks.",
  "Lions can run up to 50 mph in short bursts.",
  "A lion's tongue is covered in sharp, backward-facing barbs.",
  "Lions are the second-largest living cat species, after tigers.",
  "A lion's eyesight is 5 times better than a human's.",
  "Lion cubs are born with blue eyes that turn amber or brown around 3 months old.",
  "Male lions develop their iconic manes around 2 years of age.",
  "Lions can go up to four days without drinking water.",
  "The heaviest lion on record weighed 826 pounds (375 kg).",
  "Lions can mate up to 100 times in a single day.",
  "A group of lions is called a 'pride' or 'sawt'.",
  "Lions are mentioned in the Bible over 150 times.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % LionFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-100 to-orange-200">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-8 text-amber-800 flex items-center lowercase"
        >
          <Crown className="mr-2 h-12 w-12" /> the majestic lion
        </motion.h1>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-4xl mb-8"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg" 
          alt="Majestic Lion" 
          className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
        <motion.div 
          className="absolute bottom-4 left-4 text-white text-2xl font-semibold"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Panthera leo
        </motion.div>
      </motion.div>
      
      <Tabs defaultValue="about" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="facts">Facts</TabsTrigger>
          <TabsTrigger value="conservation">Conservation</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Cat className="mr-2" /> About Lions</CardTitle>
              <CardDescription>The kings and queens of the savanna</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Lions are majestic big cats of the genus Panthera, native to Africa and parts of India. 
                Known for their strength, courage, and iconic manes (in males), lions are symbols of 
                royalty and power across many cultures. They are social animals, living in prides that 
                typically consist of related females, their cubs, and a small number of adult males.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="facts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Info className="mr-2" /> Lion Facts</CardTitle>
              <CardDescription>Discover amazing lion trivia!</CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={factIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg mb-4 h-20"
                >
                  {LionFacts[factIndex]}
                </motion.p>
              </AnimatePresence>
              <Button onClick={nextFact} className="bg-amber-600 hover:bg-amber-700">Next Fact</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="conservation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Heart className="mr-2" /> Lion Conservation</CardTitle>
              <CardDescription>Protecting the future of lions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Lion populations have decreased by 43% in the last three generations. Conservation 
                efforts are crucial to ensure their survival in the wild.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Conservation Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  );
};

export default Index;
