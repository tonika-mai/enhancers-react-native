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

export function calcWindCondition(windSpeed) {
  if (windSpeed >= 0 && windSpeed <= 1.5) {
    return 'Calm';
  } else if (windSpeed > 1.5 && windSpeed <= 5.4) {
    return 'Breeze';
  } else if (windSpeed > 5.4 && windSpeed <= 13.8) {
    return 'Moderate wind';
  } else if (windSpeed > 13.8 && windSpeed <= 24.4) {
    return 'Strong wind';
  } else if (windSpeed > 24.4 && windSpeed <= 32.6) {
    return 'Strong storm';
  } else if (windSpeed > 32.6) {
    return 'Hurricane';
  }
}
