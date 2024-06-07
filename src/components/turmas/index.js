import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './style'

export default function Turmas() {

  return (
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Minhas Turmas</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.turma}>
          <View style={styles.div1}>
            <Text style={styles.contentTurma}>Inglês - Iniciante</Text>
          </View>
          <View style={styles.div2}>
            <Image
              source={require('../img-kingstown/logo_transparente_png.png')}
              style={styles.img}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}