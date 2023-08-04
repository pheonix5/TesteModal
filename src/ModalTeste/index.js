import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function ModalTeste({ closeModal }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.botaoFora} onPress={closeModal}>


        <View style={styles.content}>
          <Text>Teste Modal</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar Modal</Text>
          </TouchableOpacity>
        </View>
        
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff3d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#FFF',
  },
  botaoFora: {
    flex: 1
  }
})