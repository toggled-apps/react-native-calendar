import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TimelineEvt } from "./Timeline.type";

type Props = {
  event: TimelineEvt;
};

const TimelineEvent = ({ event }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{event.label}</Text>
      </View>
      <View>
        <Text
          style={{ color: "#fff" }}
        >{`${event.startTime} - ${event.endTime}`}</Text>
      </View>
    </View>
  );
};

export { TimelineEvent };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    borderRadius: 10,
    color: "#fff",

    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    borderStyle: "solid",
  },
});
