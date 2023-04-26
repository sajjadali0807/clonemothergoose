import React from "react";
import RecipeReviewCard from "../Card";
import Bgimg from "../assets/newedwer (1).jpg";
// import "./Card.css";

function Login() {
  return (
    <>
      <div
        className="login-page"
        style={{ backgroundColor: "#e8f7fe", height: "99vh" }}
      >
        <div className="container">
          <div className="row " style={{ objectFit: "contain" }}>
            <div className="col-lg-6" style={{ padding: "0px" }}>
              <img
                src={Bgimg}
                style={{ objectFit: "contain", width: "100%" }}
                alt="pregn"
              />
            </div>
            <div className="col-lg-6" style={{ backgroundColor: "#e8f7fe" }}>
              <RecipeReviewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
