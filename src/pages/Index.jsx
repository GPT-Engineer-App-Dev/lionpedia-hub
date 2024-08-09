import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LionFacts = [
  "Lions are the only cats that live in groups, which are called prides.",
  "A male lion's roar can be heard up to 5 miles away.",
  "Female lions do 85-90% of the pride's hunting.",
  "Lions can sleep up to 20 hours a day.",
  "A lion's heels don't touch the ground when it walks.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % LionFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4">
      <h1 className="text-4xl font-bold mb-6 text-amber-800">The Majestic Lion</h1>
      
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg" 
        alt="Majestic Lion" 
        className="mx-auto object-cover w-full max-w-2xl h-[400px] rounded-lg shadow-lg mb-6"
      />
      
      <Card className="w-full max-w-2xl mb-6">
        <CardHeader>
          <CardTitle>About Lions</CardTitle>
          <CardDescription>The king of the jungle</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Lions are large cats of the genus Panthera native to Africa and India. They are muscular, 
            deep-chested cats with short, rounded heads, reduced necks, and round ears. Adult male lions 
            are distinguished by their manes, which are highly recognizable symbols of the species.
          </p>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Lion Facts</CardTitle>
          <CardDescription>Click the button to learn more!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">{LionFacts[factIndex]}</p>
          <Button onClick={nextFact}>Next Fact</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
