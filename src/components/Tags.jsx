import { StyleSheet, View, Text } from "@react-pdf/renderer";
import data from '../data.json';

const styles = StyleSheet.create({
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: -5,
  },
  tag: {
    display: "inline-block",
    color: "white",
    backgroundColor: data.colors.primary,
    fontSize: 10,
    borderRadius: 3,
    padding: 5,
    marginBottom: 5,
    marginRight: 3,
  },
});

const Tags = ({ tags }) => {
  return (
    <View style={styles.tags}>
      {tags.map((tag) => (
        <Text key={tag} style={styles.tag}>
          {tag}
        </Text>
      ))}
    </View>
  );
};

export default Tags;
