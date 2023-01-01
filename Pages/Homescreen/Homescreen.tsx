import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import TopContainer from '../../Components/Homepage/TopContainer';
import NewsContainer from '../../Components/Homepage/NewsContainer';

const Homescreen = ({ navigation }: any) => {
	return (
		<ScrollView>
			<TopContainer />
			<NewsContainer />
		</ScrollView>
	);
};

const styles = StyleSheet.create({});

export default Homescreen;
