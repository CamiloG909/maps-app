import React, { Fragment, useState } from "react";
import {
	StyleSheet,
	View,
	Dimensions,
	TouchableHighlight,
	Text,
	Alert,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../theme";

const Panel = ({
	setContentModal,
	points,
	setPoints,
	pointsBackup,
	setPointsBackup,
}) => {
	const [showPoints, setShowPoints] = useState(true);

	const handleShowPoints = () => {
		setShowPoints(!showPoints);

		if (showPoints) {
			setPointsBackup(points);
			setPoints([]);
		}
		if (!showPoints) {
			setPoints(pointsBackup);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.button}
				underlayColor="#ffffff25"
				onPress={() => setContentModal({ content: "list", show: true })}
			>
				<Fragment>
					<Entypo name="list" size={30} color={theme.colors.green} />
					<Text style={styles.text}>LIST</Text>
				</Fragment>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.button}
				underlayColor="#ffffff25"
				onPress={handleShowPoints}
			>
				<Fragment>
					<Entypo name="eye" size={30} color={theme.colors.green} />
					<Text style={styles.text}>SHOW/HIDE</Text>
				</Fragment>
			</TouchableHighlight>
		</View>
	);
};

export default Panel;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		height: 100,
		width: Dimensions.get("window").width,
	},
	button: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		width: "50%",
		color: theme.colors.green,
	},
	text: {
		fontWeight: "500",
		fontSize: 20,
		textAlign: "center",
		color: theme.colors.green,
	},
});
