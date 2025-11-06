import { Sparkles } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';

interface FunFactCardProps {
  facts: string;
}

export function FunFactCard({ facts }: FunFactCardProps) {
  if (!facts) return null; // prevent empty rendering

  return (
    <Card style={{ margin: 12, marginTop: -6, padding: 12, backgroundColor: '#fff7ed' }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
        <View style={{ backgroundColor: '#f59e0b', borderRadius: 100, padding: 6 }}>
          <Sparkles size={20} color="white" />
        </View>
        <View>
          <Text style={{ color: '#78350f', fontWeight: 'bold', marginBottom: 4 }}>
            Fun Fact of the Day
          </Text>
          <Text style={{ color: '#92400e' }}>{facts}</Text>
        </View>
      </View>
    </Card>
  );
}
