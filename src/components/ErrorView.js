import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
export default function ErrorView({ message }) {
  return <View style={styles.box}><Text style={styles.title}>Something went wrong</Text><Text style={styles.message}>{message}</Text></View>;
}
const styles = StyleSheet.create({
  box:{ padding:20, backgroundColor:'#FFF0EF', borderRadius:14, margin:16 },
  title:{ color:COLORS.danger, fontSize:17, fontWeight:'800', marginBottom:6 },
  message:{ color:COLORS.text, lineHeight:21 }
});
