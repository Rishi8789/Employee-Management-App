import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const employees = () => {
  const router = useRouter();
  const [employee, setEmployee] = useState([]);
  const [textInput, setTextInput] = useState("");
  const fetchEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employee ");
      setEmployee(response);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchEmployee();
  }, []);
  console.log("employee", employee);
  return (
    <View style={{ flex: 1, padding: 12, backgroundColor: "#fff" }}>
      <View style={styles.searchansdBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Pressable style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            placeholder="Search..."
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
            style={{ flex: 1 }}
          />
          {employee.length > 0 && (
            <View>
              <Pressable>
                <AntDesign name="pluscircle" size={20} color="black" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>
      <Pressable onPress={() => router.push("/(home)/adddetails")}>
        <AntDesign name="pluscircle" size={20} color="#0072b1" />
      </Pressable>
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({
  searchansdBack: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 7,
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 4,
  },
});
