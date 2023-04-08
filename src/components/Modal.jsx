import { Modal, StyleSheet, View } from "react-native";
import theme from "../theme";

const ModalView = ({ visible, children }) => {
	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View style={styles.center}>
				<View style={styles.modalView}>{children}</View>
			</View>
		</Modal>
	);
};

export default ModalView;

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		width: 300,
		minHeight: 170,
		backgroundColor: theme.colors.darkGray,
		borderRadius: 10,
		padding: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
	},
});
