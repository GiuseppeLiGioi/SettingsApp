import ProfileIcon from "@/assets/icons/settingsTsx/ProfileIcon";
import editProfile from "@/assets/icons/settingsTsx/editProfile";
import { Pressable, StyleSheet, Text, View } from "react-native";

type StickyHeaderProps = {
  name: string;
  email: string;
  modeAccount: string;
};
export default function StickyHeader({
  name,
  email,
  modeAccount,
}: StickyHeaderProps) {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.leftColumn}>
        {ProfileIcon({})}

        <View style={styles.texts}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textEmail}>{email}</Text>
          <Text style={styles.textMode}>{modeAccount}</Text>
        </View>
      </View>

      <Pressable onPress={() => console.log("ciao")}>
        <Text>{editProfile({})}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
  },
  leftColumn: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  texts: {
    flexDirection: "column",
  },

  textMode: {
    color: "#9393AA",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 25,
  },
  textName: {
    color: "#1E1F20",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 20,
  },
  textEmail: {
    color: "#1E1F20",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 20,
  },
});
