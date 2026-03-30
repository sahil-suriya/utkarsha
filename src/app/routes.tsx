import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { CoverPage } from "./components/CoverPage";
import { PersonalInfo } from "./components/PersonalInfo";
import { CareerObjective } from "./components/CareerObjective";
import { Her } from "./components/Her";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Portfolio } from "./components/Portfolio";
import { Strengths } from "./components/Strengths";
import { MediaWork } from "./components/MediaWork";
import { Declaration } from "./components/Declaration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: CoverPage },
      { path: "personal-info", Component: PersonalInfo },
      { path: "career-objective", Component: CareerObjective },
      { path: "her", Component: Her },
      { path: "skills", Component: Skills },
      { path: "achievements", Component: Achievements },
      { path: "experience", Component: Experience },
      { path: "projects", Component: Projects },
      { path: "hobbies", Component: Hobbies },
      { path: "portfolio", Component: Portfolio },
      { path: "strengths", Component: Strengths },
      { path: "media-work", Component: MediaWork },
      { path: "declaration", Component: Declaration },
    ],
  },
]);
