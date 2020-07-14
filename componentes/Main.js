import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import api from "../services/api";

const Main = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    console.log("EFFECT START: Mounted:", mounted);
    const getUser = async () => {
      setLoading(true);
      const response = await api.get(
        "https://api.github.com/users/radaelilucca"
      );

      setTimeout(() => {
        if (!mounted) {
          setUser(response.data);
          setLoading(false);
        } else {
          console.log("ELSE RETURNING");
          return;
        }

        console.log("FUNC END");
      }, 3000);
    };
    getUser();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MAIN PAGE</Text>
      {loading ? (
        <Text> CARREGANDO ...</Text>
      ) : (
        <>
          <Text>{user.login}</Text>
          <Text>{user.name}</Text>
        </>
      )}
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          height: 60,
          width: 150,
          margin: 20,
        }}
      >
        <Text>GoToHome</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
