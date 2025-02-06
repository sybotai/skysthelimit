import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert } from '@/components/ui/alert';

const DebateTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('opening');
  
  const phases = {
    opening: { duration: 300, title: 'Opening Arguments' },
    rebuttal: { duration: 180, title: 'Rebuttal Phase' },
    crossExam: { duration: 240, title: 'Cross Examination' },
    closing: { duration: 240, title: 'Closing Arguments' }
  };

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Trigger next phase logic
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsRunning(!isRunning);
  
  const resetTimer = () => {
    setTimeLeft(phases[currentPhase].duration);
    setIsRunning(false);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Timer className="h-5 w-5" />
          <span>{phases[currentPhase].title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={toggleTimer}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
            >
              {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <button 
              onClick={resetTimer}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <RotateCcw className="h-6 w-6" />
            </button>
          </div>

          {timeLeft <= 30 && isRunning && (
            <Alert className="bg-red-50 text-red-800">
              Time is almost up! Wrap up your arguments.
            </Alert>
          )}
          
          <div className="grid grid-cols-4 gap-2 mt-4">
            {Object.entries(phases).map(([phase, { title }]) => (
              <button
                key={phase}
                onClick={() => {
                  setCurrentPhase(phase);
                  setTimeLeft(phases[phase].duration);
                  setIsRunning(false);
                }}
                className={`p-2 text-sm rounded ${
                  currentPhase === phase 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DebateTimer;
