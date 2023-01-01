import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Pages/Homescreen/Homescreen';
import Pokedex from './Pages/Pokedex/Pokedex';
import Abilities from './Pages/Abilities/Abilities';
import Locations from './Pages/Locations/Locations';
import Moves from './Pages/Moves/Moves';
import Items from './Pages/Items/Items';
import Typecharts from './Pages/Typecharts/Typecharts';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="homescreen"
					component={Homescreen}
					options={{ title: 'Homescreen' }}
				/>
				<Stack.Screen
					name="pokedex"
					component={Pokedex}
					options={{ title: 'Pokedex' }}
				/>
				<Stack.Screen
					name="abilities"
					component={Abilities}
					options={{ title: 'Abilities' }}
				/>
				<Stack.Screen
					name="locations"
					component={Locations}
					options={{ title: 'Locations' }}
				/>
				<Stack.Screen
					name="moves"
					component={Moves}
					options={{ title: 'Moves' }}
				/>
				<Stack.Screen
					name="items"
					component={Items}
					options={{ title: 'Items' }}
				/>
				<Stack.Screen
					name="typecharts"
					component={Typecharts}
					options={{ title: 'Typecharts' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
