import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Tab, TabView } from '@rneui/themed';
import { borderBottomColor } from '@mui/system';

type Props = {
	Pokemon: any;
};

const DetailsBottomSection = ({ Pokemon }: Props) => {
	const [index, setIndex] = React.useState(0);

	return (
		<View style={styles.BottomSectionContainer}>
			<Image
				source={{ uri: Pokemon.sprites.front_default }}
				style={styles.Image}
			/>

			<Tab
				dense
				value={index}
				onChange={(e) => setIndex(e)}
				buttonStyle={{
					backgroundColor: 'white',
					width: '100%',
					paddingBottom: 20,
				}}
				disableIndicator
			>
				<Tab.Item
					title="About"
					titleStyle={(active) => ({
						fontFamily: 'Avenir-Black',
						fontSize: 16,
						color: active ? 'black' : 'lightgray',
					})}
					containerStyle={(active) =>
						active
							? {
									borderBottomColor: 'lightblue',
									borderBottomWidth: 4,
							  }
							: null
					}
				/>
				<Tab.Item
					title="Base Stats"
					titleStyle={(active) => ({
						fontFamily: 'Avenir-Black',
						fontSize: 16,
						color: active ? 'black' : 'lightgray',
					})}
					containerStyle={(active) =>
						active
							? {
									borderBottomColor: 'lightblue',
									borderBottomWidth: 4,
							  }
							: null
					}
				/>
				<Tab.Item
					title="Evolution"
					titleStyle={(active) => ({
						fontFamily: 'Avenir-Black',
						fontSize: 16,
						color: active ? 'black' : 'lightgray',
					})}
					containerStyle={(active) =>
						active
							? {
									borderBottomColor: 'lightblue',
									borderBottomWidth: 4,
							  }
							: null
					}
				/>
				<Tab.Item
					title="Moves"
					titleStyle={(active) => ({
						fontFamily: 'Avenir-Black',
						fontSize: 16,
						color: active ? 'black' : 'lightgray',
					})}
					containerStyle={(active) =>
						active
							? {
									borderBottomColor: 'lightblue',
									borderBottomWidth: 4,
							  }
							: null
					}
				/>
			</Tab>

			<TabView value={index} onChange={setIndex}>
				<TabView.Item>
					<Text>Recent</Text>
				</TabView.Item>
				<TabView.Item>
					<Text>Favorite</Text>
				</TabView.Item>
				<TabView.Item>
					<Text>Cart</Text>
				</TabView.Item>
				<TabView.Item>
					<Text>Cart</Text>
				</TabView.Item>
			</TabView>
		</View>
	);
};

export default DetailsBottomSection;

const styles = StyleSheet.create({
	BottomSectionContainer: {
		top: -50,
		width: '100%',
		zIndex: 2,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingTop: 45,
		backgroundColor: 'white',
	},
	Image: {
		position: 'absolute',
		zIndex: 5,
		height: 300,
		width: 300,
		top: -250,
		alignSelf: 'center',
		marginBottom: 0,
		opacity: 1,
	},
});
