import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function InfoCard({ label, value }) {
  return <View style={styles.card}><Text style={styles.label}>{label}</Text><Text style={styles.value}>{value}</Text></View>;
}
const styles = StyleSheet.create({
  card:{ backgroundColor:'#FFFFFF', borderRadius:14, padding:15, marginBottom:10, borderWidth:1, borderColor:COLORS.border },
  label:{ color:COLORS.muted, fontSize:12, fontWeight:'700', marginBottom:6 },
  value:{ color:COLORS.text, fontSize:15, fontWeight:'700', lineHeight:22 }
});
