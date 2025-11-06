import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
          style={styles.islandCard}
          activeOpacity={0.8}
        >
          <Image source={island.image} style={styles.islandImage} resizeMode="cover" />
          <View style={styles.overlay}>
            <Text style={styles.islandName}>{island.name}</Text>
          </View>
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
      {/* You can re-enable your section cards here later if needed */}
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
  islandCard: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 16,
    overflow: "hidden", // keeps image within rounded corners
    marginBottom: 12,
    elevation: 3,
    backgroundColor: "#ccc",
  },
  islandImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)", // adds a dark tint for text readability
  },
  islandName: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
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
});

export default IslandGrid;
