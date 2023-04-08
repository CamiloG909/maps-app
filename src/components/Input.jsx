import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import theme from "../theme";

const Input = ({ title, ...props }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>{title}</Text>
			<TextInput style={styles.input} {...props} />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		height: 40,
	},
	title: {
		fontWeight: "600",
		fontSize: 18,
		color: theme.colors.white,
	},
	input: {
		height: 45,
		marginTop: 10,
		paddingHorizontal: 10,
		fontWeight: "300",
		fontSize: 18,
		color: theme.colors.white,
		borderRadius: 10,
		borderColor: theme.colors.borders,
		borderWidth: 1,
	},
});

export default Input;
