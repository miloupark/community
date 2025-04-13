import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { colors } from "@/constants";

interface inputFieldProps extends TextInputProps {
  label?: string;
  variant?: "filled" | "standard" | "outlined";
}

function inputField({ label, variant = "filled", ...props }: inputFieldProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, styles[variant]]}>
        <TextInput
          placeholderTextColor={colors.GRAY_500}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    // alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: colors.GRAY_700,
    marginBottom: 5,
  },
  filled: {
    backgroundColor: colors.GRAY_100,
  },
  standard: {},
  outlined: {},
  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
});

export default inputField;
