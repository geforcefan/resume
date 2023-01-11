import TitledBox from "../components/TitledBox";
import data from "../data.json";
import TitledText from "../components/TitledText";
import moment from "moment";
moment.locale("de");

const AboutMe = () => {
  return (
    <TitledBox title="Über mich">
      <TitledText title="Geburtsdatum, -ort">
        {`${moment(data.personalInformation.birth.day).format("DD.MM.yyyy")}, ${
          data.personalInformation.birth.city
        }`}
      </TitledText>
      <TitledText title="Familienstand">
        {data.personalInformation.martialStatus}
      </TitledText>
      <TitledText title="Staatsangehörigkeit">
        {data.personalInformation.citizen}
      </TitledText>
    </TitledBox>
  );
};

export default AboutMe;
