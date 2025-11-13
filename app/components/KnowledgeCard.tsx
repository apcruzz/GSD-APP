import React, { useState } from "react";
import { Image, LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";
import { islands } from "../data/isla";

// Enable animation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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

            {expandedSection === key && (
              <View>
                {/* Image + first paragraph side by side */}
                {/* <View style={styles.row}>
                  {content.image && (
                    <Image source={content.image} style={styles.image} resizeMode="cover" />
                  )}
                  <Text style={styles.paragraph}>{content.paragraphs[0]}</Text>
                </View> */}

                {/* Remaining paragraphs below */}
                {content.paragraphs.map((p: string, i: number) => (
                    <View key={i} style={{ marginBottom: 10 }}>
                        {/* render paragraph */}
                        <Text style={styles.paragraphs}>{p}</Text>

                        {/* render any images linked to this paragraph index */}
                        {content.image &&
                        content.image
                            .filter((img: any) => img.index === i)
                            .map((img: any, j: number) => (
                            <Image
                                key={j}
                                source={img.source}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            ))}
                    </View>
                ))}
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 0 },
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
  paragraphs: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 22,
    flex: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginRight: 10,
  },
  arrow: {
    fontSize: 18,
    color: "#2563eb",
  },
  toggleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default KnowledgeCard;
