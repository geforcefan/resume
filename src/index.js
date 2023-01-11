import React from "react";
import { createRoot } from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";
import moment from "moment";
import "moment/locale/de";

import ResumeDocument from "./ResumeDocument";

import "./index.scss";

moment.locale("de");

const App = () => (
  <PDFViewer style={{ border: 0, height: "100vh", width: "100vw" }}>
    <ResumeDocument />
  </PDFViewer>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
