import styles from "@/styles/styles";
import { FlatList, View, Image, TouchableOpacity, Text } from "react-native";

const ListDrinks = (data, isHorizontal: boolean, onPressFunction) => {

    return (
        <FlatList
        horizontal={false}
        data={data}
        keyExtractor={(drink) => drink.idDrink.toString()}
        renderItem={({ item }) => (
          <View style={styles.cocktailCard}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressFunction}  // Interagir avec l'élément
            >
              <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.cocktailImage}  // Applique l'image de style
              />
              <Text style={styles.cocktailName}>{item.strDrink}</Text>  {/* Nom du cocktail */}
            </TouchableOpacity>
          </View>
        )}
      />
    );
}
 
export default ListDrinks;