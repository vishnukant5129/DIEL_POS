import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function PrimaryButton({ title, onPress, secondary = false }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.82} style={[styles.button, secondary && styles.secondary]}>
      <Text style={[styles.text, secondary && styles.secondaryText]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button:{ backgroundColor:COLORS.cyan, paddingVertical:14, paddingHorizontal:18, borderRadius:13, alignItems:'center', marginVertical:5 },
  secondary:{ backgroundColor:COLORS.cyanSoft, borderWidth:1, borderColor:'#B9EAF3' },
  text:{ color:COLORS.navy, fontSize:15, fontWeight:'800' },
  secondaryText:{ color:COLORS.navy }
});
