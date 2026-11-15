import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function AppHeader({ title, subtitle }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.brand}>DIEL_POS</Text>
      <Text style={styles.title}>{title}</Text>
      {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  wrap:{ backgroundColor:COLORS.navy, paddingHorizontal:20, paddingTop:18, paddingBottom:22, borderBottomLeftRadius:22, borderBottomRightRadius:22 },
  brand:{ color:COLORS.cyan, fontSize:12, fontWeight:'900', letterSpacing:2, marginBottom:8 },
  title:{ color:'#FFFFFF', fontSize:24, fontWeight:'800' },
  subtitle:{ color:'#D5E3F5', fontSize:13, marginTop:5 }
});
