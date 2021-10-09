import produce from "immer";
import {FilterAction} from "../actions";
import {ActionType} from "../action-types";

type DeviceType = {
  label: string,
  color: string,
  flag: boolean
}

type DevicesType = {
  fitbit: DeviceType,
  withings: DeviceType,
  sleepDiary: DeviceType
}

export interface FilterState {
  graphs: boolean,
  tables: boolean,
  devices: DevicesType,
  sleepMetrics: {
    labels: [string, string],
    values: [string, string]
    flag: boolean
  }
  sleepStages: {
    labels: [string, string],
    values: [string, string]
    flag: boolean
  }
}

const initialState: FilterState = {
  graphs: true,
  tables: true,
  devices: {
    fitbit: {
      label: 'Fitbit',
      color: '#BAF7C7',
      flag: true
    },
    withings: {
      label: 'Withings',
      color: '#A5DEFF',
      flag: true
    },
    sleepDiary: {
      label: 'Sleep Diary',
      color: '#FFE092',
      flag: true
    }
  },
  sleepMetrics: {
    labels: ["Critical Sleep Times", "Core Sleep Metrics"],
    values: ["criticalSleepTimes", "coreSleepMetrics"],
    flag: false
  },
  sleepStages: {
    labels: ["Sleep Stages — Smoothed", "Sleep Stages — Raw"],
    values: ["smoothed", "raw"],
    flag: false
  }
};

const reducer = produce((state: FilterState = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case ActionType.SET_FILTER_OPTIONS:
      return action.payload
    default:
      return state
  }
}, initialState);

export default reducer