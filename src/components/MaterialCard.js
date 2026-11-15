import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function MaterialCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.arrow}>›</Text>
      </View>
      <Text style={styles.category}>{item.category}</Text>
      <View style={styles.row}>
        <Text style={styles.metric}>εr  <Text style={styles.value}>{item.eps_r_text}</Text></Text>
        <Text style={styles.metric}>tan δ  <Text style={styles.value}>{item.tan_delta_text}</Text></Text>
      </View>
      <Text style={styles.frequency}>Frequency: {item.frequency}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card:{ backgroundColor:'#FFFFFF', padding:16, borderRadius:16, marginBottom:12, borderWidth:1, borderColor:COLORS.border },
  top:{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
  name:{ color:COLORS.text, fontSize:16, fontWeight:'800', flex:1, paddingRight:8 },
  arrow:{ color:COLORS.cyan, fontSize:27, fontWeight:'700' },
  category:{ color:COLORS.cyan, fontWeight:'700', marginTop:5, marginBottom:12 },
  row:{ flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between' },
  metric:{ color:COLORS.muted, fontSize:12, marginBottom:6 },
  value:{ color:COLORS.text, fontWeight:'700' },
  frequency:{ color:COLORS.muted, fontSize:12, marginTop:4 }
});
