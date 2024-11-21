import { useEffect, useState } from "react";

const useGetDrinks = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
      (async () => {
        const drinksJson = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        const drinks = await drinksJson.json();
        setDrinks(drinks.drinks);
      })();
    }, []);
  
    return drinks;
}
 
export default useGetDrinks;