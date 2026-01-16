// SignaleringsplanPDF.tsx
"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    padding: 20,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    width: 120,
    fontWeight: "bold",
    paddingLeft: 4,
  },
  value: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

interface Props {
  data: {
    ik_doen_goed: string;
    ik_doen_mid: string;
    ik_doen_slecht: string;
    ander_doen_goed: string;
    ander_doen_mid: string;
    ander_doen_slecht: string;
    ik_merk_goed: string;
    ik_merk_mid: string;
    ik_merk_slecht: string;
    ander_merk_goed: string;
    ander_merk_mid: string;
    ander_merk_slecht: string;
  };
}

export function SignaleringsplanPDF({ data }: Props) {
  return (
    <Document>
      <Page size="A3" style={styles.page}>
        <Text style={styles.title}>Signaleringsplan</Text>

        {/* Wat kan ik doen? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wat kan ik doen?</Text>
          <View style={[styles.row, { backgroundColor: "#86efad50" }]}>
            <Text style={styles.label}>Het gaat goed</Text>
            <Text style={styles.value}>{data.ik_doen_goed}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fde68a50" }]}>
            <Text style={styles.label}>Het gaat niet goed</Text>
            <Text style={styles.value}>{data.ik_doen_mid}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fca5a550" }]}>
            <Text style={styles.label}>Het gaat slecht</Text>
            <Text style={styles.value}>{data.ik_doen_slecht}</Text>
          </View>
        </View>

        {/* Wat kan een ander doen? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wat kan een ander doen?</Text>
          <View style={[styles.row, { backgroundColor: "#86efac50" }]}>
            <Text style={styles.label}>Het gaat goed</Text>
            <Text style={styles.value}>{data.ander_doen_goed}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fde68a50" }]}>
            <Text style={styles.label}>Het gaat niet goed</Text>
            <Text style={styles.value}>{data.ander_doen_mid}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fca5a550" }]}>
            <Text style={styles.label}>Het gaat slecht</Text>
            <Text style={styles.value}>{data.ander_doen_slecht}</Text>
          </View>
        </View>

        {/* Wat merk ik? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wat merk ik?</Text>
          <View style={[styles.row, { backgroundColor: "#86efac50" }]}>
            <Text style={styles.label}>Het gaat goed</Text>
            <Text style={styles.value}>{data.ik_merk_goed}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fde68a50" }]}>
            <Text style={styles.label}>Het gaat niet goed</Text>
            <Text style={styles.value}>{data.ik_merk_mid}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fca5a550" }]}>
            <Text style={styles.label}>Het gaat slecht</Text>
            <Text style={styles.value}>{data.ik_merk_slecht}</Text>
          </View>
        </View>

        {/* Wat merkt een ander? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wat merkt een ander?</Text>
          <View style={[styles.row, { backgroundColor: "#86efac50" }]}>
            <Text style={styles.label}>Het gaat goed</Text>
            <Text style={styles.value}>{data.ander_merk_goed}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fde68a50" }]}>
            <Text style={styles.label}>Het gaat niet goed</Text>
            <Text style={styles.value}>{data.ander_merk_mid}</Text>
          </View>
          <View style={[styles.row, { backgroundColor: "#fca5a550" }]}>
            <Text style={styles.label}>Het gaat slecht</Text>
            <Text style={styles.value}>{data.ander_merk_slecht}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
