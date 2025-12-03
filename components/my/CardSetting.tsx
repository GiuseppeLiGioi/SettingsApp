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
    { svg: Files, name: "Files", marginLeft: 10, switchProp: false },
    { svg: Payment, name: "Payment method", marginLeft: 0, switchProp: false },
    { svg: Settings, name: "Settings", marginLeft: 10, switchProp: false },
    { svg: Mode, name: "Dark Mode", marginLeft: 10, switchProp: true },
  ];

  const rows2 = [
    { svg: VitaiLogo, name: "About Aivi", marginLeft: 0, switchProp: false },
    {
      svg: HelpIcon,
      name: "Help & Support",
      marginLeft: 10,
      switchProp: false,
    },
    {
      svg: Document,
      name: "Privacy and Policy",
      marginLeft: 10,
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
            marginLeft={r.marginLeft}
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
            marginLeft={r.marginLeft}
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
