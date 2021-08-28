import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "modesto",
        },
      });
      console.log(response.data.businesses[0])
      setRestaurants(response.data.businesses);
    } catch (e) {
      setRestaurants([]);
      setErrorMessage("Try again later");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
