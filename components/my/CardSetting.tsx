import Files from "@/assets/icons/settingsTsx/Files";
import Mode from "@/assets/icons/settingsTsx/Mode";
import Payment from "@/assets/icons/settingsTsx/Payment";
import Settings from "@/assets/icons/settingsTsx/Settings";
import { StyleSheet, View } from "react-native";
import SingleRowCard from "./SingleRowCard";
export default function CardSetting() {
  const rows = [
    { svg: Files, name: "Files", marginLeft: 10, switchProp: false },
    { svg: Payment, name: "Payment method", marginLeft: 0, switchProp: false },
    { svg: Settings, name: "Settings", marginLeft: 10, switchProp: false },
    { svg: Mode, name: "Dark Mode", marginLeft: 10, switchProp: true },
  ];

  return (
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
  );
}

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 20,
  },
});
