import { Entypo, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <StatusBar backgroundColor="transparent" />
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View style={styles.header}>
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={styles.headerText}>Employee Management App</Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
          <View style={styles.listAndAttendanceContainer}>
            <Pressable
              onPress={() => router.push("/(home)/employees")}
              style={styles.employeeList}
            >
              <View style={styles.employeeListIcon}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={styles.employeeListText}>Employee List</Text>
            </Pressable>
            <Pressable style={styles.employeeList}>
              <View style={styles.employeeListIcon}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={styles.employeeListText}>Mark Attendance</Text>
            </Pressable>
          </View>
          <View style={styles.employeeReportContainer}>
            <Pressable style={styles.attendenceReport}>
              <View style={styles.attendenceReportIcon}>
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text style={styles.attendenceReportText}>Attendance Report</Text>
              <View style={styles.fowrardIcon}>
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={styles.attendenceReport}>
              <View style={styles.attendenceReportIcon}>
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text style={styles.attendenceReportText}>summary Report</Text>
              <View style={styles.fowrardIcon}>
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={styles.attendenceReport}>
              <View style={styles.attendenceReportIcon}>
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text style={styles.attendenceReportText}>
                All Generate Reports
              </Text>
              <View style={styles.fowrardIcon}>
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={styles.attendenceReport}>
              <View style={styles.attendenceReportIcon}>
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text style={styles.attendenceReportText}>Overtime Employee</Text>
              <View style={styles.fowrardIcon}>
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View style={styles.criteriaContainer}>
            <View style={styles.attendenceCreteria}>
              <View style={styles.fowrardIcon}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.criteriaText}>Attendance Criteria</Text>
            </View>
            <View
              style={[
                styles.attendenceCreteria,
                { backgroundColor: "#ABCABA" },
              ]}
            >
              <View style={styles.fowrardIcon}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={styles.criteriaText}>Increased Workflow</Text>
            </View>
          </View>
          <View style={styles.criteriaContainer}>
            <View
              style={[
                styles.attendenceCreteria,
                { backgroundColor: "#bdc3c7" },
              ]}
            >
              <View style={styles.fowrardIcon}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.criteriaText}>Coast Saving</Text>
            </View>
            <View
              style={[
                styles.attendenceCreteria,
                { backgroundColor: "#ABCABA" },
              ]}
            >
              <View style={styles.fowrardIcon}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={styles.criteriaText}>Employee Performance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  listAndAttendanceContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  employeeList: {
    backgroundColor: "#D3CCE3",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flex: 1,
  },
  employeeListIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  employeeListText: {
    marginTop: 7,
    fontWeight: "700",
  },
  employeeReportContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  attendenceReport: {
    backgroundColor: "#8E93C5",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  attendenceReportIcon: {
    padding: 2,
    width: 45,
    height: 45,
    borderRadius: 7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  attendenceReportText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    flex: 1,
  },
  fowrardIcon: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  attendenceCreteria: {
    backgroundColor: "#f79d00",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flex: 1,
  },
  criteriaContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  criteriaText: {
    fontSize: 13,
  },
});
