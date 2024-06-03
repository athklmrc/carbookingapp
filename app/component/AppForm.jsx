import { View, Text } from "react-native";
import React from "react";

import formStyle from "../style/formStyle";

/*
const recursivelyMapChildren = (children, addedProperties) => {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    return React.cloneElement(child, {
     ...child.props,
     ...addedProperties,
      children: this.recursivelyMapChildren(child.props.children, addedProperties),
    });
  });
};
*/

export default function AppForm({title, children}) {
  return (
    <View style={formStyle.container}>
      <Text style={formStyle.titleText}>{title}</Text>
      {children}
    </View>
  );
}
