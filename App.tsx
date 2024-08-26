import * as React from "react";
import * as RN from "react-native";
import TabViewExample from "./components/TabViewExample";

export default function App() {
  return (
    <RN.SafeAreaView style={css.container}>
      <TabViewExample />
    </RN.SafeAreaView>
  );
}

const css = RN.StyleSheet.create({
  container: { flex: 1 },
});
