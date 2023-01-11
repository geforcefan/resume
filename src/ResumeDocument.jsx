import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import Address from "./sections/Address";
import AboutMe from "./sections/AboutMe";

import "./helper/registerFonts";
import PersonalInformation from "./sections/PersonalInformation";
import Experience from "./sections/Experience";
import ProgressBarList from "./sections/ProgressBarList";

import TitledBox from "./components/TitledBox";
import Tags from "./components/Tags";

import data from "./data.json";

const PageWithSidebar = ({ children }) => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.sideInformation}>
        <Address />
        <AboutMe />
        <ProgressBarList title="Kentnisse" data={data.itKnowledge} />
        <ProgressBarList title="Sprachen" data={data.languages} />
      </View>
      <View style={styles.mainInformation}>{children}</View>
    </Page>
  );
};

// Create Document Component
const ResumeDocument = () => (
  <Document>
    <PageWithSidebar>
      <Experience title="Berufserfahrung" data={data.experience} />
    </PageWithSidebar>
    <PageWithSidebar>
      <Experience title="Bildung" data={data.school} />
    </PageWithSidebar>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    color: "rgb(61, 61, 61)",
    fontFamily: "Roboto",
    fontSize: 12,
    flexDirection: "row",
  },
  sideInformation: {
    paddingTop: 45,
    width: "30%",
    color: "white",
    backgroundColor: "rgb(26, 59, 94)",
    textAlign: "center",
  },
  mainInformation: {
    flex: 1,
    paddingTop: 45,
    paddingLeft: 35,
    paddingBottom: 45,
    paddingRight: 35,
  },
});

export default ResumeDocument;
