import Typography from "@mui/material/Typography";
import { News } from "../components/News";
import { NewsItemType } from "../types/dataTypes";
export function App() {
  const newsItems: NewsItemType[] = [
    {
      id: 1,
      img: "https://placeholder.com/600x400",
      source: "Le Monde",
      title:
        "L'innovation dans l'énergie renouvelable atteint des sommets inégalés en 2024",
    },
    {
      id: 2,
      img: "https://placeholder.com/600x400",
      source: "Le Figaro",
      title:
        "Les élections municipales marquées par une participation historique",
    },
    {
      id: 3,
      img: "https://placeholder.com/600x400",
      source: "Libération",
      title:
        "Réforme de l'éducation: quelles perspectives pour les nouveaux bacheliers?",
    },
    {
      id: 4,
      img: "https://placeholder.com/600x400",
      source: "L'Équipe",
      title: "Coupe du monde de football 2024: les nouveaux héros",
    },
    {
      id: 5,
      img: "https://placeholder.com/600x400",
      source: "La Tribune",
      title:
        "La révolution des crypto-monnaies: impact sur l'économie mondiale",
    },
  ];

  return <News news={newsItems}></News>;
}

export default App;
