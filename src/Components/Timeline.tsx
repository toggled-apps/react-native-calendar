import React from "react";
import { Dayjs } from "dayjs";
import { StyleSheet, Text, View } from "react-native";
import { TimelineEvt } from "./Timeline.type";
import { TimelineEvent } from "./TimelineEvent";

type Props = {
  events: TimelineEvt[];
};

const Timeline = (props: Props) => {
  // create events
  const { events } = props;

  return (
    <View style={styles.container}>
      {events.map((evt) => {
        return (
          <View style={styles.row}>
            <TimelineEvent event={evt} />
          </View>
        );
      })}
    </View>
  );
};

export { Timeline };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    borderStyle: "solid",
  },
});
