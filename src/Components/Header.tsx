import React from "react";
import dayjs, { Dayjs } from "dayjs";

import { StyleSheet, SafeAreaView, Text, View } from "react-native";

const DAYS = 6;

export default function App() {
  // const initiate = () =>{
  //   var data = [];
  //   for (var i = 0; i < 7; i++) {
  //     data.push({date: dayjs().startOf('year'), []})
  //   }
  // }

  const [dates, setDates] = React.useState<Dayjs[]>([]);

  React.useEffect(() => {
    const today = dayjs().startOf("day");
    const dateList = [today];
    for (let i = 1; i < DAYS; i++) {
      dateList.push(today.add(i, "day"));
    }
    setDates(dateList);
  }, []);

  const _renderDay = (date: Dayjs) => {
    return (
      <View style={styles.column} key={`date-${date}`}>
        <Text style={styles.day}>{date.format("ddd").toLocaleUpperCase()}</Text>
        <View style={styles.selected}>
          <Text>{date.date().toString()}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Calendar</Text>
      <View style={styles.row}>
        {dates.map((date) => {
          return _renderDay(date);
        })}
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    padding: 20,
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    padding: 20,
  },
  day: {
    padding: 10,
    fontWeight: "300",
    fontSize: 12,
  },
  selected: {
    backgroundColor: "yellow",
    borderRadius: 10,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
});
