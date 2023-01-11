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

// Create Document Component
const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sideInformation}>
        <Address />
        <AboutMe />
      </View>
      <View style={styles.mainInformation}>
        <PersonalInformation />
      </View>
    </Page>
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
    width: "35%",
    color: "white",
    backgroundColor: "rgb(26, 59, 94)",
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
