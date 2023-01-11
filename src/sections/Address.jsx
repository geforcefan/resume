import TitledBox from "../components/TitledBox";
import { Text } from "@react-pdf/renderer";
import data from "../data.json";

const Address = () => {
  return (
    <TitledBox title="Adresse">
      <Text>{data.personalInformation.address.street}</Text>
      <Text>
        {data.personalInformation.address.zip}{" "}
        {data.personalInformation.address.city}
      </Text>
    </TitledBox>
  );
};

export default Address;
