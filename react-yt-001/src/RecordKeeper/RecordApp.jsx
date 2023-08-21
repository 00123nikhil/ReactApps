import Header from "./Header";
import "./RecordApp.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const RecordApp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Data, setData] = useState("");

  const addData = () => {
    setData = {
      name,
      email,
    };
  };

  return (
    <div className="app">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />

          <Button onClick={setData} variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default RecordApp;
