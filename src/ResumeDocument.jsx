import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";

import Address from "./sections/Address";
import AboutMe from "./sections/AboutMe";

import "./helper/registerFonts";
import PersonalInformation from "./sections/PersonalInformation";
import Experience from "./sections/Experience";
import ProgressBarList from "./sections/ProgressBarList";

import data from "./data.json";
import Avatar from "./sections/Avatar";

const experiencesOne = [...data.experience].slice(0, 3);
const experiencesTwo = [...data.experience].slice(3, 5);

const PageWithSidebar = ({ children }) => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.sideInformation}>
        <Avatar />
        <Address />
        <AboutMe />
        <ProgressBarList title="Kentnisse" data={data.itKnowledge} />
        <ProgressBarList title="Sprachen" data={data.languages} />
      </View>
      <View style={styles.mainInformation}>
        <PersonalInformation />
        {children}
      </View>
    </Page>
  );
};

// Create Document Component
const ResumeDocument = () => (
  <Document>
    <PageWithSidebar>
      <Experience title="Berufserfahrung" data={experiencesOne} />
    </PageWithSidebar>
    <PageWithSidebar>
      <Experience title="Berufserfahrung" data={experiencesTwo} />
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
    backgroundColor: data.colors.primary,
    textAlign: "center",
  },
  mainInformation: {
    flex: 1,
    paddingTop: 45,
    paddingLeft: 35,
    paddingRight: 35,
  },
});

export default ResumeDocument;
