import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  progressBar: {
    height: 8,
    backgroundColor: "rgba(23, 35, 54)",
  },
  progressBarValue: {
    backgroundColor: "white",
    height: 8,
  },
  box: {
    marginBottom: 8,
  },
});

const ProgressBar = ({ value, children }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.progressBar}>
        <View
          style={{ ...styles.progressBarValue, width: `${value * 100}%` }}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
