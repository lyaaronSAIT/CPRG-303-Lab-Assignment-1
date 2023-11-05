import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Text, Button, StyleSheet } from 'react-native';

function AboutScreen({ navigation }) {

    return (
        <MainLayout>
            <Text style={styles.container}>My name is Aaron Ly</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        textAlign: 'center'
    },
  });

export default AboutScreen;