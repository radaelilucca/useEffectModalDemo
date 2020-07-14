import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Registro = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SIGN UP PAGE</Text>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          height: 60,
          width: 150,
          margin: 20,
        }}
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <Text>GoToHome</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registro;
