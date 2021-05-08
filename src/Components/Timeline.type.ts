import { Dayjs } from "dayjs";

export type TimelineEvt = {
  startTime: Dayjs;
  endTime: Dayjs;
  label: string;
  id: string;
};
