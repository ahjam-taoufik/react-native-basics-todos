import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>my Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
     header:{
         height: 80,
         paddingTop:40,
         backgroundColor:'coral'
     },
     title:{
         textAlign:'center',
         fontSize:30,
         fontWeight:"bold",
         color: '#fff'
     }
});
