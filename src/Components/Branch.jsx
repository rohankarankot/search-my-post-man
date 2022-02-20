import {
  Button,
  TextField,
  Box,
  Container,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import DashInfo from "./DashInfo";
import axios from "axios";
const Branch = () => {
  const [branchName, setbranchName] = useState("");
  const [alert, setalert] = useState(false);
  const [responce, setresponce] = useState([]);
  const [load, setload] = useState(false);
  const onChange = (event) => {
    setbranchName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (branchName === "") {
      setbranchName("");
      setalert([true, "Please Enter Branch Name", "error"]);
      setTimeout(() => {
        setalert(false);
      }, 3000);
    } else {
      setload(true);
      branchName
        .toLowerCase()
        .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
      branchName.replace(" ", "%20");
      axios
        .get(`https://api.postalpincode.in/postoffice/${branchName}`)
        .then(function (response) {
          console.log(response);
          if (response.data[0].Status === "Success") {
            setresponce(response.data);
            setload(false);
          }
          if (response.data[0].Status === "Error") {
            setload(false);
            setbranchName("");
            setalert([
              true,
              "Please Enter Valid Branch Name and try again",
              "error",
            ]);
            setresponce("");
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
      {console.log(branchName)}
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
            id="pin"
            label="Enter Branch Name"
            name="pin"
            margin="normal"
            value={branchName}
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

export default Branch;
