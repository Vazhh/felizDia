import { useState, useEffect } from "react";
import Heart from "../components/Heart";
import Letter from "../components/Letter";

export default function Mes() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 15000); // Simulate a 18-second loading time

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
    , []);
  return (
    <div className="h-screen w-screen">
    {isLoading ? <Heart /> : <Letter />}
  </div>
  )
}
