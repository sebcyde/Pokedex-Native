import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoryTab from './CategoryTab';

const CategoryContainer = () => {
	return (
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
	);
};

export default CategoryContainer;

const styles = StyleSheet.create({
	AllCategoriesContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 40,
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
