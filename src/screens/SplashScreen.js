import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
export default function SplashScreen() {
  return <View style={styles.wrap}><Text style={styles.logo}>DIEL_POS</Text><Text style={styles.tag}>DIELECTRIC MATERIALS LEARNING APP</Text></View>;
}
const styles = StyleSheet.create({
  wrap:{ flex:1, backgroundColor:COLORS.navy, alignItems:'center', justifyContent:'center' },
  logo:{ color:'#FFFFFF', fontSize:34, fontWeight:'900', letterSpacing:2 },
  tag:{ color:COLORS.cyan, fontSize:10, fontWeight:'800', letterSpacing:1.5, marginTop:12 }
});
