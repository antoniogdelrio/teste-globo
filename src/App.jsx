import { useEffect, useState } from "react";
import { NewsCard } from "./components/NewsCard";
import { Typography } from "./components/Typography";
import { NewsSection } from "./sections/News";

export default function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://s3.glbimg.com/v1/AUTH_1c3ee56c57864e2b9a34135c5ee67caf/gshow/components/mockup-workday/mock-json.json', { 
      method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
      setNews(json.content)
    });
  }, [])

  return (
    <>
      <NewsSection
        news={news}
      />
    </>
  )
}