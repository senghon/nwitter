import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setnewAcount] = useState(true);
  const onchange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const auth = getAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    });
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     let userdata = signInWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          onChange={onchange}
          value={email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={onchange}
          value={password}
        />
        <input type="submit" value="login" />
        {/* <input type="submit" value="creat Acount" /> */}
      </form>
      <div>
        <button>Continue with google</button>
      </div>
    </div>
  );
};

export default Auth;
