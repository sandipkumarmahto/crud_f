import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [user, setUser] = useState();
  function inputHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();
  function submitForm(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3500/user/register", user)
      .then((res) => {
        console.log(res);
        setUser(null);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("something in registration");
      });
  }
  return (
    <>
      <div className="container">
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={user?.fullName}
              onChange={inputHandler}
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label>Mobile no</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              name="mobile"
              value={user?.mobile}
              onChange={inputHandler}
              placeholder="Enter your mobile no."
            />
          </div>
          <div className="form-group">
            <label>username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={user?.username}
              onChange={inputHandler}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user?.email}
              onChange={inputHandler}
              // aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={user?.password}
              onChange={inputHandler}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
