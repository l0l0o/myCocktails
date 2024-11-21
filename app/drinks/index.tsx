import { FlatList, View, Image, TouchableOpacity, Text } from "react-native";
import styles from "@/styles/styles";  // Import des styles
import useGetDrinks from "@/hooks/useGetDrinks";
import { router } from "expo-router";

export default function Index() {
  const drinks = useGetDrinks();

  // Fonction pour naviguer ou interagir avec un drink spécifique (à définir)
  const singleDrink = (id: number) => {
    // Logique pour afficher plus de détails sur le cocktail
    router.push(`/drinks/details/${id}`);
  };

  return (
    <View style={styles.container}>  
      <Text style={styles.headerText}>Liste des coktails</Text>
      <FlatList
        horizontal={false}
        data={drinks}
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
