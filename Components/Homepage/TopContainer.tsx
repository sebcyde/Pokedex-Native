import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import CategoryContainer from './CategoryContainer';
import { Icon } from '@rneui/themed';

const TopContainer = () => {
	return (
		<View style={styles.HomepageContainer}>
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
			<CategoryContainer />
		</View>
	);
};

export default TopContainer;

const styles = StyleSheet.create({
	HomepageContainer: {
		flex: 1,
		backgroundColor: 'white',
		paddingBottom: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
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
		backgroundColor: '#e9ecef',
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
});
