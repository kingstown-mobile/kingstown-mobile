import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './style'
import Line from '../horizontalLine'


export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Configurações</Text>
      </View>
      <TouchableOpacity>
          <Text style={styles.subTitleNot}>Notificações</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity>
        <Text style={styles.subTitleNot}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}