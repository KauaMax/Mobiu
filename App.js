import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cargos do Ti</Text>
    
    <ScrollView>
      <Text style={styles.subtitulo}>Programador Junior</Text>

      <Text style={styles.txt}>O programador júnior está no início da sua carreira, com menos de 2 anos de experiência. 
        Ele tem um conhecimento básico das ferramentas e tecnologias, mas ainda precisa de orientação para resolver 
        problemas mais complexos. Suas responsabilidades incluem tarefas mais simples e trabalhar em equipe para 
        aprender as melhores práticas de desenvolvimento.</Text>

        <Image style={styles.junior} source={require('./image/junior.webp')}></Image>
        
      <Text style={styles.subtitulo}>Programador Pleno</Text>

      <Text style={styles.txt}>O programador pleno possui de 2 a 5 anos de experiência e já tem uma boa compreensão técnica. 
        Ele consegue trabalhar de forma mais autônoma e participar de decisões mais complexas no desenvolvimento 
        de sistemas. Suas responsabilidades envolvem a criação de funcionalidades, análise de problemas mais 
        desafiadores e até mesmo orientação de programadores juniores.</Text>
      
        <Image style={styles.pleno} source={require('./image/pleno.webp')}></Image>

      <Text style={styles.subtitulo}>Programador Sênior</Text>

      <Text style={styles.txt}>
      Com mais de 5 anos de experiência, o programador sênior tem domínio profundo de várias tecnologias e um forte conhecimento de boas práticas de desenvolvimento. Ele lidera projetos, toma decisões importantes sobre a arquitetura do sistema e pode atuar como mentor para desenvolvedores mais novos. Sua expertise permite que ele resolva problemas complexos e proponha soluções inovadoras.
      </Text>
      
        <Image style={styles.senior} source={require('./image/senior.jpg')} ></Image>

      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15
  },

  titulo: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  subtitulo: {
    marginTop: 20,
    fontSize: 20,
  },

  txt: {
    marginTop: 10,
    marginBottom: 10,
  },

  senior: {
    width: 'auto',
    height: 350,
  },
  pleno: {
    width: 'auto',
    height: 200,
  },
  junior: {
    width: 'auto',
    height: 200,
  },

});
