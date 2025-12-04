import SvgFiles from "@/assets/icons/settingsTsx/Files";
import SvgMode from "@/assets/icons/settingsTsx/Mode";
import SvgPayment from "@/assets/icons/settingsTsx/Payment";
import SvgSettings from "@/assets/icons/settingsTsx/Settings";

import SvgDocument from "@/assets/icons/settingsTsx/Document";
import SvgHelpIcon from "@/assets/icons/settingsTsx/HelpIcon";
import SvgInviteFriend from "@/assets/icons/settingsTsx/InviteFriend";
import SvgVitaiLogo from "@/assets/icons/settingsTsx/VitaiLogo";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useLoadFonts } from "../../hooks/settingsHooks/useLoadFonts";

import SingleRowCard from "./SingleRowCard";
export default function CardSetting() {
  const rows = [
    { svg: SvgFiles, name: "Files", switchProp: false },
    { svg: SvgPayment, name: "Payment method", switchProp: false },
    { svg: SvgSettings, name: "Settings", switchProp: false },
    { svg: SvgMode, name: "Dark Mode", switchProp: true },
  ];

  const rows2 = [
    { svg: SvgVitaiLogo, name: "About Aivi", switchProp: false },
    {
      svg: SvgHelpIcon,
      name: "Help & Support",

      switchProp: false,
    },
    {
      svg: SvgDocument,
      name: "Privacy and Policy",

      switchProp: false,
    },
  ];

  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <ScrollView>
      <View style={styles.containerCard}>
        {rows.map((r, index) => {
          const Icon = r.svg;
          return (
            <SingleRowCard
              key={index}
              svg={<Icon />}
              name={r.name}
              switchProp={r.switchProp}
            />
          );
        })}
      </View>

      <View style={styles.containerCard}>
        {rows2.map((r, index) => {
          const Icon = r.svg;
          return (
            <SingleRowCard
              key={index}
              svg={<Icon />}
              name={r.name}
              switchProp={r.switchProp}
            />
          );
        })}
        <View style={styles.bottomContainer}>
          <View style={styles.inviteIconBox}>
            <SvgInviteFriend />
          </View>

          <View
            style={[
              styles.rightBottomContainer,
              Platform.OS === "web" && styles.rightBottomContainerWeb,
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
    marginTop: 40,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
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
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
  },
});
