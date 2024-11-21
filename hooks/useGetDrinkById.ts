import { useEffect, useState } from "react";

const useGetDrinkById = (id: string) => {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    (async () => {
      const drinkJson = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
      );
      //changement de l'adresse pour récupérer une recette via son id
      const drink = await drinkJson.json();
      setDrink(drink.drinks[0]);
    })();
  }, []);

  return drink;
};

export default useGetDrinkById;
