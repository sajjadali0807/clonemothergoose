import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "@mui/material/Card";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import '../css/Dashboard.css'
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import image1 from "../assets/mg logo.png";

export const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [zip, setZip] = React.useState("");

  const handleChangezip = (event) => {
    setZip(event.target.value);
  };
  return (
    <>
      <div className="NavBar">
        <Navbar style={{ backgroundColor: "#e8f7fe" }}>
          <Container>
            <div className="imgage1 mb-4">
              <img src={image1} alt="logo" />
            </div>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: SAJJAD <a href="#login">Logout</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="DateCard">
        <Card sx={{ margin: "15px 35px", paddingBottom: "15px" }}>
          <div className="heading">
            <h1 style={{ color: "#46adef" }}>Mother Goose</h1>
            <p>Please fill the details to find your report</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="datepick">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="From Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="stateselect mt-3">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>NewYork</MenuItem>
                        <MenuItem value={20}>California</MenuItem>
                        <MenuItem value={30}>Alaska</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="datepick">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="To Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="zipcodeselect mt-3">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">ZIP</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={zip}
                        label="Age"
                        onChange={handleChangezip}
                      >
                        <MenuItem value={10}>10003</MenuItem>
                        <MenuItem value={20}>10004</MenuItem>
                        <MenuItem value={30}>10005</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
