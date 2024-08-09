import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cat, Info, Crown, Heart, Film, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
  "A group of lions is called a 'pride'.",
  "Lions are mentioned in the Bible over 150 times.",
];

const quizQuestions = [
  {
    question: "What is a group of lions called?",
    options: ["Pack", "Herd", "Pride", "Flock"],
    correctAnswer: "Pride"
  },
  {
    question: "How many hours can a lion sleep in a day?",
    options: ["Up to 5", "Up to 10", "Up to 15", "Up to 20"],
    correctAnswer: "Up to 20"
  },
  {
    question: "Which gender of lions usually does most of the hunting?",
    options: ["Male", "Female", "Both equally", "Cubs"],
    correctAnswer: "Female"
  }
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [progress, setProgress] = useState(13);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const tabsRef = useRef(null);
  const conservationRef = useRef(null);

  const scrollToConservation = () => {
    setTimeout(() => {
      const conservationTab = tabsRef.current?.querySelector('[value="conservation"]');
      if (conservationTab) {
        conservationTab.click();
      }
      if (conservationRef.current) {
        conservationRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % LionFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-200 to-orange-300">
      <Navbar onConservationClick={scrollToConservation} />
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
      
      <Tabs ref={tabsRef} defaultValue="about" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="facts">Facts</TabsTrigger>
          <TabsTrigger value="conservation">Conservation</TabsTrigger>
          <TabsTrigger value="movie">Movie</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
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
              <ul className="list-disc list-inside space-y-2 max-h-[400px] overflow-y-auto">
                {LionFacts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-gray-700"
                  >
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="conservation" ref={conservationRef}>
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
        <TabsContent value="movie">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Film className="mr-2" /> The Lion King</CardTitle>
              <CardDescription>Disney's beloved animated classic</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The Lion King" is a 1994 American animated musical drama film produced by Walt Disney Feature Animation. 
                It tells the story of Simba, a young lion who is to succeed his father, Mufasa, as King of the Pride Lands. 
                However, after Simba's paternal uncle Scar murders Mufasa, Simba is manipulated into thinking he was responsible 
                and flees into exile.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The film features an ensemble voice cast including Matthew Broderick, James Earl Jones, Jeremy Irons, 
                Jonathan Taylor Thomas, Moira Kelly, Nathan Lane, Ernie Sabella, Rowan Atkinson, and others. It became a major 
                success, winning two Academy Awards for its achievement in music and the Golden Globe Award for Best Motion Picture – Musical or Comedy.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quiz">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><HelpCircle className="mr-2" /> Lion Quiz</CardTitle>
              <CardDescription>Test your knowledge about lions!</CardDescription>
            </CardHeader>
            <CardContent>
              {!quizCompleted ? (
                <>
                  <p className="mb-4 font-semibold">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
                  <p className="mb-4">{quizQuestions[currentQuestionIndex].question}</p>
                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="mb-4">
                    {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <Button onClick={() => {
                    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
                      setQuizScore(quizScore + 1);
                    }
                    if (currentQuestionIndex < quizQuestions.length - 1) {
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                      setSelectedAnswer("");
                    } else {
                      setQuizCompleted(true);
                    }
                  }} disabled={!selectedAnswer}>
                    {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                  </Button>
                </>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-4">Quiz Completed!</h3>
                  <p className="mb-4">Your score: {quizScore} out of {quizQuestions.length}</p>
                  <Button onClick={() => {
                    setCurrentQuestionIndex(0);
                    setSelectedAnswer("");
                    setQuizScore(0);
                    setQuizCompleted(false);
                  }}>
                    Retake Quiz
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  );
};

export default Index;
