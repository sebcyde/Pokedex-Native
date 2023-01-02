import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const PokemonDetails = (PokemonDetails: any) => {
	const [Loading, setLoading] = useState(true);
	const Pokemon = PokemonDetails.route.params.PokemonDetails;

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<View style={Loading ? styles.LoadingScreen : ''}>
			{Loading ? (
				<ActivityIndicator size="large" color="#264653" />
			) : (
				<View>
					<Text style={styles.PokemonName}>{JSON.stringify(Pokemon.name)}</Text>
				</View>
			)}
		</View>
	);
};

export default PokemonDetails;

const styles = StyleSheet.create({
	LoadingScreen: {
		flex: 1,
		justifyContent: 'center',
	},
	PokemonName: {
		color: 'black',
	},
});
