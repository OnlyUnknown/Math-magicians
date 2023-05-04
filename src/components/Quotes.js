import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=morning', {
        method: "GET",  
        headers: {
            'X-Api-Key':'1kuDh9s2SvS9/YZwS9j9Sg==XS3Yu1Ys0bqEGtIs'
        },  
        })
        const json = await res.json();
        setData(json);
        console.log(json)
        
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);
  
  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      
    </div>
    
  );
}

export default Quote;
