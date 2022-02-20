import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import DashInfo from "./DashInfo";
import Alert from "@mui/material/Alert";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const Home = () => {
  const [zipPin, setzipPin] = useState("");
  const [alert, setalert] = useState(false);
  const [responce, setresponce] = useState([]);
  const [load, setload] = useState(false);
  const onChange = (event) => {
    setzipPin(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (zipPin === "") {
      setzipPin("");
      setalert([true, "Please Enter Pin Code", "error"]);
      setTimeout(() => {
        setalert(false);
      }, 3000);
    } else if (isNaN(zipPin)) {
      setzipPin("");
      setalert([true, "Please Enter Pin Code", "error"]);
      setload(true);
      setTimeout(() => {
        setalert(false);
      }, 3000);
    } else {
      setload(true);
      axios
        .get(`https://api.postalpincode.in/pincode/${zipPin}`)
        .then(function (response) {
          console.log(response);
          if (response.data[0].Status === "Success") {
            setresponce(response.data);
            setload(false);
          }
          if (response.data[0].Status === "Error") {
            setload(false);
            setzipPin("");
            setalert([
              true,
              "Please Enter Valid Pin Code and try again",
              "error",
            ]);
            setTimeout(() => {
              setalert(false);
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
          setalert(false);
        });
    }
  };
  return (
    <div>
      {console.log(zipPin)}
      <Container component="main" maxWidth="xs" sx={{ mt: 2 }}>
        {alert ? (
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            autoComplete="false"
            variant="standard"
            fullWidth
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 6,
            }}
            id="pin"
            label="Enter pin code"
            name="pin"
            margin="normal"
            value={zipPin}
            onChange={onChange}
          />

          <center>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#283593" }}
            >
              Find Details
            </Button>
          </center>
        </Box>
      </Container>
      {load ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <DashInfo responce={responce} />
      )}
    </div>
  );
};

export default Home;
