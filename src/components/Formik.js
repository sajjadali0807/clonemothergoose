import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useFormik } from "formik";
import * as yup from "yup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createMemberShipSelector } from "../../redux/slice";
import { create_membership } from "../../redux/api/actions/authAction";
// import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "600px",
  color: theme.palette.text.secondary,
  marginTop: "2rem",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
}));

export default function Formik() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const { createMemberShip, isCreateMemberShipLoading, error } = useSelector(
    createMemberShipSelector
  );

  React.useEffect(() => {
    if (
      createMemberShip?.message === "Network Error" ||
      createMemberShip?.code === "ERR_BAD_REQUEST"
    ) {
      setLoading(false);
    }
  }, [createMemberShip]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      wallet_address: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Name is required"),
      email: yup.string().email().required("Email is required"),
      wallet_address: yup.string().required("Wallet Address is required"),
      mobileNumber: yup
        .string()
        .required("Mobile Number is required")
        .min(10, "should be 10 digits")
        .max(10, "10 digits required"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: yup
        .string()
        .required("Confirm Password must be required")
        .oneOf([yup.ref("password"), null], "Password not match"),
    }),
    onSubmit: async (data) => {
      setLoading(true);
      let value = {
        fullName: data.fullName,
        email: data.email,
        memberShipAmount: 25,
        mobileNumber: data.mobileNumber,
        password: data.password,
        walletId: data.wallet_address,
        role: ["ROLE_USER"],
      };
      await dispatch(create_membership(value, router));
      if (createMemberShip?.data?.status === 200) {
        setLoading(false);
      }
    },
  });

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <Box>
      <Box
        container
        sx={{
          height: "100vh",
          backgroundSize: "cover",
          backgroundImage: "url(/backgroundpic.webp)",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid item xs={4} sx={{ height: "300px" }}>
            <Item>
              <CardMedia
                component="img"
                height="100%"
                image="/image_login.png"
                sx={{ objectFit: "fill" }}
              />
            </Item>
          </Grid>
          <Grid item xs={4} sx={{ height: "500px" }}>
            <Item>
              <Typography
                variant="h5"
                color="primary"
                sx={{ marginBottom: "1rem", marginTop: "0rem" }}
              >
                Create Membership
              </Typography>
              <form style={{ width: "70%", margin: "auto" }}>
                <TextField
                  className="form-ht"
                  sx={{ marginBottom: "2px" }}
                  required
                  height="0.4375em"
                  fullWidth
                  type="text"
                  name="fullName"
                  placeholder="Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.fullName ? formik.errors.fullName : null
                  }
                  error={
                    formik.touched.fullName ? formik.errors.fullName : null
                  }
                />{" "}
                <br />
                <TextField
                  className="form-ht"
                  sx={{ marginBottom: "2px" }}
                  required
                  height="0.4375em"
                  fullWidth
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={formik.touched.email ? formik.errors.email : null}
                />
                <br />
                <TextField
                  className="form-ht"
                  sx={{ marginBottom: "2px" }}
                  required
                  fullWidth
                  height="0.4375em"
                  type="text"
                  name="wallet_address"
                  placeholder="Wallet Address"
                  value={formik.values.wallet_address}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.wallet_address
                      ? formik.errors.wallet_address
                      : null
                  }
                  error={
                    formik.touched.wallet_address
                      ? formik.errors.wallet_address
                      : null
                  }
                />
                <br />
                <TextField
                  className="form-ht"
                  sx={{ marginBottom: "2px" }}
                  required
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  height="0.4375em"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.mobileNumber
                      ? formik.errors.mobileNumber
                      : null
                  }
                  error={
                    formik.touched.mobileNumber
                      ? formik.errors.mobileNumber
                      : null
                  }
                />
                <br />
                <OutlinedInput
                  className="form-ht"
                  sx={{ marginBottom: "2px" }}
                  id="password"
                  fullWidth
                  height="0.4375em"
                  name="password"
                  placeholder="Password"
                  type={secureTextEntry ? "password" : "text"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password ? formik.errors.password : null
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleSecureEntry}
                        edge="end"
                      >
                        {secureTextEntry ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText error>
                  {formik.touched.password ? formik.errors.password : null}
                </FormHelperText>
                <OutlinedInput
                  className="form-ht"
                  sx={{ marginBottom: "2px" }}
                  id="password"
                  height="0.4375em"
                  fullWidth
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={secureTextEntry ? "password" : "text"}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword
                      ? formik.errors.confirmPassword
                      : null
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleSecureEntry}
                        edge="end"
                      >
                        {secureTextEntry ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText error>
                  {formik.touched.confirmPassword
                    ? formik.errors.confirmPassword
                    : null}
                </FormHelperText>
                <TextField
                  className="form-ht"
                  sx={{ marginBottom: "2px" }}
                  required
                  fullWidth
                  height="0.4375em"
                  disabled
                  type="text"
                  name="memberShipAmount"
                  placeholder="Deposit amount (1 year) = $10"
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.memberShipAmount
                      ? formik.errors.memberShipAmount
                      : null
                  }
                  error={
                    formik.touched.memberShipAmount
                      ? formik.errors.memberShipAmount
                      : null
                  }
                />
              </form>
              <Typography varient="h6" sx={{ marginBottom: "1rem" }}>
                {" "}
                Already have an account? {""}
                <Link href="/auth/login" underline="hover">
                  Login
                </Link>
              </Typography>
              {loading ? (
                <LoadingButton
                  color="primary"
                  loading
                  fullWidth
                  size="large"
                  loadingPosition="start"
                  sx={{ color: "blue", width: "50%", borderRadius: "15px" }}
                  variant="contained"
                >{``}</LoadingButton>
              ) : (
                <Button
                  variant="contained"
                  sx={{ width: "50%", borderRadius: "15px" }}
                  onClick={formik.handleSubmit}
                >
                  SignUp
                </Button>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
