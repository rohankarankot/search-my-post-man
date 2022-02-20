import { Container, Typography, Button } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";

const Landing = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          margin: 5,
        }}
      >
        <img
          style={{ marginTop: 5, height: 350 }}
          src="https://cdn4.vectorstock.com/i/1000x1000/19/38/postman-cartoon-character-vector-38041938.jpg"
          alt=""
        />
        <Typography
          align="center"
          style={{ marginTop: 5 }}
          variant="h3"
          component="h2"
        >
          Hunting Post Office
        </Typography>
        {localStorage.getItem("isLogin") == "true" ? (
          <Link
            to="/home"
            style={{ color: "black", textDecoration: "none", margin: 20 }}
          >
            <Button variant="contained">Search</Button>
          </Link>
        ) : (
          <Link
            to="/"
            style={{ color: "black", textDecoration: "none", margin: 20 }}
          >
            <Button variant="contained">Login for more</Button>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default Landing;
