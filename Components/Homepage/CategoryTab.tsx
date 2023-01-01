import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';

type Props = {
	BackgroundColor: string;
	Title: string;
};

const CategoryTab = ({ BackgroundColor, Title }: Props) => {
	const navigation = useNavigation();

	const Styles = StyleSheet.create({
		ShadowBox: {
			justifyContent: 'center',
			shadowColor: '#171717',
			shadowOffset: { width: 2, height: 6 },
			shadowOpacity: 0.2,
			shadowRadius: 5,
			position: 'relative',
		},
		CategoryContainer: {
			backgroundColor: BackgroundColor,
			width: '100%',
			margin: 'auto',
			marginBottom: 20,
			borderRadius: 15,
			padding: 24,
			position: 'relative',
			overflow: 'hidden',
		},
		Text: {
			fontFamily: 'Avenir-Black',
			color: 'white',
			fontWeight: '900',
			fontSize: 17,
			opacity: 1,
		},
		image: {
			width: 85,
			height: 85,
			justifyContent: 'center',
			marginLeft: 'auto',
			marginRight: 'auto',
			opacity: 0.5,
			position: 'absolute',
			left: 115,
			transform: [{ rotate: '-40deg' }],
		},
	});

	const Image = {
		uri: 'https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-5.jpg',
	};

	return (
		<TouchableOpacity
			style={Styles.ShadowBox}
			onPress={() =>
				navigation.dispatch(
					CommonActions.navigate(Title.replace(/\s/g, '').toLowerCase())
				)
			}
		>
			<View style={Styles.CategoryContainer}>
				<ImageBackground
					source={Image}
					resizeMode="cover"
					style={Styles.image}
				></ImageBackground>
				<Text style={Styles.Text}>{Title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CategoryTab;
