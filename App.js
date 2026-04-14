import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState(undefined);

  function validar() {
    const apenasLetras = /^[a-zA-Z]+$/;

    if (!apenasLetras.test(nome)) {
      setErro('Nome deve possuir apenas letras');
      return;
    }

    if (nome.length < 3) {
      setErro('Nome deve possuir pelo menos 3 letras');
      return;
    }

    setErro(undefined);
    alert('Produto gravado com sucesso!');
  }

  return (
    <View style={styles.cont}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Novo produto</Text>
      <Text style={styles.subtitulo}>Preencha os dados do inventário</Text>

      <View style={styles.campo}>
        <Text style={styles.titulo_prod}>Nome do produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do produto"
          placeholderTextColor="#777"
          value={nome}
          onChangeText={setNome}
        />

        {/* Exibição do erro */}
        {erro && <Text style={styles.erro}>{erro}</Text>}
      </View>

      <View style={styles.linha}>
        <View style={styles.campoMetade}>
          <Text style={styles.titulo_prod}>Preço</Text>
          <TextInput
            style={styles.input}
            placeholder="R$ 0,00"
            placeholderTextColor="#777"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.campoMetade}>
          <Text style={styles.titulo_prod}>Estoque</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor="#777"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.campo}></View>
      
      <View style={styles.campo}>
        <Text style={styles.titulo_prod}>Código identificador</Text>
        <TextInput
          style={styles.input}
          placeholder="ABC1234"
          placeholderTextColor="#777"
        />
      </View>

      <View style={styles.butao}>
        <Button title="Gravar produto" color="blue" onPress={validar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 25,
    color: '#808080',
    textAlign: 'center',
  },

  campo: {
    width: '100%',
    marginBottom: 15,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  campoMetade: {
    flex: 1,
  },

  titulo_prod: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },

  butao: {
    marginTop: 20,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#6ed3ff',
    borderRadius: 10,
    backgroundColor: '#f4f6f8',
    paddingHorizontal: 15,
    fontSize: 16,
  },

  erro: {
    color: 'red',
    marginTop: 5,
  },
});
