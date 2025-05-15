import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ProcessCard({ title, description, image }) {
  return (
    <Card
      sx={{
        width: "70%",
        justifySelf: "center",
        height: "100%",
      }}
    >
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily={"monospace"}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            fontFamily={"monospace"}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}