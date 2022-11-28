// import { useState } from "react";

import AdminPage from "./components/AdminPage/AdminPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import MePage from "./components/MePage/MePage";
import SignupPage from "./components/SignupPage/SignupPage";
import SubscriptionPage from "./components/SubscriptionPage/SubscriptionPage";

function App() {
  return (
    <>
      <h1>CSC309 Project Front End Main App</h1>
      {/* You can add pages here to test them */}
      <AdminPage></AdminPage>
    </>
  );
}

export default App;
