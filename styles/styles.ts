import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Style pour l'en-tête
  header: {
    backgroundColor: '#f28c28', // Couleur de fond orange
    paddingTop: 40, // Pour compenser la barre d'état
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },

  // Style pour l'écran principal
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Espacement autour du contenu
    backgroundColor: '#f4f4f4', // Couleur de fond claire
  },

  // Style pour l'image du cocktail
  cocktailImageSingle: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20, // Un peu d'espace en dessous de l'image
  },

  // Style pour le titre (nom du cocktail)
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
    textTransform: 'capitalize',
  },

  // Style pour les instructions (sous-titre)
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },

  // Style pour la liste des cocktails
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  cocktailCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Pour Android
  },
  cocktailImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cocktailName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },

  // Bouton "Voir plus"
  button: {
    backgroundColor: '#f28c28',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
