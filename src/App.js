// import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import AdminPage from "./pages/Admin/AdminPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import MePage from "./pages/Me/MePage";
import SignupPage from "./pages/Signup/SignupPage";
import SubscriptionPage from "./pages/Subscription/SubscriptionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route index element={<HomePage />} />

          <Route path="me/" element={<MePage />} />
          <Route path="subscription/" element={<SubscriptionPage />} />
          <Route path="admin/" element={<AdminPage />} />
        </Route>
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/signup/" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
