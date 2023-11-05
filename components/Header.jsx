import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Welcome to the ToDoList App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    alignItems: 'center',
  },
});

export default Header;
