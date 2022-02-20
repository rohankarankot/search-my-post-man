import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const About = () => {
  return (
    <center>
      <Card sx={{ maxWidth: 345, marginTop: 10 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rohan Karankot
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Find more about myself in the footer section
          </Typography>
        </CardContent>
      </Card>
    </center>
  );
};

export default About;
