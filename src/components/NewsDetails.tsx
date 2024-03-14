import Grid from "@mui/material/Grid";
import { selectDetailedNews } from "../store/slices/newsSlices";
import { useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Link,
} from "@mui/material";

export const NewsDetails = () => {
  const newsDetails = useSelector(selectDetailedNews);

  if (!newsDetails) {
    return <div>Aucun article à afficher</div>;
  }
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={newsDetails.urlToImage}
            title={newsDetails.title}
          />
          <CardHeader
            title={newsDetails.source.name}
            subheader={newsDetails.publishedAt}
            action={
              <Typography variant="body2" color="text.secondary">
                {newsDetails.author}
              </Typography>
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {newsDetails.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {newsDetails.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link href={`/`} underline="none">
                Back
              </Link>
            </Button>
            <Button size="small">
              <Link href={newsDetails.url} underline="none">
                See the article
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
