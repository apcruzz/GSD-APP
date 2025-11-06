import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { islands } from "../data/islands";

interface IslandGridProps {
  onSelectIsland: (islandId: string) => void;
}

export function IslandGrid({ onSelectIsland }: IslandGridProps) {
  return (
    <View style={styles.grid}>
      {islands.map((island) => (
        <TouchableOpacity
          key={island.id}
          onPress={() => onSelectIsland(island.id)}
          style={[styles.islandButton, { backgroundColor: island.color || "#f59e0b" }]}
          activeOpacity={0.8}
        >
          <Text style={styles.islandEmoji}>{island.emoji}</Text>
          <Text style={styles.islandName}>{island.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

interface IslandDetailProps {
  islandId: string;
  onBack: () => void;
}

export function IslandDetail({ islandId, onBack }: IslandDetailProps) {
  const island = islands.find((i) => i.id === islandId);

  if (!island) return null;

  return (
    <ScrollView style={styles.detailContainer}>
      <View style={[styles.header, { backgroundColor: island.color || "#f59e0b" }]}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ArrowLeft color="white" size={20} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerEmoji}>{island.emoji}</Text>
          <Text style={styles.headerTitle}>{island.name}</Text>
        </View>
      </View>
  {/* COMMENTED THIS OUT, THIS BLOCK PRINTS ALL THE CONTENT INSTEAD OF THE CLICKABLE SECTIONS */}
      {/* <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.sectionText}>{island.sections.overview}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>History</Text>
          <Text style={styles.sectionText}>{island.sections.history}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Culture</Text>
          <Text style={styles.sectionText}>{island.sections.culture}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Traditions</Text>
          <Text style={styles.sectionText}>{island.sections.traditions}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Language</Text>
          <Text style={styles.sectionText}>{island.sections.language}</Text>
        </View>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  islandButton: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 3,
  },
  islandEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  islandName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  detailContainer: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    padding: 24,
    paddingBottom: 32,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
  },
  headerCenter: {
    alignItems: "center",
  },
  headerEmoji: {
    fontSize: 64,
    marginBottom: 8,
  },
  headerTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
});
