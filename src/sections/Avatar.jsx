import { Image, StyleSheet } from "@react-pdf/renderer";
import avatar from "../images/avatar.jpg";

const Avatar = () => {
  return <Image style={styles.image} src={avatar} />;
};

const styles = StyleSheet.create({
  image: {
    width: "60%",
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 25,
  },
});

export default Avatar;
