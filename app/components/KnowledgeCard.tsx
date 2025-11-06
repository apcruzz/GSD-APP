import React, { useState } from "react";
import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from "react-native";
import Markdown from 'react-native-markdown-display';
import { islands } from "../data/islands";

// Enable animation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
    textAlign: "center",
  },
  sectionText: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 20,
    marginTop: 8,
  },
  toggleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrow: {
    fontSize: 18,
    color: "#2563eb",
  },
});


const MARKDOWN_STYLES = {
  body: { fontSize: 16, color: '#4b5563' },
  u: { textDecorationLine: 'underline', textDecorationColor: '#0ea5e9' },
  strong: { fontWeight: 'bold', color: '#1f2937' },
  heading2: { fontSize: 20, fontWeight: 'bold', color: '#0ea5e9', textDecorationLine: 'underline' },
} as const; // Or as { [key: string]: TextStyle }


function KnowledgeCard({ islandId }: { islandId: string }) {
  const island = islands.find((i) => i.id === islandId);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!island) return null;

  const toggleSection = (key: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === key ? null : key);
  };

  const sections = [
    { key: "overview", title: "Overview", content: island.sections.overview },
    { key: "history", title: "History", content: island.sections.history },
    { key: "traditions", title: "Traditions", content: island.sections.traditions },
    { key: "culture", title: "Culture", content: island.sections.culture },
    { key: "language", title: "Language", content: island.sections.language },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { fontSize: 20, marginBottom: 12 }]}>
        Cultural Knowledge
      </Text>

      {sections.map(({ key, title, content }) => (
        <TouchableOpacity key={key} onPress={() => toggleSection(key)} activeOpacity={0.9}>
          <View style={styles.card}>
            <View style={styles.toggleHeader}>
              <Text style={styles.sectionTitle}>{title}</Text>
              <Text style={styles.arrow}>{expandedSection === key ? "▲" : "▼"}</Text>
            </View>

            {expandedSection === key && <Markdown style={MARKDOWN_STYLES}>{content}</Markdown>}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default KnowledgeCard;
