import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import { COLORS } from '../constants/colors';
import { getMaterialCount } from '../database/database';

function Action({ title, desc, onPress }) {
  return <TouchableOpacity style={styles.action} onPress={onPress}><Text style={styles.actionTitle}>{title}</Text><Text style={styles.actionDesc}>{desc}</Text><Text style={styles.open}>Explore  ›</Text></TouchableOpacity>;
}

export default function HomeScreen({ navigate }) {
  const [count, setCount] = useState(0);
  useEffect(() => { getMaterialCount().then(setCount).catch(console.error); }, []);
  return (
    <ScrollView style={styles.page}>
      <AppHeader title="Learn Dielectrics" subtitle="Understand materials and their electrical properties." />
      <View style={styles.content}>
        <View style={styles.hero}><Text style={styles.heroEyebrow}>PHYSICS • DPH-101</Text><Text style={styles.heroTitle}>Explore the science of dielectric materials.</Text><Text style={styles.heroText}>Study permittivity, dielectric loss, polarization and real-world applications.</Text><View style={styles.count}><Text style={styles.countNumber}>{count}+</Text><Text style={styles.countLabel}>materials in offline library</Text></View></View>
        <Text style={styles.section}>LEARNING SPACE</Text>
        <Action title="Materials Library" desc="Browse material properties and applications." onPress={() => navigate('Materials')} />
        <Action title="Learn Dielectrics" desc="Study concepts, polarization and formulas." onPress={() => navigate('Learn')} />
        <Action title="Practice Quiz" desc="Test your understanding with offline MCQs." onPress={() => navigate('Quiz')} />
        <Action title="About DIEL_POS" desc="Project information and offline features." onPress={() => navigate('About')} />
        <Text style={styles.footer}>Designed as an offline Physics learning companion.</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page:{ flex:1, backgroundColor:COLORS.background },
  content:{ padding:16 },
  hero:{ backgroundColor:COLORS.navyLight, borderRadius:20, padding:20, marginBottom:22 },
  heroEyebrow:{ color:COLORS.cyan, fontWeight:'900', fontSize:11, letterSpacing:1.5 },
  heroTitle:{ color:'#FFFFFF', fontSize:24, fontWeight:'900', marginTop:12, lineHeight:30 },
  heroText:{ color:'#D5E3F5', lineHeight:21, marginTop:10 },
  count:{ flexDirection:'row', alignItems:'center', marginTop:20, backgroundColor:'#FFFFFF18', padding:12, borderRadius:12 },
  countNumber:{ color:COLORS.cyan, fontSize:26, fontWeight:'900', marginRight:12 },
  countLabel:{ color:'#FFFFFF', fontWeight:'700' },
  section:{ color:COLORS.muted, fontSize:11, fontWeight:'900', letterSpacing:1.4, marginBottom:10 },
  action:{ backgroundColor:'#FFFFFF', borderRadius:15, padding:16, marginBottom:11, borderWidth:1, borderColor:COLORS.border },
  actionTitle:{ color:COLORS.text, fontWeight:'800', fontSize:16 },
  actionDesc:{ color:COLORS.muted, marginTop:5, lineHeight:19 },
  open:{ color:COLORS.cyan, fontWeight:'800', marginTop:10 },
  footer:{ color:COLORS.muted, fontSize:12, textAlign:'center', marginVertical:15 }
});
