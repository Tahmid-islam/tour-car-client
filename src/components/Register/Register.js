import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle, createNewAccount, error, user } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then(() => {
      history.push(redirect_uri);
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createNewAccount(data.email, data.password, data.name);
  };

  if (user.email) {
    history.push(redirect_uri);
  }

  return (
    <div className="w-75 container mx-auto">
      <div className="text-center py-4">
        <h1>
          Register <i className="fas fa-sign-in-alt"></i>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-3 p-2"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          className="form-control my-3 p-2"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          type="password"
          className="form-control my-3 p-2"
          placeholder="Password"
          autoComplete="password"
          {...register("password", { required: true })}
        />
        <p className="text-danger text-center fw-bold">{error}</p>
        {errors.password && <span>This field is required</span>}
        <input
          className="form-control my-3 btn btn-danger p-2"
          type="submit"
          value="Sign in"
        />
      </form>
      <Link style={{ textDecoration: "none" }} to="/login">
        <p className="text-danger text-center fw-bold">
          Already have an account?
        </p>
      </Link>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-danger text-center"
        >
          <i className="fab fa-google"></i> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
