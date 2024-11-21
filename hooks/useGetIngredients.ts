import { useEffect, useState } from "react";

const useGetIngredients = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
      (async () => {
        const drinksJson = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        const drinks = await drinksJson.json();
        setDrinks(drinks.drinks);
      })();
    }, []);
  
    return drinks;
}
 
export default useGetIngredients;