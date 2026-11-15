import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import AppHeader from '../components/AppHeader';
import MaterialCard from '../components/MaterialCard';
import { getMaterials } from '../database/database';
import { CATEGORIES } from '../constants/appConfig';
import { COLORS } from '../constants/colors';

export default function MaterialBrowser({ onSelect }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let live = true;
    setLoading(true);
    getMaterials({ search, category }).then(data => { if (live) setItems(data); }).catch(console.error).finally(() => { if (live) setLoading(false); });
    return () => { live = false; };
  }, [search, category]);
  return (
    <View style={styles.page}>
      <AppHeader title="Materials Library" subtitle="Browse dielectric properties and applications." />
      <TextInput value={search} onChangeText={setSearch} placeholder="Search material or category..." placeholderTextColor="#8190A5" style={styles.search} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters} contentContainerStyle={{paddingHorizontal:14}}>
        {CATEGORIES.map(c => <TouchableOpacity key={c} onPress={() => setCategory(c)} style={[styles.chip, category===c && styles.activeChip]}><Text style={[styles.chipText, category===c && styles.activeChipText]}>{c}</Text></TouchableOpacity>)}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.list}>
        <Text style={styles.result}>{items.length} materials found</Text>
        {loading ? <ActivityIndicator color={COLORS.cyan} size="large" /> : items.length ? items.map(item => <MaterialCard key={item.id} item={item} onPress={() => onSelect(item)} />) : <Text style={styles.empty}>No matching material found.</Text>}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  page:{ flex:1, backgroundColor:COLORS.background },
  search:{ backgroundColor:'#FFFFFF', marginHorizontal:15, marginTop:14, borderRadius:12, paddingHorizontal:15, paddingVertical:13, borderWidth:1, borderColor:COLORS.border, color:COLORS.text },
  filters:{ maxHeight:52, marginTop:10 },
  chip:{ paddingHorizontal:14, paddingVertical:9, borderRadius:22, backgroundColor:'#FFFFFF', marginRight:8, borderWidth:1, borderColor:COLORS.border },
  activeChip:{ backgroundColor:COLORS.navy, borderColor:COLORS.navy },
  chipText:{ color:COLORS.muted, fontWeight:'700', fontSize:12 },
  activeChipText:{ color:'#FFFFFF' },
  list:{ padding:15, paddingBottom:35 },
  result:{ color:COLORS.muted, fontSize:12, fontWeight:'700', marginBottom:10 },
  empty:{ textAlign:'center', color:COLORS.muted, marginTop:30 }
});
