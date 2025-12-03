import Files from "@/assets/icons/settingsTsx/Files";
import Mode from "@/assets/icons/settingsTsx/Mode";
import Payment from "@/assets/icons/settingsTsx/Payment";
import Settings from "@/assets/icons/settingsTsx/Settings";

import Document from "@/assets/icons/settingsTsx/Document";
import HelpIcon from "@/assets/icons/settingsTsx/HelpIcon";
import InviteFriend from "@/assets/icons/settingsTsx/InviteFriend";
import VitaiLogo from "@/assets/icons/settingsTsx/VitaiLogo";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import SingleRowCard from "./SingleRowCard";
export default function CardSetting() {
  const { width } = useWindowDimensions();
  const isWeb = width > 768;
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
        <View style={styles.bottomContainer}>
          <View style={styles.inviteIconBox}>{InviteFriend({})}</View>

          <View
            style={[
              styles.rightBottomContainer,
              isWeb && styles.rightBottomContainerWeb,
            ]}
          >
            <Text style={styles.textBottom}>
              Invite friend to give a friend $15 of and get $10 credit for you!
            </Text>
            <Pressable
              style={styles.btnWrapper}
              onPress={() => console.log("Ciao")}
            >
              <Text style={styles.textBottomButton}>Invite Now!</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    margin: 20,
    width: "90%",
    alignSelf: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    gap: 6,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  rightBottomContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    marginLeft: 10,
    gap: 8,
  },
  rightBottomContainerWeb: {
    alignItems: "flex-end",
    marginRight: 12,
  },
  textBottom: {
    color: "#1E1F20",
    fontSize: 13,
    lineHeight: 22,
    fontWeight: 400,
  },
  inviteIconBox: {
    width: 78,
    height: 78,
    alignItems: "center",
    justifyContent: "center",
  },
  btnWrapper: {
    justifyContent: "center",
    backgroundColor: "#00A7A5",
    width: 90,
    height: 30,
    borderRadius: 4,
  },
  textBottomButton: {
    textAlign: "center",
    color: "white",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
  },
});
