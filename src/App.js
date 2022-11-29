// import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage/AdminPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import MePage from "./components/MePage/MePage";
import SignupPage from "./components/SignupPage/SignupPage";
import SubscriptionPage from "./components/SubscriptionPage/SubscriptionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="login/" element={<LoginPage />} />
          <Route path="signup/" element={<SignupPage />} />
          <Route path="me/" element={<MePage />} />
          <Route path="subscription/" element={<SubscriptionPage />} />
          <Route path="admin/" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
