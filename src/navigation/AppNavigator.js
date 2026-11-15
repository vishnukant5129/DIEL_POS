import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MaterialBrowser from '../screens/MaterialBrowser';
import MaterialDetailsScreen from '../screens/MaterialDetailsScreen';
import LearnScreen from '../screens/LearnScreen';
import QuizScreen from '../screens/QuizScreen';
import AboutScreen from '../screens/AboutScreen';
import { COLORS } from '../constants/colors';

const TABS = [
  { key:'Home', label:'Home', icon:'⌂' },
  { key:'Materials', label:'Materials', icon:'▦' },
  { key:'Learn', label:'Learn', icon:'▤' },
  { key:'Quiz', label:'Quiz', icon:'✓' },
  { key:'About', label:'About', icon:'ⓘ' }
];

export default function AppNavigator() {
  const [tab, setTab] = useState('Home');
  const [selected, setSelected] = useState(null);
  const navigate = (next) => { setSelected(null); setTab(next); };

  let screen;
  if (selected) screen = <MaterialDetailsScreen item={selected} onBack={() => setSelected(null)} />;
  else if (tab === 'Home') screen = <HomeScreen navigate={navigate} />;
  else if (tab === 'Materials') screen = <MaterialBrowser onSelect={setSelected} />;
  else if (tab === 'Learn') screen = <LearnScreen />;
  else if (tab === 'Quiz') screen = <QuizScreen />;
  else screen = <AboutScreen />;

  return (
    <View style={styles.container}>
      <View style={styles.body}>{screen}</View>
      {!selected && <View style={styles.tabBar}>{TABS.map(t => {
        const active = tab === t.key;
        return <TouchableOpacity key={t.key} style={styles.tab} onPress={() => navigate(t.key)}>
          <Text style={[styles.icon, active && styles.active]}>{t.icon}</Text>
          <Text style={[styles.label, active && styles.active]}>{t.label}</Text>
        </TouchableOpacity>;
      })}</View>}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  body:{ flex:1 },
  tabBar:{ flexDirection:'row', backgroundColor:'#FFFFFF', borderTopWidth:1, borderTopColor:COLORS.border, paddingTop:8, paddingBottom:7 },
  tab:{ flex:1, alignItems:'center', justifyContent:'center' },
  icon:{ color:COLORS.muted, fontSize:19, fontWeight:'800' },
  label:{ color:COLORS.muted, fontSize:10, marginTop:3, fontWeight:'700' },
  active:{ color:COLORS.cyan }
});
