import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeTemplate from "./template/HomeTemplate";
import AuthTemplate from "./template/AuthTemplate";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/LoginPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CheckUser from "./pages/HOC/CheckUser";
import ScreenPage from "./pages/ScreenPage/ScreenPage";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="detail-movie/:idMovie" element={<DetailPage />} />
          <Route
            path="screen/:maLichChieu"
            element={
              <CheckUser>
                <ScreenPage />
              </CheckUser>
            }
          />
          <Route
            path="profile"
            element={
              <CheckUser>
                <UserProfile />
              </CheckUser>
            }
          />
        </Route>
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
