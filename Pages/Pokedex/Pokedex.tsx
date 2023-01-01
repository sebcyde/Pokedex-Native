import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const Pokedex = ({ navigation }: any) => {
	const [Loading, setLoading] = useState(true);
	const [PokemonData, setPokemonData] = useState<any[]>([]);

	const TypeColors = {
		normal: '#A8A878',
		fire: '#F08030',
		water: '#6890F0',
		grass: '#78C850',
		electric: '#F8D030',
		ice: '#98D8D8',
		fighting: '#C03028',
		poison: '#A040A0',
		ground: '#E0C068',
		flying: '#A890F0',
		psychic: '#F85888',
		bug: '#A8B820',
		rock: '#B8A038',
		ghost: '#705898',
		dark: '#705848',
		dragon: '#7038F8',
		steel: '#B8B8D0',
		fairy: '#EAB1B7',
	};

	const BackgroundPokeball = {
		uri: 'https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-5.jpg',
	};

	const PullData = async () => {
		const RawData = await axios.get(
			'https://pokeapi.co/api/v2/pokemon/?limit=1000000'
		);
		const Data = await Promise.all(
			RawData.data.results.map(async (Pokemon: any) => {
				const Response = await axios.get(Pokemon.url);
				return Response.data;
			})
		);
		setPokemonData(Data);
	};

	useEffect(() => {
		PullData().then(() => setLoading(false));
	}, []);

	return (
		<View>
			{Loading || !PokemonData ? (
				<Text>Loading Pokemon...</Text>
			) : (
				<ScrollView style={styles.PokedexPageContainer}>
					<Text style={styles.PokedexHeader}>Pokedex</Text>
					<View style={styles.PokedexContainer}>
						{PokemonData.map((Pokemon: any) => {
							const Type: string = Pokemon.types[0].type.name;

							const ShadowBox = {
								height: 100,
								width: '48%',
								borderRadius: 15,
								marginBottom: 20,
								shadowColor: '#171717',
								shadowOffset: { width: 2, height: 6 },
								shadowOpacity: 0.2,
								shadowRadius: 5,
							};

							const PokemonContainer = {
								backgroundColor: TypeColors[Type as keyof typeof TypeColors],
								height: 100,
								width: '100%',
								borderRadius: 15,
								marginBottom: 20,
								padding: 10,
								flexDirection: 'row',
								justifyContent: 'flex-start',
								overflow: 'hidden',
							};

							return (
								<View style={ShadowBox}>
									<View style={PokemonContainer}>
										<View style={styles.DetailsContainer}>
											<Text style={styles.PokemonName}>{Pokemon.name}</Text>
											{Pokemon.types.map((Type: any) => {
												return (
													<View style={styles.TypeContainer}>
														<Text style={styles.TypeName}>
															{Type.type.name}
														</Text>
													</View>
												);
											})}
										</View>
										<View style={styles.ImageContainer}>
											<Image
												source={{ uri: Pokemon.sprites.front_default }}
												style={styles.PokemonSprite}
											/>
											<Image
												source={BackgroundPokeball}
												style={styles.BackgroundImage}
											/>
										</View>
									</View>
								</View>
							);
						})}
					</View>
				</ScrollView>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	PokedexPageContainer: {
		padding: 20,
	},
	PokedexHeader: {
		fontFamily: 'Avenir-Black',
		fontSize: 25,
		fontWeight: '900',
	},
	PokedexContainer: {
		width: '100%',
		justifyContent: 'space-between',
		marginTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	DetailsContainer: {
		justifyContent: 'center',
		width: '70%',
		left: 0,
		zIndex: 2,
		overflow: 'visible',
	},
	PokemonName: {
		fontFamily: 'Avenir-Black',
		color: 'white',
		textTransform: 'capitalize',
		fontSize: 18,
		flexWrap: 'nowrap',
	},
	ImageContainer: {
		position: 'absolute',
		right: '3%',
		top: '12%',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		height: '100%',
		zIndex: 1,
	},
	PokemonSprite: {
		zIndex: 20000,
		height: 120,
		width: 120,
		opacity: 1,
	},
	BackgroundImage: {
		zIndex: 1,
		width: 95,
		height: 95,
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		opacity: 0.3,
		position: 'absolute',
		left: 15,
		top: 10,
		transform: [{ rotate: '-40deg' }],
	},
	TypeContainer: {},
	TypeName: {
		fontFamily: 'Avenir-Black',
		color: 'white',
		textTransform: 'capitalize',
		fontSize: 13,
	},
});

export default Pokedex;
