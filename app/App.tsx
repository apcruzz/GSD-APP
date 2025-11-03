import { Map } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { IslandDetail, IslandGrid } from "./components/IslandGridDetails";

type ViewType = "home" | "island-detail";

export default function App() {
  const [view, setView] = useState<ViewType>("home");
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null);

  const handleSelectIsland = (islandId: string) => {
    setSelectedIsland(islandId);
    setView("island-detail");
  };

  const handleBackToHome = () => {
    setView("home");
    setSelectedIsland(null);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {view === "island-detail" && selectedIsland ? (
          <IslandDetail islandId={selectedIsland} onBack={handleBackToHome} />
        ) : (
          <>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Polynesian Cultural Center</Text>
              <Text style={styles.subtitle}>Discover the Islands of Polynesia</Text>
            </View>

            <ScrollView style={styles.scroll}>
              <Text style={styles.sectionTitle}>Explore Islands</Text>
              <IslandGrid onSelectIsland={handleSelectIsland} />
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
              <TouchableOpacity onPress={() => setView("home")} style={styles.navBtn}>
                <Map color={view === "home" ? "#2563eb" : "#6b7280"} size={22} />
                <Text style={[styles.navText, view === "home" && styles.navTextActive]}>
                  Islands
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },
  header: {
    backgroundColor: "#2563eb",
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: { color: "white", fontSize: 20, fontWeight: "700" },
  subtitle: { color: "#dbeafe", fontSize: 13, marginTop: 4 },
  scroll: { paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginVertical: 10 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "white",
  },
  navBtn: { alignItems: "center" },
  navText: { fontSize: 12, color: "#6b7280" },
  navTextActive: { color: "#2563eb", fontWeight: "600" },
});
