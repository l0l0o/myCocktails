import useGetDrinkById from "@/hooks/useGetDrinkById";
import styles from "@/styles/styles";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export default function cocktailDetailScreen() {
  const { id } = useLocalSearchParams();

  const drink = useGetDrinkById(id);

  // La page est nommé [id] afin de pouvoir récupérer celui-ci en paramètre pour transférer une information depuis
  // un autre screen

  if (!drink) {
    return (<View><Text>Dommage no drinks</Text></View>);
  }

  return (
    <View style={styles.screen}>
        <Text>Le détail</Text>
      <Image
        source={{ uri: drink.strDrinkThumb }}
        style={styles.cocktailImageSingle}  // Style pour l'image du cocktail
      />
      
      <Text style={styles.title}>{drink.strDrink}</Text>
      
      <Text style={styles.subtitle}>{drink.strInstructions}</Text>
    </View>
  );
}

