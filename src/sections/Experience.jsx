import TitledBox from "../components/TitledBox";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import data from "../data.json";
import moment from "moment";
import List, { Item } from "../components/List";
import Tags from "../components/Tags";

const ExperienceBlock = ({
  title,
  company,
  city,
  tasks,
  tags,
  from,
  to,
  isLast,
}) => {
  return (
    <View style={styles.experience}>
      <View style={styles.timeline}>
        <Text>{to === "now" ? "Jetzt" : moment(to).format("MMMM yyy")}</Text>
        <Text>
          {from === "now" ? "Jetzt" : moment(from).format("MMMM yyy")}
        </Text>
      </View>
      <View style={styles.pointsAndLines}>
        <View style={styles.point} />
        {!isLast && <View style={styles.line} />}
      </View>

      <View style={styles.information}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          {company} in {city}
        </Text>
        <View style={styles.tasksList}>
          <List>
            {tasks.map((task) => (
              <Item key={task} style={styles.task}>
                {task}
              </Item>
            ))}
          </List>
        </View>
        <Tags tags={tags} />
      </View>
    </View>
  );
};

const Experience = () => {
  return (
    <TitledBox title="Berufserfahrung">
      {data.experience.map((experience, i) => (
        <ExperienceBlock
          key={i}
          {...experience}
          isLast={i >= data.experience.length - 1}
        />
      ))}
    </TitledBox>
  );
};

const styles = StyleSheet.create({
  point: {
    width: 12,
    height: 12,
    borderRadius: 12,
    border: "2px solid rgb(26, 59, 94)",
  },
  line: {
    width: "2",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgb(26, 59, 94)",
    left: "50%",
    marginLeft: "-1",
    top: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "light",
    marginBottom: 5,
  },
  experience: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: 20,
  },
  timeline: {
    alignItems: "flex-end",
    alignContent: "flex-end",
    fontWeight: "light",
  },
  pointsAndLines: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: -11,
  },
  information: {
    flexShrink: 1,
    flex: 1,
  },
  tasksList: {
    marginBottom: 5,
  },
});
export default Experience;