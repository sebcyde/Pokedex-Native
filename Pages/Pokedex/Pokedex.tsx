import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Pokedex = ({ navigation }: any) => {
	return (
		<View>
			<Text>Pokedex</Text>
			<Button
				title="Go to Homescreen"
				onPress={() => navigation.navigate('Homescreen')}
			/>
		</View>
	);
};

export default Pokedex;

const styles = StyleSheet.create({});
