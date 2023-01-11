import { Font } from "@react-pdf/renderer";

import RobotoCondensedLight from "../fonts/RobotoCondensed-Light.ttf";
import RobotoLight from "../fonts/Roboto-Light.ttf";
import RobotoMedium from "../fonts/Roboto-Medium.ttf";
import RobotoBold from "../fonts/Roboto-Bold.ttf";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";

Font.register({
  family: "Roboto Condensed",
  fontWeight: "light",
  src: RobotoCondensedLight,
});

Font.register({
  family: "Roboto",
  fontWeight: "light",
  src: RobotoLight,
});

Font.register({
  family: "Roboto",
  fontWeight: "medium",
  src: RobotoMedium,
});

Font.register({
  family: "Roboto",
  fontWeight: "bold",
  src: RobotoBold,
});

Font.register({
  family: "Roboto",
  src: RobotoRegular,
});
