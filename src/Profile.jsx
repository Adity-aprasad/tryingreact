import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const Profile = ({ route }) => {
  const { username, password } = route.params || {}; // Access passed data with fallback
  const { credentials } = route.params || {};

  return (
    <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>
          Welcome, {username || 'Guest'}!
        </Text>
        <Text style={styles.subText}>
          Password: {password || 'N/A'}
        </Text>

        {credentials ? (
          <View style={styles.credentialsContainer}>
            <Text style={styles.credentialsText}>
              Username: {credentials.username}
            </Text>
            <Text style={styles.credentialsText}>
              Password: {credentials.password}
            </Text>
          </View>
        ) : (
          <Text style={styles.noCredentialsText}>
            No credentials available
          </Text>
        )}
      </View>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width * 0.85,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
  credentialsContainer: {
    marginTop: 10,
  },
  credentialsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  noCredentialsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
});
