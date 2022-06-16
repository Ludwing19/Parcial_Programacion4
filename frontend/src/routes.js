import { constellations } from "./components/Constellations";
import { Planets } from "./components/planets";
import { Stars } from "./components/Stars";
import { LandingPage } from "./components/LandingPage";
import { Login } from "./login";
import { CreateStellar } from "./components/Create";

export const routes = [
  { path: "/login", component: Login },
  { path: "/planets", component: Planets },
  { path: "/stars", component: Stars },
  { path: "/constellations", component: constellations },
  { path: "/create", component: CreateStellar },
  { path: "/", component: LandingPage },
];
