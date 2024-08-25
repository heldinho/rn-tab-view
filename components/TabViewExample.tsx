import * as React from "react";
import * as Tab from "react-native-tab-view";
import First from "../screens/First";
import Second from "../screens/Second";

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "tree", title: "Tree" },
  ]);

  const renderScene = Tab.SceneMap({
    first: First,
    second: Second,
    tree: Second,
  });

  return (
    <Tab.TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 120 }}
    />
  );
}
