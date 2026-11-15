import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { LESSONS, FORMULAS } from '../data/learningContent';
import { COLORS } from '../constants/colors';

export default function LearnScreen() {
  return (
    <ScrollView style={styles.page}>
      <AppHeader title="Learn Dielectrics" subtitle="Core concepts for DPH-101." />
      <View style={styles.content}>
        {LESSONS.map((lesson, i) => <View key={lesson.title} style={styles.card}><Text style={styles.title}>{lesson.title}</Text><Text style={styles.body}>{lesson.body}</Text></View>)}
        <Text style={styles.heading}>IMPORTANT FORMULAS</Text>
        {FORMULAS.map(f => <View key={f.label} style={styles.formula}><Text style={styles.title}>{f.label}</Text><Text style={styles.equation}>{f.formula}</Text><Text style={styles.body}>{f.note}</Text></View>)}
        <Text style={styles.disclaimer}>Study note: these explanations are introductory. Refer to your course material for the exact convention and syllabus depth.</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page:{ flex:1, backgroundColor:COLORS.background },
  content:{ padding:15 },
  card:{ backgroundColor:'#FFFFFF', padding:16, borderRadius:15, marginBottom:11, borderWidth:1, borderColor:COLORS.border },
  title:{ color:COLORS.text, fontWeight:'800', fontSize:16, marginBottom:8 },
  body:{ color:COLORS.muted, lineHeight:22 },
  heading:{ color:COLORS.muted, fontWeight:'900', fontSize:12, letterSpacing:1.2, marginTop:14, marginBottom:10 },
  formula:{ backgroundColor:COLORS.cyanSoft, padding:16, borderRadius:15, marginBottom:10 },
  equation:{ color:COLORS.navy, fontSize:22, fontWeight:'900', marginVertical:7 },
  disclaimer:{ color:COLORS.muted, fontSize:12, lineHeight:18, marginVertical:10 }
});
