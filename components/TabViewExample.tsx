import * as React from "react";
import * as Tab from "react-native-tab-view";
import First from "../screens/First";
import Second from "../screens/Second";
import Geolocation from "../screens/Geolocation";

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "geo", title: "GeoLocation" },
  ]);

  const renderScene = Tab.SceneMap({
    first: First,
    second: Second,
    geo: Geolocation,
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
