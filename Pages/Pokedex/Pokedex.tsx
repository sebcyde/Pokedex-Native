import {
	ActivityIndicator,
	Image,
	ImageBackground,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export const TypeColors = {
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

const Pokedex = ({ navigation }: any) => {
	const [Loading, setLoading] = useState(true);
	const [PokemonData, setPokemonData] = useState<any[]>([]);

	const BackgroundPokeball = {
		uri: 'https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-5.jpg',
	};

	const PullData = async () => {
		const RawData = await axios.get(
			'https://pokeapi.co/api/v2/pokemon/?limit=1000000'
		);
		const Data = await Promise.all(
			RawData.data.results.slice(0, 100).map(async (Pokemon: any) => {
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
		<View style={Loading || !PokemonData ? styles.LoadingScreen : null}>
			<StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
			{Loading || !PokemonData ? (
				<ActivityIndicator size="large" color="#264653" />
			) : (
				<ScrollView style={styles.PokedexPageContainer}>
					<View style={styles.PokedexContainer}>
						{PokemonData.map((Pokemon: any) => {
							const Type: string = Pokemon.types[0].type.name;

							const ShadowBox = {
								height: 135,
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
								height: 135,
								width: '100%',
								borderRadius: 15,
								marginBottom: 20,
								padding: 10,
								flexDirection: 'row',
								justifyContent: 'flex-start',
								overflow: 'hidden',
							};

							return (
								<TouchableOpacity
									style={ShadowBox}
									key={Pokemon.id}
									onPress={() =>
										navigation.navigate('pokemondetails', {
											PokemonDetails: Pokemon,
										})
									}
								>
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
								</TouchableOpacity>
							);
						})}
					</View>
				</ScrollView>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	LoadingScreen: {
		flex: 1,
		justifyContent: 'center',
	},
	PokedexPageContainer: {
		padding: 20,
		paddingTop: 5,
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
		bottom: 5,
	},
	ImageContainer: {
		position: 'absolute',
		right: '4%',
		top: '20%',
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
		right: 4,
		bottom: 2,
	},
	BackgroundImage: {
		zIndex: 1,
		width: 150,
		height: 150,
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		opacity: 0.2,
		position: 'absolute',
		left: -10,
		top: 5,
		transform: [{ rotate: '-40deg' }],
	},
	TypeContainer: {},
	TypeName: {
		top: 2,
		backgroundColor: 'rgba(250,250,250,0.3)',
		alignSelf: 'flex-start',
		padding: 5,
		margin: 2,
		borderRadius: 7,
		fontFamily: 'Avenir-Black',
		color: 'white',
		textTransform: 'capitalize',
		fontSize: 13,
		overflow: 'hidden',
	},
});

export default Pokedex;
