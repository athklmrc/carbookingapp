import React, { createContext, useContext } from 'react';
import { Text } from 'react-native';

// use default fontSize for all Text
// good for Lao font which is small

const FontSizeContext = createContext(14); // Default font size

export const FontSizeProvider = ({ children }) => {
  return (
    <FontSizeContext.Provider value={14}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);

// Usage: import as <Text></Text> component
const CustomText = ({ children, style, ...props }) => {
  const fontSize = useFontSize();
  return (
    <Text style={ [{ fontSize }, style] } {...props}>
      {children}
    </Text>
  );
};
