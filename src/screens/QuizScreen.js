import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import PrimaryButton from '../components/PrimaryButton';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { COLORS } from '../constants/colors';

export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const current = QUIZ_QUESTIONS[index];
  const score = QUIZ_QUESTIONS.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0);
  const choose = (option) => setAnswers(prev => ({ ...prev, [index]: option }));
  const restart = () => { setIndex(0); setAnswers({}); setFinished(false); };

  return (
    <ScrollView style={styles.page}>
      <AppHeader title="Offline Quiz" subtitle="Check your understanding of dielectric materials." />
      <View style={styles.content}>
        {finished ? (
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Quiz completed!</Text>
            <Text style={styles.score}>{score} / {QUIZ_QUESTIONS.length}</Text>
            <Text style={styles.body}>Your score is {Math.round(score / QUIZ_QUESTIONS.length * 100)}%.</Text>
            <PrimaryButton title="Try again" onPress={restart} />
          </View>
        ) : (
          <>
            <Text style={styles.progress}>QUESTION {index + 1} OF {QUIZ_QUESTIONS.length}</Text>
            <View style={styles.card}>
              <Text style={styles.question}>{current.q}</Text>
              {current.options.map((option, i) => {
                const selected = answers[index] === i;
                const answered = answers[index] !== undefined;
                const correct = i === current.answer;
                return <TouchableOpacity key={option} disabled={answered} onPress={() => choose(i)} style={[styles.option, selected && styles.selected, answered && correct && styles.correct, answered && selected && !correct && styles.wrong]}>
                  <Text style={[styles.optionText, (selected || (answered && correct)) && styles.optionTextActive]}>{String.fromCharCode(65+i)}. {option}</Text>
                </TouchableOpacity>;
              })}
              {answers[index] !== undefined && <View style={styles.explain}><Text style={styles.explainText}>{current.explanation}</Text></View>}
            </View>
            <Text style={styles.counter}>{Object.keys(answers).length} answered</Text>
            {answers[index] !== undefined && <PrimaryButton title={index === QUIZ_QUESTIONS.length - 1 ? 'See result' : 'Next question'} onPress={() => index === QUIZ_QUESTIONS.length - 1 ? setFinished(true) : setIndex(index + 1)} />}
          </>
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page:{ flex:1, backgroundColor:COLORS.background },
  content:{ padding:16 },
  progress:{ color:COLORS.cyan, fontWeight:'900', fontSize:12, letterSpacing:1, marginBottom:12 },
  card:{ backgroundColor:'#FFFFFF', padding:17, borderRadius:16, borderWidth:1, borderColor:COLORS.border },
  question:{ color:COLORS.text, fontSize:18, fontWeight:'800', lineHeight:26, marginBottom:15 },
  option:{ borderWidth:1, borderColor:COLORS.border, borderRadius:11, padding:13, marginBottom:9 },
  selected:{ borderColor:COLORS.cyan, backgroundColor:COLORS.cyanSoft },
  correct:{ borderColor:COLORS.success, backgroundColor:'#E8F7F0' },
  wrong:{ borderColor:COLORS.danger, backgroundColor:'#FDEDEC' },
  optionText:{ color:COLORS.text, lineHeight:20 },
  optionTextActive:{ fontWeight:'800' },
  explain:{ backgroundColor:COLORS.cyanSoft, padding:12, borderRadius:10, marginTop:5 },
  explainText:{ color:COLORS.navy, lineHeight:20 },
  counter:{ color:COLORS.muted, fontSize:12, marginVertical:12 },
  result:{ backgroundColor:'#FFFFFF', padding:24, borderRadius:18, alignItems:'center' },
  resultTitle:{ color:COLORS.text, fontSize:22, fontWeight:'900' },
  score:{ color:COLORS.cyan, fontSize:42, fontWeight:'900', marginVertical:12 },
  body:{ color:COLORS.muted, marginBottom:15 }
});
