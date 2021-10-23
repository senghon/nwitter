import React, { useEffect } from "react";
import { signOut, getAuth } from "@firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "@firebase/firestore";
import { useState } from "react/cjs/react.development";
import { db } from "fbase";

const logout = () => {
  console.log(getAuth());
  signOut(getAuth());
};

const Home = () => {
  const [datalist, setDatalist] = useState([]);
  const [nweet, setNweet] = useState("");
  const getNweets = async () => {
    const dbdata = await getDocs(collection(db, "nweets"));
    dbdata.forEach((doc) => setDatalist((prev) => [doc.data(), ...prev]));
  };

  useEffect(() => {
    getNweets();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "nweets"), {
      nweet,
      date: Date.now(),
    });
  };
  const onchange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const finaldata = datalist.map((data) => data.nweet);
  console.log(finaldata);

  return (
    <>
      <span>Home</span>
      <button onClick={logout}>logout</button>
      <form onSubmit={onSubmit}>
        <input onChange={onchange}></input>
        <button type="submit">tweet!</button>
      </form>
      <div>
        {datalist.map((data) => (
          <h1>{data.nweet}</h1>
        ))}
      </div>
    </>
  );
};
export default Home;
