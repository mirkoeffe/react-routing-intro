import "./App.css";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./components/HomePageWithNavigate";
import { Routes, Route } from "react-router-dom";
import QueryStringExample from "./components/QueryStringExample";

import projectsData from "./projects-data.json";

import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetailsPage projects={projectsData} />}
        />

        <Route path="/example" element={<QueryStringExample />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
