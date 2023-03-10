import TitledBox from "../components/TitledBox";
import ProgressBar from "../components/ProgressBar";
import { StyleSheet, View } from "@react-pdf/renderer";

const ProgressBarList = ({ title, data }) => {
  return (
    <TitledBox title={title}>
      <View style={styles.items}>
        {Object.keys(data).map((name) => (
          <ProgressBar key={name} value={data[name]}>
            {name}
          </ProgressBar>
        ))}
      </View>
    </TitledBox>
  );
};

const styles = StyleSheet.create({
    items: {
        width: "70%",
        alignSelf: "center",
    },
});

export default ProgressBarList;
