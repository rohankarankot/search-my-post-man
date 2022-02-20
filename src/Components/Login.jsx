import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const theme = createTheme();

export default function LOgin() {
  const [alert, setalert] = useState(false);
  const [alertMsg, setalertMsg] = useState([]);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const res = {
      username: data.get("username"),
      password: data.get("password"),
    };
    if (res.username === "test" && res.password === "test") {
      setalertMsg("Login Success");
      setalert([true, "Login Success", "success"]);
      setTimeout(() => {
        setalert([false]);
        localStorage.setItem("isLogin", true);
        history.push("/home");
      }, 2000);
    } else {
      setalert([true, "Hmm... Login falure, please try again", "error"]);
      setTimeout(() => {
        setalert([false]);
      }, 2000);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {alert[0] ? (
          <Alert
            sx={{
              marginTop: 3,
            }}
            severity={alert[2]}
          >
            {alert[1]}
          </Alert>
        ) : (
          ""
        )}

        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#283593" }}
            >
              Logme In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
