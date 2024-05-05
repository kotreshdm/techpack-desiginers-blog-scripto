import { useEffect, useState } from "react";

function App() {
  const [res, setRes] = useState("Waiting for data...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRes(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
        setRes("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return <div>{res}</div>;
}

export default App;
