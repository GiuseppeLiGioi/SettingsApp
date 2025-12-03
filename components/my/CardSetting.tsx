import Files from "@/assets/icons/settingsTsx/Files";
import Mode from "@/assets/icons/settingsTsx/Mode";
import Payment from "@/assets/icons/settingsTsx/Payment";
import Settings from "@/assets/icons/settingsTsx/Settings";

import Document from "@/assets/icons/settingsTsx/Document";
import HelpIcon from "@/assets/icons/settingsTsx/HelpIcon";
import VitaiLogo from "@/assets/icons/settingsTsx/VitaiLogo";
import { ScrollView, StyleSheet, View } from "react-native";
import SingleRowCard from "./SingleRowCard";
export default function CardSetting() {
  const rows = [
    { svg: Files, name: "Files", switchProp: false },
    { svg: Payment, name: "Payment method", switchProp: false },
    { svg: Settings, name: "Settings", switchProp: false },
    { svg: Mode, name: "Dark Mode", switchProp: true },
  ];

  const rows2 = [
    { svg: VitaiLogo, name: "About Aivi", switchProp: false },
    {
      svg: HelpIcon,
      name: "Help & Support",

      switchProp: false,
    },
    {
      svg: Document,
      name: "Privacy and Policy",

      switchProp: false,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.containerCard}>
        {rows.map((r, index) => (
          <SingleRowCard
            key={index}
            svg={r.svg({})}
            name={r.name}
            switchProp={r.switchProp}
          />
        ))}
      </View>

      <View style={styles.containerCard}>
        {rows2.map((r, index) => (
          <SingleRowCard
            key={index}
            svg={r.svg({})}
            name={r.name}
            switchProp={r.switchProp}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    margin: 20,
    width: "90%",
    alignSelf: "center",
    maxWidth: 900,
  },
});
