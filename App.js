import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { initDatabase } from './src/database/database';
import AppNavigator from './src/navigation/AppNavigator';
import { COLORS } from './src/constants/colors';

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    initDatabase()
      .then(() => { if (active) setReady(true); })
      .catch((e) => { console.error(e); if (active) setError(e?.message || 'Database initialization failed.'); });
    return () => { active = false; };
  }, []);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Unable to start DIEL_POS</Text>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.hint}>Close the app and restart it. If this continues, check the database files.</Text>
      </View>
    );
  }

  if (!ready) {
    return (
      <View style={styles.center}>
        <Text style={styles.logo}>DIEL_POS</Text>
        <ActivityIndicator size="large" color={COLORS.cyan} />
        <Text style={styles.loading}>Preparing offline learning database...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, backgroundColor: COLORS.navy, alignItems: 'center', justifyContent: 'center', padding: 24 },
  logo: { color: '#FFFFFF', fontSize: 30, fontWeight: '900', marginBottom: 24, letterSpacing: 1 },
  loading: { color: '#DCE8F8', marginTop: 14, textAlign: 'center' },
  errorTitle: { color: '#FFFFFF', fontSize: 21, fontWeight: '800', marginBottom: 12 },
  errorText: { color: '#FFD5D5', textAlign: 'center' },
  hint: { color: '#DCE8F8', marginTop: 14, textAlign: 'center', lineHeight: 21 }
});
