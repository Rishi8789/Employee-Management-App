import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const adddetails = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [designation, setDesignation] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Text style={styles.titleText}>Add a New Employee</Text>
        <TextInput
          style={styles.textInput}
          placeholder="India"
          placeholderTextColor={"black"}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Full Name(First and Last Name)</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
          placeholder="Enter full name"
          placeholderTextColor={"black"}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Employee Id</Text>
        <TextInput
          value={employeeId}
          onChangeText={(text) => setEmployeeId(text)}
          style={styles.textInput}
          placeholder="Employee Id"
          placeholderTextColor={"black"}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Designation</Text>
        <TextInput
          value={designation}
          onChangeText={(text) => setDesignation(text)}
          style={styles.textInput}
          placeholder="Designation"
          placeholderTextColor={"black"}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Mobile Number</Text>
        <TextInput
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
          style={styles.textInput}
          placeholder="Mobile no"
          placeholderTextColor={"black"}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Date of Birth</Text>
        <TextInput
          value={dateOfBirth}
          onChangeText={(text) => setDateOfBirth(text)}
          style={styles.textInput}
          placeholder="Enter date of birth"
          placeholderTextColor={"black"}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Joining Date</Text>
        <TextInput
          value={joiningDate}
          onChangeText={(text) => setDateOfBirth(text)}
          style={styles.textInput}
          placeholder="Joining date"
          placeholderTextColor={"black"}
        />
      </View>
      <View style={styles.activeEmployee}>
        <Text>Active Employee</Text>
        <Text>True</Text>
      </View>
      <View>
        <Text style={styles.titleText}>Salary</Text>
        <TextInput
          value={salary}
          onChangeText={(text) => setSalary(text)}
          style={styles.textInput}
          placeholder="Salary"
          placeholderTextColor={"black"}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Address</Text>
        <TextInput
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.textInput}
          placeholder="Enter address"
          placeholderTextColor={"black"}
        />
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Add Employee</Text>
      </Pressable>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    gap: 10,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
  textInput: {
    padding: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
  },
  activeEmployee: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#ABCABA",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    // fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});
