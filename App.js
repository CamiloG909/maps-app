import { FlatList, StyleSheet, Text, View } from "react-native";
import {
	StatusBarCustom,
	Panel,
	ModalView,
	Map,
	Input,
} from "./src/components/index";
import theme from "./src/theme";
import { Fragment, useState } from "react";
import { Marker } from "react-native-maps";
import { Button } from "react-native";

export default function App() {
	const [points, setPoints] = useState([]);
	const [pointsBackup, setPointsBackup] = useState([]);
	const [pointTemp, setPointTemp] = useState({
		coordinate: null,
		title: null,
	});
	const [contentModal, setContentModal] = useState({
		content: null,
		show: false,
	});

	const handleLongPress = ({ nativeEvent }) => {
		setContentModal({ content: "new-point", show: true });
		setPointTemp({
			...pointTemp,
			coordinate: nativeEvent.coordinate,
		});
	};

	const handleChangeText = (value) => {
		setPointTemp({
			...pointTemp,
			title: value,
		});
	};

	const handleSavePoint = () => {
		setPoints([
			...points,
			{
				coordinate: pointTemp.coordinate,
				title: pointTemp.title,
			},
		]);
		setPointsBackup([
			...points,
			{
				coordinate: pointTemp.coordinate,
				title: pointTemp.title,
			},
		]);
		setPointTemp({});
		setContentModal({ content: null, show: false });
	};

	return (
		<View style={styles.container}>
			<StatusBarCustom />
			<ModalView visible={contentModal.show}>
				{contentModal.content === "new-point" && (
					<Fragment>
						<Input
							title="Title point"
							placeholder="Your title"
							placeholderTextColor="#9199a1"
							onChangeText={handleChangeText}
						/>
						<View style={styles.modalBtns}>
							<Button
								title="Cancel"
								onPress={() => setContentModal({ content: null, show: false })}
							/>
							<Button title="Save" onPress={handleSavePoint} />
						</View>
					</Fragment>
				)}
				{contentModal.content === "list" && (
					<Fragment>
						<FlatList
							data={pointsBackup}
							renderItem={({ item }) => (
								<View style={styles.item}>
									<Text style={styles.itemText}>{item.title}</Text>
								</View>
							)}
							keyExtractor={({ title }) => title}
						/>
						<Button
							title="Close"
							onPress={() => setContentModal({ content: null, show: false })}
						/>
					</Fragment>
				)}
			</ModalView>
			<Map onLongPress={handleLongPress}>
				{points.length > 0 &&
					points.map((point, index) => (
						<Marker
							key={index}
							coordinate={point.coordinate}
							title={point.title}
						/>
					))}
			</Map>
			<Panel
				contentModal={contentModal}
				setContentModal={setContentModal}
				points={points}
				setPoints={setPoints}
				pointsBackup={pointsBackup}
				setPointsBackup={setPointsBackup}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.customBlack,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	modalBtns: {
		flex: 1,
		flexDirection: "row",
		marginTop: 40,
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		overflow: "hidden",
	},
	item: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: theme.colors.borders,
	},
	itemText: {
		fontWeight: 500,
		fontSize: 18,
		color: theme.colors.white,
	},
});
