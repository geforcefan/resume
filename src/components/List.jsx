import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import data from '../data.json';

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <View style={styles.bulletPoint} />
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  bulletPoint: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: data.colors.primary,
    alignContent: "center",
    marginRight: 5,
    marginTop: 5,
  },
  itemContent: {
    marginRight: 5,
    flex: 1,
  },
});
export default List;
