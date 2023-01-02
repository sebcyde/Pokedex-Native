import {
	ActivityIndicator,
	ScrollView,
	StatusBar,
	StyleSheet,
	Image,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import DetailsTopSection from '../../Components/Pokedex/DetailsTopSection';
import DetailsBottomSection from '../../Components/Pokedex/DetailsBottomSection';
import { TypeColors } from './Pokedex';

const PokemonDetails = (PokemonDetails: any) => {
	const [Loading, setLoading] = useState(true);
	const Pokemon = PokemonDetails.route.params.PokemonDetails;

	const SBColor =
		TypeColors[Pokemon.types[0].type.name as keyof typeof TypeColors];

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			<StatusBar backgroundColor={SBColor} barStyle="dark-content" />
			{Loading ? (
				<View style={styles.LoadingScreen}>
					<ActivityIndicator size="large" color="#264653" />
				</View>
			) : (
				<ScrollView>
					<DetailsTopSection Pokemon={Pokemon} />
					<DetailsBottomSection Pokemon={Pokemon} />
				</ScrollView>
			)}
		</>
	);
};

export default PokemonDetails;

const styles = StyleSheet.create({
	LoadingScreen: {
		flex: 1,
		justifyContent: 'center',
	},
});
