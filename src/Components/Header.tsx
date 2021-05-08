import React from "react";
import dayjs, { Dayjs } from "dayjs";

import { StyleSheet, SafeAreaView, Text, View, Pressable } from "react-native";

const DAYS = 7;

type Prop = {
  onDateSelect: (date: Dayjs) => void;
};

const Header = (props: Prop) => {
  // const initiate = () =>{
  //   var data = [];
  //   for (var i = 0; i < 7; i++) {
  //     data.push({date: dayjs().startOf('year'), []})
  //   }
  // }
  const { onDateSelect } = props;
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
        <Pressable style={styles.selected} onPress={() => onDateSelect(date)}>
          <Text>{date.date().toString()}</Text>
        </Pressable>
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
};

export { Header };

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  header: {
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
    justifyContent: "center",
  },
});
