import React from "react";
import { useState } from "react/cjs/react.development";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function submithandler(event) {
    event.preventDefault();
    console.log(email, password);
    setemail("");
    setpassword("");
  }

  return (
    <form onsubmit={submithandler}>
      <input
        type="Email"
        placeholder="Enter your email"
        value={email}
        onchange={(e) => setemail(e.target.value)}
        required
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onchange={(e) => setpassword(e.target.value)}
        required
      />
      <div>
        <input type="checkbox" />
        rememeber me
      </div>
      <button>Log in</button>
    </form>
  );
}

export default Login;
