import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

import { Header } from "./src/Components/Header";
import { Timeline } from "./src/Components/Timeline";
import { TimelineEvt } from "./src/Components/Timeline.type";

const DAYS = 6;

const MOCK_EVENTS: TimelineEvt[] = [
  {
    startTime: dayjs(),
    endTime: dayjs().endOf("d"),
    label: "wing chun leo",
    id: "someuuid",
  },
];

export default function App() {
  // pass into date selector
  const [selectedDate, setSelectedDate] = useState<Dayjs>();

  // fetch events on selectedDate change
  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);
  // pass events into timeline

  return (
    <SafeAreaView style={styles.container}>
      <Header onDateSelect={(date) => setSelectedDate(date)} />
      <Timeline events={MOCK_EVENTS} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
