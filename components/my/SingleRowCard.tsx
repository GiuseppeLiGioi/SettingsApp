import Row from "@/assets/icons/settingsTsx/Row";
import { ReactNode, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
type SingleRowCardProps = {
  svg: ReactNode;
  name: string;
  marginLeft?: number;
  switchProp?: boolean;
};

export default function SingleRowCard({
  svg,
  name,
  marginLeft,
  switchProp,
}: SingleRowCardProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <View style={styles.containerSingleRow}>
      <View style={[styles.leftColumn, { marginLeft }]}>
        {svg}
        <Text style={styles.name}>{name}</Text>
      </View>
      {switchProp ? (
        <View>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>
      ) : (
        <Row />
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
    borderWidth: 2,
    borderColor: "red",
    gap: 10,
    width: "90%",
    alignSelf: "center",
  },
  leftColumn: {
    flexDirection: "row",
    gap: 15,
    alignItems: "flex-start",
  },
  name: {
    textAlign: "center",
    fontSize: 16,
    alignSelf: "center",
  },
});
