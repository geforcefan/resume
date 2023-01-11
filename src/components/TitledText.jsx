import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  box: {
    marginBottom: 10,
  },
});

const TitledText = ({ title, children }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
};

export default TitledText;
