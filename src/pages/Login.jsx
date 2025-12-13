import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, forget } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  // forget pass
  const emailRef = useRef();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode);
      });
  };

  // Forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      setError("Please enter your email first");
      return;
    }

    forget(email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="min-h-screen w-full max-w-sm mx-auto flex justify-center items-center flex-col gap-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-accent rounded">
        <div className="card-body">
          <h6 className="text-bold text-xl font-semibold">Login </h6>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email  */}
            <label className="label text-black">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
              ref={emailRef}
            />
            {/* password  */}
            <label className="label text-black">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div className="flex justify-between items-center pt-3">
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                Remember me
              </label>
              <a
                onClick={handleForgetPassword}
                className="link link-hover text-secondary font-semibold underline"
              >
                Forgot password?
              </a>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              className="btn btn-neutral bg-secondary text-black mt-4 border-0"
            >
              Login
            </button>

            <p className="text-center text-black font-bold mt-3">
              Don’t have an account?{" "}
              <Link to="/auth/register" className="text-secondary font-bold">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="divider">OR</div>

      {/* Google */}

      <button className="btn bg-white text-black border-[#e5e5e5]">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
