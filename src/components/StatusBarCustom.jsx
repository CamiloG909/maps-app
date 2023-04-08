import { StatusBar } from "react-native";
import React from "react";
import theme from "../theme";

const StatusBarCustom = () => {
	return <StatusBar backgroundColor={theme.colors.customBlack} style="light" />;
};

export default StatusBarCustom;
