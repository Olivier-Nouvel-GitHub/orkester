import Layout from "../app/layout";
import Typography from "@mui/material/Typography";
export function App() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenue sur ma page d'accueil
      </Typography>
      {/* Autre contenu de la page */}
    </Layout>
  );
}

export default App;
