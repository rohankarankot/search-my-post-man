import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      <Link
        style={{ textDecoration: "none" }}
        color="inherit"
        href="https://rohankarankot.github.io/"
        target="blank"
      >
        <Typography variant="body1">Find More about Me</Typography>
        {"  © Copyright "} {new Date().getFullYear()}
      </Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      style={{
        width: "100%",
      }}
      component="footer"
      sx={{
        py: 2,
        px: 2,

        mt: "auto",
        mx: "auto",
        backgroundColor: "lightgray",
      }}
    >
      <center>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </center>
    </Box>
  );
}
