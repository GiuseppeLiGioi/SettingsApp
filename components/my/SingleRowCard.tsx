import Row from "@/assets/icons/settingsTsx/Row";

import { ReactNode, useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
type SingleRowCardProps = {
  svg: ReactNode;
  name: string;
  switchProp?: boolean;
};

export default function SingleRowCard({
  svg,
  name,
  switchProp,
}: SingleRowCardProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <View style={styles.containerSingleRow}>
      <View style={styles.leftColumn}>
        <View style={styles.iconBox}>{svg}</View>
        <Text style={styles.name}>{name}</Text>
      </View>
      {switchProp ? (
        <View>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>
      ) : (
        <Pressable onPress={() => console.log("ciao")}>
          <Text>{Row({})}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerSingleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
    width: "100%",
    alignSelf: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#FAFAFA",
  },
  leftColumn: {
    flexDirection: "row",
    gap: 15,
    alignItems: "flex-start",
    marginLeft: 10,
  },
  iconBox: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 16,
    alignSelf: "center",
  },
});
