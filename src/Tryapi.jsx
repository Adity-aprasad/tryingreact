import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';

const Tryapi = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  const [title, settitle] = useState(null);
  const [body, setbody] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, []);

  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 11,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5733" />
        <Text style={styles.loadingText}>Fetching data, please wait...</Text>
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      {/* Data Display Section */}
      <View style={styles.card}>
        <Text style={styles.title} >This is the FETCH api requect</Text>
        <Text style={styles.title}>Post Title</Text>
        <Text style={styles.dataText}>{data.title}</Text>
        <Text style={styles.bodyText}>{data.body}</Text>
      </View>

      {/* Form Section */}
      <View style={styles.card}>
        <Text style={styles.title}>This is the POST api request</Text>
        <Text style={styles.formTitle}>Create a New Post</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          placeholderTextColor="#888"
          value={title}
          onChangeText={settitle}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Enter details"
          placeholderTextColor="#888"
          value={body}
          onChangeText={setbody}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Tryapi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF5733",
  },
  dataText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 14,
    color: "#666",
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#FF5733",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
