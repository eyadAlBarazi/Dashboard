// import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  // createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/Team/Team";
import Contactse from "./page/contacts/Contactse";
import Invoicese from "./page/invoices/Invoicese";
import Frome from "./page/from/Frome";
import Calender from "./page/calender/Calender";
import Faqe from "./page/faq/Faqe";
import Bare from "./page/bar/Bare";
import Pier from "./page/pie/Pier";
import Liner from "./page/line/Liner";
import Geographye from "./page/geography/Geographye";
import NotFound from "./page/Not/NotFound";


const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contactse/>} />
      <Route path="invoices" element={<Invoicese/>} />
      <Route path="from" element={<Frome/>} />
      <Route path="calender" element={<Calender/>} />
      <Route path="faq" element={<Faqe/>} />
      <Route path="bar" element={<Bare/>} />
      <Route path="pie" element={<Pier/>} />   
      <Route path="line" element={<Liner/>} />
      <Route path="geography" element={<Geographye/>} />   
      <Route path="*" element={<NotFound/>} />   
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
