import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, SafeAreaView} from "react-native";
import DigiteSeuNome from "./src/components/Inputs/DigiteSeuNome";
import FlexBoxV1 from "./src/components/layout/FlexBoxV1";
import Quadrado from "./src/components/layout/Quadrado";
import FlatList from "./src/components/lista/FlatList";
import { Primeiro } from "./src/components/Primeiro";

export default function App() {

  
  
  return (
    <SafeAreaView style={styles.container}>
     {/* <FlatList/> */}
     {/* <DigiteSeuNome/> */}
     {/* <Quadrado/> */}
     <FlexBoxV1/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
