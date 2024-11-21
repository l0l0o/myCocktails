import { FlatList, View, Image, TouchableOpacity, Text } from "react-native";
import styles from "@/styles/styles";  // Import des styles
import useGetDrinks from "@/hooks/useGetDrinks";
import useGetIngredients from "@/hooks/useGetIngredients";
import { router } from "expo-router";

export default function Index() {
  const drinks = useGetDrinks();
  const ingredients = useGetIngredients();

  // Fonction pour naviguer ou interagir avec un drink spécifique (à définir)
  const singleDrink = (id: number) => {
    // Logique pour afficher plus de détails sur le cocktail
    router.push(`/drinks/details/${id}`);
  };

  return (
    <View style={styles.container}>  
      <Text style={styles.headerText} >Liste des ingredients</Text>

      <FlatList
        horizontal={true}
        data={ingredients.slice(0, 5)}
        keyExtractor={(drink) => drink.strIngredient1.toString()}
        renderItem={({ item }) => (
          <View style={styles.cocktailCard}>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.cocktailName}>{item.strIngredient1}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={styles.headerText} >Liste des coktails</Text>
      <FlatList
        horizontal={false}
        data={drinks.slice(0, 5)}
        keyExtractor={(drink) => drink.idDrink.toString()}
        renderItem={({ item }) => (
          <View style={styles.cocktailCard}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => singleDrink(item.idDrink)}  
            >
              <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.cocktailImage}  
              />
              <Text style={styles.cocktailName}>{item.strDrink}</Text> 
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
