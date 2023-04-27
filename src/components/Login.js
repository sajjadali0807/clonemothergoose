import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import topimg from "../assets/loginimg (1).png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Dashboard.css";

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("UserName is required"),

      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),

    onSubmit: (values) => {
      console.log(values);
      // values.preventDefault();

      axios
        .post(
          "https://reportsapi.mothergoosehealth.com/report/api/login",
          values
        )
        .then((e) => {
          navigate("/Home");
          console.log("dgfhdgf", e);
        })
        .catch();
      // formik.resetForm();
    },
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img id="baby" src={require("../assets/newedwer (1).jpg")} alt="" />
          </div>
          <div className="col-lg-6">
            <Card sx={{ maxWidth: 345, marginTop: 18, textAlign: "center" }}>
              <CardContent>
                <div style={{ textAlign: "center" }}>
                  <img src={topimg} width={100} height={100} alt="logo" />
                  <h3>Log In</h3>
                </div>
              </CardContent>
              <Stack>
                <TextField
                  id="standard-basic"
                  style={{ margin: "10px" }}
                  label="User Name"
                  variant="standard"
                  required
                  type="text"
                  name="username"
                  placeholder="Name"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.username ? formik.errors.username : null
                  }
                  error={
                    formik.touched.username ? formik.errors.username : null
                  }
                />

                <TextField
                  id="standard-basic"
                  style={{ margin: "10px" }}
                  label="Password"
                  variant="standard"
                  required
                  type="password"
                  name="password"
                  placeholder="Name"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.password ? formik.errors.password : null
                  }
                  error={
                    formik.touched.password ? formik.errors.password : null
                  }
                />
                <Button
                  variant="contained"
                  style={{ margin: "40px 80px", borderRadius: "25px" }}
                  onClick={formik.handleSubmit}
                >
                  LogIn
                </Button>
              </Stack>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
