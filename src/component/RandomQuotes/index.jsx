import { useEffect, useState } from "react";

const RandomQuotes = () => {
  const [randomQuotes, setRandomQuotes] = useState("Loading...");

  useEffect(() => {
    (async () => {
      const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=dreams";
      const apiKey = import.meta.env.VITE_QUOTES_API_KEY;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey,
        },
      };

      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const data = await response.json();
        setRandomQuotes(data[0].quote);
      } else {
        setRandomQuotes("I was a great dreamer of day dreams.");
      }
    })();
  }, []);
  return (
    <div className="flex flex-row items-center justify-center min-h-10 h-auto bg-white py-1">
      <p className="text-center font-medium font-raleway text-xs w-4/5">
        {randomQuotes}
      </p>
    </div>
  );
};

export default RandomQuotes;
