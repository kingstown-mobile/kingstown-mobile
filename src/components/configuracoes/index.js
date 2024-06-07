import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './style'

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Configurações</Text>
      </View>
      <TouchableOpacity>
          <Text style={styles.subTitleNot}>Notificações</Text>
          <Text style={styles.subtitulos}>Controle de Notificações do App</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity>
        <Text style={styles.subTitleNot}>Sobre</Text>
        <Text style={styles.subtitulos}>Versão 1.0 - Kingstown Sala de Aula</Text>
      </TouchableOpacity>
    </View>
  );
}