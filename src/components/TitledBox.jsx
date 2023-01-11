import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  box: {
    textAlign: "center",
    marginBottom: 25,
  },
  title: {
    fontWeight: "light",
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

const TitledBox = ({ title, children }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

export default TitledBox;
