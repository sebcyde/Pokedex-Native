import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TypeColors } from '../../Pages/Pokedex/Pokedex';

type Props = {
	Pokemon: any;
};

const DetailsTopSection = ({ Pokemon }: Props) => {
	const ContainerColor =
		TypeColors[Pokemon.types[0].type.name as keyof typeof TypeColors];

	return (
		<View
			style={[styles.TopSectionContainer, { backgroundColor: ContainerColor }]}
		>
			<View style={styles.NameRowDetails}>
				<Text style={styles.PokemonName}>{Pokemon.name}</Text>
				<Text style={styles.PokemonNumber}>#{Pokemon.id}</Text>
			</View>
			<View style={styles.TypesRowDetails}>
				{Pokemon.types.map((Type: any) => {
					return (
						<View style={styles.TypeContainer}>
							<Text style={styles.TypeName}>{Type.type.name}</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
};

export default DetailsTopSection;

const styles = StyleSheet.create({
	TopSectionContainer: {
		zIndex: 1,
		padding: 20,
		paddingBottom: 50,
		height: 400,
	},
	NameRowDetails: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	PokemonName: {
		fontFamily: 'Avenir-Black',
		fontSize: 40,
		color: 'white',
		textTransform: 'capitalize',
	},
	PokemonNumber: {
		fontFamily: 'Avenir-Black',
		fontSize: 30,
		color: 'white',
	},
	TypesRowDetails: {
		flexDirection: 'row',
	},
	TypeContainer: {
		marginRight: 10,
		paddingHorizontal: 15,
		paddingVertical: 5,
		backgroundColor: 'rgba(250,250,250,0.3)',
		borderRadius: 13,
	},
	TypeName: {
		fontFamily: 'Avenir-Black',
		color: 'white',
		textTransform: 'capitalize',
	},
});
