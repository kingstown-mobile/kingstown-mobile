import React from "react";
import { View, Text } from "react-native";
import styles from './style'

export default function Turmas() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Minhas Turmas</Text>
      </View>
    </View>
  );
}