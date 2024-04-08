import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import DashbordPage from "./Pages/admin/a_DashbordPage";
import ClassDivisionPage from "./Pages/admin/b_ClassDivisionPage";
import FacultyPage from "./Pages/admin/c_FacultyPage";
import NoticePage from "./Pages/admin/d_NoticePage";
import FeesCollectionPage from "./Pages/admin/FeesCollection";
import SyllabusPage from "./Pages/admin/g_SyllabusPage";
import ProfilePage from "./Pages/admin/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage></HomePage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/admin/dashboard" element={<DashbordPage></DashbordPage>}/>
        <Route path="/admin/classes" element={<ClassDivisionPage></ClassDivisionPage>}/>
        <Route path="/admin/Faculty" element={<FacultyPage></FacultyPage>}/>
        <Route path="/admin/Notice" element={<NoticePage></NoticePage>}/>
        <Route path="/admin/Fees" element={<FeesCollectionPage></FeesCollectionPage>}/>
        <Route path="/admin/syllabus" element={<SyllabusPage></SyllabusPage>}/>
        <Route path="/admin/profile" element={<ProfilePage></ProfilePage>}/>
      </Routes>
    </Router>
  );
}

export default App;
