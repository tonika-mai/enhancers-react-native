import dayjs from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(tz);

export function formatTemperature(temp) {
  let temperature = '';
  if (temp) {
    temperature = Math.round(temp) + '°';
  }
  return temperature;
}

export function formatLongDate(date, timezone) {
  let dt = '';
  if (date && timezone) {
    dt = dayjs.unix(date).tz(timezone);
    dt = dt.format('dddd D, MMMM');
  }
  return dt;
}

export function formatShortDate(date, timezone) {
  let dt = '';
  if (date && timezone) {
    dt = dayjs.unix(date).tz(timezone);
    dt = dt.format('ddd, D MMM');
  }
  return dt;
}

export function formatTime(date, timezone) {
  let time = '';
  if (date && timezone) {
    time = dayjs.unix(date).tz(timezone);
    time = time
      .format('h:mm a')
      .replace(':00', '')
      .replace('am', 'a.m.')
      .replace('pm', 'p.m.');
  }
  return time;
}

export function formatDay(date, timezone) {
  let dt = '';
  if (date && timezone) {
    dt = dayjs.unix(date).tz(timezone);
    dt = dt.format('dddd');
  }
  return dt;
}
