import axios from "axios";
import { Platform } from "react-native";

const baseURLs = {
  android: "http://10.0.2.2:3030",
  ios: "http://localhost:3030",
};

const axiosInstance = axios.create({
  baseURL: Platform.OS === "ios" ? baseURLs.ios : baseURLs.android,
});

export default axiosInstance;
