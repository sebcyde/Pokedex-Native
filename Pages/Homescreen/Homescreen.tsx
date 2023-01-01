import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from '@rneui/themed';
import React from 'react';
import CategoryTab from '../../Components/Homepage/CategoryTab';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const Homescreen = ({ navigation }: any) => {
	const [fontsLoaded] = useFonts({
		'Rubik-Black': require('../../assets/fonts/Rubik-Light.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.HomepageContainer} onLayout={onLayoutRootView}>
			<Text style={styles.HomepageHeader}>
				What Pokemon are you looking for?
			</Text>
			<View style={styles.SearchbarContainer}>
				<Icon name="search" />
				<TextInput
					style={styles.Searchbar}
					// onChangeText={onChangeNumber}
					// value={number}
					placeholder="Search"
					keyboardType="default"
				/>
			</View>
			<View style={styles.AllCategoriesContainer}>
				<View style={styles.LeftCategoriesContainer}>
					<CategoryTab BackgroundColor="green" Title="Pokedex" />
					<CategoryTab BackgroundColor="blue" Title="Abilities" />
					<CategoryTab BackgroundColor="purple" Title="Locations" />
				</View>
				<View style={styles.RightCategoriesContainer}>
					<CategoryTab BackgroundColor="orange" Title="Moves" />
					<CategoryTab BackgroundColor="yellow" Title="Items" />
					<CategoryTab BackgroundColor="brown" Title="Type Charts" />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	HomepageContainer: {
		flex: 1,
	},
	HomepageHeader: {
		fontFamily: 'Avenir-Black',
		fontSize: 25,
		// fontWeight: '800',
		width: '80%',
		margin: 'auto',
		marginLeft: 20,
		marginTop: 20,
		marginBottom: 20,
	},
	SearchbarContainer: {
		backgroundColor: 'lightgrey',
		padding: 15,
		borderRadius: 15,
		height: 50,
		margin: 5,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderWidth: 0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '95%',
	},
	Searchbar: {
		height: 50,
		marginLeft: 10,
		flex: 1,
	},
	AllCategoriesContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 40,
		height: 'fit-content',
	},
	LeftCategoriesContainer: {
		width: '48%',
		borderColor: 'blue',
		marginRight: 'auto',
	},
	RightCategoriesContainer: {
		width: '48%',
		borderColor: 'red',
		marginLeft: 'auto',
	},
});

export default Homescreen;
