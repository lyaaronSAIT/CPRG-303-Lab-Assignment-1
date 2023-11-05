import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {

    return (
        <MainLayout>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center'
    },
});

export default HomeScreen;