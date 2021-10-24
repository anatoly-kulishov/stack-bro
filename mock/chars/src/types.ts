export type Nullable<T> = T | null;

export type HearthRateChartData = {
  date: string;
  withings?: string | number;
  fitbit?: string | number;
}

export enum HearthRateDevicesAnswer {
  string = 'string',
  number = 'number',
  undefined = 'undefined'
}

export type SleepStagesJsonType = Array<{
  iso8601: string | number | Date;
  sleep_fitbit: string | undefined;
  sleep_withings: string | undefined;
}>

export type SleepStagesChartData = Array<{
  date: string;
  fitbit: string | undefined;
  withings: string | undefined
}>

export type HearthRateJsonType = {
  hr_cruve: Array<{
    iso8601: string | number | Date;
    hr_fitbit: string | undefined;
    hr_withings: string | undefined;
  }>
}

export type SleepStagesTableType = {
  fitbit: {
    "deep": number,
    "light": number,
    "rem": number,
    "wake": number
  },
  withings: {
    "deep": number,
    "light": number,
    "rem": number,
    "wake": number
  }
}