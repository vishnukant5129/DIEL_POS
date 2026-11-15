import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { COLORS } from '../constants/colors';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.page}>
      <AppHeader title="About DIEL_POS" subtitle="Physics learning application • DPH-101" />
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Project objective</Text>
          <Text style={styles.body}>DIEL_POS is an educational Android application designed to help students explore dielectric materials and learn about their electrical properties, polarization, permittivity and dielectric loss.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Technology used</Text>
          <Text style={styles.body}>React Native and Expo are used for the mobile interface. Expo SQLite stores the dielectric material database locally on the device.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Offline operation</Text>
          <Text style={styles.body}>Material records, learning content and quiz questions are bundled with the app. The database is initialized locally on first launch. No remote API is required for these features.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Scientific note</Text>
          <Text style={styles.body}>Dielectric constant and loss depend on frequency, temperature, composition, grade and test conditions. Values in the library are indicative and should be checked against the cited technical source before formal use.</Text>
        </View>
        <Text style={styles.footer}>DIEL_POS • Learn offline, learn anywhere.</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page:{ flex:1, backgroundColor:COLORS.background },
  content:{ padding:15 },
  card:{ backgroundColor:'#FFFFFF', padding:17, borderRadius:15, marginBottom:12, borderWidth:1, borderColor:COLORS.border },
  title:{ color:COLORS.text, fontSize:16, fontWeight:'800', marginBottom:8 },
  body:{ color:COLORS.muted, lineHeight:22 },
  footer:{ textAlign:'center', color:COLORS.cyan, fontWeight:'800', marginVertical:15 }
});
