import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './style'
import Modal from '../modal-confirmacao'

export default function Perfil() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    // Lógica para a ação de confirmação
    setModalVisible(false);
    console.log('Sessão encerrada!')
    navigation.replace('Login')
  };

  const handleCancel = () => {
    // Lógica para a ação de cancelamento
    setModalVisible(false);
    console.log('Ação cancelada')
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Meu Perfil</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.content}>Meus dados</Text>
        <Text style={styles.subtitulo}>Verificar os meus dados</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text 
          style={styles.content}
          onPress={() => setModalVisible(true)}
        >
          Encerrar Sessão
        </Text>
        <Text style={styles.subtitulo}>Encerrar sessão ou entrar com outra conta</Text>
        <Modal
        visible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message="Tem certeza que deseja sair?"
      />
      </TouchableOpacity>
    </View>
  );
}