import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const NewsContainer = () => {
	const [Loading, setLoading] = useState(true);
	const [NewsData, setNewsData] = useState<AxiosResponse<any, any>>();

	const PullData = async () => {
		const Data = await axios.get(
			'https://newsapi.org/v2/everything?q=pokemon&apiKey=e0dfda639a5a4f9f95e246f7a789d9a6'
		);

		setNewsData(Data);
	};

	useEffect(() => {
		// PullData().then(() => setLoading(false));
	}, []);

	return (
		<View style={styles.HomepageNewsContainer}>
			<View style={styles.HomepageNewsHeaderContainer}>
				<Text style={styles.HomepageNewsHeader}>Pokemon News</Text>
				<Button title="View All" />
			</View>
			{Loading || !NewsData ? (
				<Text>Loading News...</Text>
			) : (
				<>
					{NewsData!.data.articles.slice(0, 5).map((NewsObject: any) => {
						// if (!NewsObject.urlToImage) return null;

						return (
							<View style={styles.NewsItemContainer}>
								<View style={styles.NewsItemTextContainer}>
									<Text style={styles.NewsItemTitle}>{NewsObject.title}</Text>
									<Text style={styles.NewsItemPublish}>
										{NewsObject.publishedAt}
									</Text>
								</View>
								<Image
									source={NewsObject.urlToImage}
									style={styles.NewsItemImage}
								/>
							</View>
						);
					})}
				</>
			)}
		</View>
	);
};

export default NewsContainer;

const styles = StyleSheet.create({
	HomepageNewsContainer: {
		padding: 15,
		backgroundColor: '#e9ecef',
		fontFamily: 'Avenir-Black',
	},
	HomepageNewsHeaderContainer: {
		flexDirection: 'row',
		paddingTop: 20,
		paddingBottom: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	HomepageNewsHeader: {
		fontFamily: 'Avenir-Black',
		fontSize: 20,
	},
	NewsItemContainer: {},
	NewsItemTextContainer: {},
	NewsItemTitle: {},
	NewsItemPublish: {},
	NewsItemImage: {
		height: 100,
		width: 100,
	},
});
