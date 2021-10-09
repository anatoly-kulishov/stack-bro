import {format} from "date-fns";
import {HearthRateChartData, HearthRateJsonType, SleepStagesChartData, SleepStagesJsonType} from "../types";

const filterNames = (str: string | undefined) => {
  if (str === 'wake') return 'Awake';
  if (str === 'out_of_bed') return '';
  if (str === 'rem') return 'REM';
  return str;
}

export const preparationAllCharsData = (hr_json: any, sleep_json: any): any => {
  if (hr_json?.hr_cruve?.length === sleep_json?.length) {
    return {
      days: Object.keys(hr_json),
      hr_data: hr_json,
      sleep_data: sleep_json
    }
  }
}

export const parseHeartRate = (data: HearthRateJsonType): HearthRateChartData[] => {
  return data?.hr_cruve?.map(({iso8601, hr_fitbit, hr_withings}) => {
    return {
      date: format(new Date(iso8601), "MMM dd  ha"),
      fitbit: filterNames(hr_fitbit),
      withings: filterNames(hr_withings)
    }
  })
}

export const parseSleepStages = (data: SleepStagesJsonType): SleepStagesChartData => {
  return data?.map((el) => {
    return {
      date: format(new Date(el.iso8601), "h a"),
      fitbit: filterNames(el.sleep_fitbit),
      withings: filterNames(el.sleep_withings)
    }
  })
}

export function mathCeil10(x: number): number {
  return Math.ceil(x / 10) * 10;
}

export function mathFloor10(x: number): number {
  return Math.floor(x / 10) * 10;
}

export const calculateDevicesDataSummury = (timestaps: Array<number>): number => {
  if (timestaps.length) {
    return timestaps.reduce((previousValue: number, currentValue: number): number => previousValue + currentValue)
  }
  return 0
}

export const calculateDiffTime = (first_device: number, second_device: number): string => {
  console.log('calculateDiffTime()')
  let diffTime;
  if (first_device > second_device) {
    diffTime = new Date((first_device - second_device))
  } else {
    diffTime = new Date((second_device - first_device))
  }
  if (first_device && second_device) {
    return `${diffTime.getUTCHours()}H ${diffTime.getUTCMinutes()}M`
  }
  if (first_device && !second_device) {
    return `${new Date(first_device).getUTCHours()}H ${new Date(first_device).getUTCMinutes()}M`
  }
  return `${new Date(second_device).getUTCHours()}H ${new Date(second_device).getUTCMinutes()}M`
}