import {
    Alert,
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  
  const Home = ({ navigation, route }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setCredentials } = route.params;
  
    const handlePress = () => {
      if (username && password) {
        navigation.navigate("Profile", { username, password });
      } else {
        Alert.alert("Error", "Please enter both username and password.");
      }
    };
  
    const handledata = () => {
      if (username && password) {
        setCredentials({ username, password });
        Alert.alert("Success", "Data sent successfully");
      } else {
        Alert.alert("Error", "Please enter both username and password.");
      }
    };
  
    const data = [
      { id: "1", title: "Apple" },
      { id: "2", title: "Banana" },
      { id: "3", title: "Pineapple" },
      { id: "4", title: "Grapes" },
      { id: "5", title: "Orange" },
    ];
  
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  
    return (
      <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.main}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.container}>
              <Text style={styles.title}>Welcome to the App!</Text>
              <View style={styles.box}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter username"
                  placeholderTextColor="#aaa"
                  value={username}
                  onChangeText={setUsername}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="#aaa"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.customButton} onPress={handlePress}>
                  <Text style={styles.customButtonText}>Submit</Text>
                </TouchableOpacity>
  
                <TouchableOpacity style={styles.secondaryButton} onPress={handledata}>
                  <Text style={styles.secondaryButtonText}>Custom Button</Text>
                </TouchableOpacity>
  
                <Pressable
                  style={({ pressed }) => [
                    styles.pressableButton,
                    { backgroundColor: pressed ? "#0056b3" : "#007bff" },
                  ]}
                  onPress={() => console.log("Pressable Button Pressed")}
                >
                  <Text style={styles.pressableText}>Pressable Button</Text>
                </Pressable>
              </View>
            </View>
          }
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </LinearGradient>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    container: {
      padding: 20,
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 20,
      textAlign: "center",
    },
    box: {
      width: "100%",
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      fontSize: 16,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    buttonContainer: {
      width: "100%",
      alignItems: "center",
    },
    customButton: {
      backgroundColor: "#007bff",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginVertical: 10,
      width: "100%",
      alignItems: "center",
    },
    customButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    secondaryButton: {
      backgroundColor: "#ff5722",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginVertical: 10,
      width: "100%",
      alignItems: "center",
    },
    secondaryButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    pressableButton: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: "100%",
      alignItems: "center",
    },
    pressableText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    list: {
      paddingBottom: 20,
    },
    item: {
      backgroundColor: "#fff",
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    itemText: {
      fontSize: 18,
      color: "#333",
    },
  });
  