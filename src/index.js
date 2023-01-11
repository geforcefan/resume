import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import { PDFViewer } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";
import "./index.scss";

const App = () => (
  <PDFViewer style={{ border: 0, height: "100vh", width: "100vw" }}>
    <ResumeDocument />
  </PDFViewer>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
