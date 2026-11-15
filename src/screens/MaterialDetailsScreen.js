import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import InfoCard from '../components/InfoCard';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../constants/colors';

export default function MaterialDetailsScreen({ item, onBack }) {
  if (!item) return null;
  const apps = (item.applications || '').split('|').filter(Boolean).join(' • ');
  return (
    <ScrollView style={styles.page}>
      <AppHeader title={item.name} subtitle={item.category} />
      <Text style={styles.note}>Values shown are typical indicative values. Actual properties depend on material grade and test conditions.</Text>
      <InfoCard label="RELATIVE DIELECTRIC CONSTANT (εr)" value={item.eps_r_text} />
      <InfoCard label="DIELECTRIC LOSS (tan δ)" value={item.tan_delta_text} />
      <InfoCard label="MEASUREMENT / OPERATING FREQUENCY" value={item.frequency} />
      <InfoCard label="MEASUREMENT CONDITIONS" value={item.conditions} />
      <InfoCard label="DESCRIPTION" value={item.description} />
      <InfoCard label="APPLICATIONS" value={apps} />
      <InfoCard label="REFERENCE" value={item.reference} />
      <PrimaryButton title="Back to materials" onPress={onBack} secondary />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page:{ flex:1, backgroundColor:COLORS.background, paddingBottom:20 },
  note:{ color:COLORS.warning, backgroundColor:'#FFF5E5', margin:15, padding:12, borderRadius:12, lineHeight:19, fontSize:12 }
});
