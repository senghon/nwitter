import AppRouter from "components/Router";
import React, { useEffect, useState } from "react";
import { authService } from "fbase";
import { getAuth } from "@firebase/auth";

function App() {
  const auth = getAuth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });
  return <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "INit.."}</>;
}

export default App;
