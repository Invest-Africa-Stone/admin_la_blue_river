import { NavigationPathsEnum } from "@utilities/enums";
import { useNavigate } from "react-router-dom";

// FR: Définit un hook personnalisé pour la navigation.
// EN: Defines a custom hook for navigation.
export const useNavigation = () => {

  // FR: Utilise le hook useNavigate pour obtenir la fonction de navigation.
  // EN: Uses the useNavigate hook to obtain the navigation function.
  const navigate = useNavigate();

  // FR: Définit une fonction pour naviguer vers un chemin spécifique.
  // EN: Defines a function to navigate to a specific path.
  const navigateTo = (link: NavigationPathsEnum) => {
    // FR: Navigue vers le chemin spécifié en utilisant l'énumération des chemins de navigation.
    // EN: Navigates to the specified path using the navigation paths enumeration.
    return navigate(link);
  };

  return {
    navigateTo,
  };
};
