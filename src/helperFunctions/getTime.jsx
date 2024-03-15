import moment from "moment/moment";

export default function getCurrentTimeStamp(format) {
  return moment().format(format);
}
