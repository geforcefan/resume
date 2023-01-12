import { StyleSheet, View, Text } from "@react-pdf/renderer";
import data from "../data.json";

const PersonalInformation = () => {
  return (
    <View style={styles.box}>
      <Text
        style={styles.name}
      >{`${data.personalInformation.name} ${data.personalInformation.surname}`}</Text>
      <View style={styles.contact}>
        <Text>{data.personalInformation.tel}</Text>
        <Text>{data.personalInformation.mail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginBottom: 40,
  },
  name: {
    fontSize: 25,
    marginBottom: 5,
  },
  contact: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignSelf: "space-between",
    alignItems: "space-between",
    justifyContent: "space-between",
  },
});

export default PersonalInformation;
