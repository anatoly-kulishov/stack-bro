import React, {useEffect} from "react";
import {addDays, eachDayOfInterval} from 'date-fns';
import {useState} from 'react';
import './Calendar.scss';
import {DateRange, Range, RangeFocus, OnDateRangeChangeProps} from 'react-date-range';

// Modify period length constants here
const SHIPPING_PERIOD: number = 4;
const SETUP_PERIOD: number = 2;
const RECORDINGS_PERIOD: number = 13;
const FINAL_PERIOD: number = 1;
const RETURN_PERIOD: number = 3;
const BACKUP_DAY_DELAY: number = 6;

const periods = {
    shipping: {
        key: 'shipping',
        color: '#C0BEFF',
        description: 'Shipping'
    },
    setup: {
        key: 'setUp',
        color: '#A5DEFF',
        description: 'Device Set-Up & Benchmark Surveys'
    },
    recordings: {
        key: 'recordings',
        color: '#BAF6C7',
        description: 'Device and Survey Recordings'
    },
    final: {
        key: 'final',
        color: '#FFA9DD',
        description: 'Final Surveys'
    },
    returnKit: {
        key: 'returnKit',
        color: '#FFE092',
        description: 'Pack & Ship Device Kit'
    },
};

const initialRange: Range = {
    startDate: undefined,
    endDate: new Date(""), // if undefined - calendar will highlight all dates after today, so using this hack
    key: periods.recordings.key,
    color: periods.recordings.color
};

interface CalendarProps {
    readonly onChange: (date: Date | null) => void; // for bubbling selected date
    readonly disabledPeriodStart?: Date | null; // for highlighting disabled dates (for backup day choice)
    readonly value: Date | null; // for changing calendar disabled state depending on chosenDate value
}

const Calendar: React.FC<CalendarProps> = props => {

    const [focusedRange, setFocusedRange] = useState<RangeFocus>([0, 0]); // for manipulating of period selection
    const [ranges, setRanges] = useState<Range[]>([initialRange]); // initial selection of sleepDiaryPeriod
    const [isSelectionFinished, setSelectionFinished] = useState<boolean>(false); // for disabling calendar after selecting day

    const setAllRanges = (startDiary: Date): void => {
        const sleepDiaryRange: Range = {
            ...initialRange,
            startDate: startDiary,
            endDate: addDays(startDiary, RECORDINGS_PERIOD - 1), // creating diary period
        };

        const allRanges: Range[] = [ // creating all ranges automatically, depending on selected day
            sleepDiaryRange, // should be first ! to initiate selecting
            {
                startDate: addDays(startDiary, -SHIPPING_PERIOD - SETUP_PERIOD),
                endDate: addDays(startDiary, -SETUP_PERIOD - 1),
                key: periods.shipping.key,
                autoFocus: false, // preventing auto-switching to this period
                color: periods.shipping.color
            },
            {
                startDate: addDays(startDiary, -SETUP_PERIOD),
                endDate: addDays(startDiary, -1),
                key: periods.setup.key,
                autoFocus: false, // preventing auto-switching to this period
                color: periods.setup.color
            },
            {
                startDate: addDays(startDiary, RECORDINGS_PERIOD),
                endDate: addDays(startDiary, RECORDINGS_PERIOD + FINAL_PERIOD - 1),
                key: periods.final.key,
                autoFocus: false, //  preventing auto-switching to this period
                color: periods.final.color
            },
            {
                startDate: addDays(startDiary, RECORDINGS_PERIOD + FINAL_PERIOD),
                endDate: addDays(startDiary, RECORDINGS_PERIOD + FINAL_PERIOD + RETURN_PERIOD - 1),
                key: periods.returnKit.key,
                autoFocus: false, //  preventing auto-switching to this period
                color: periods.returnKit.color
            }
        ];
        setRanges(allRanges); // drawing created ranges
        setFocusedRange([1, 0]); // Refreshing focus to prevent choosing of end date (end date is chosen automatically)
        setSelectionFinished(true); // block calendar
    }

    const handleSelect = (range: OnDateRangeChangeProps) => {
        const startDiary = range.recordings.startDate as Date; // capturing user's start day selection
        setAllRanges(startDiary);
        props.onChange(startDiary); // sending selected date outside
    };

    useEffect(() => { // tracking what calendar state is - selected or empty
        if (!props.value) { // if no data chosen - taking initial state
            setRanges([initialRange]); // refreshing all ranges
            setFocusedRange([0, 0]); // refreshing firstDay selection marker
            setSelectionFinished(false); // unblocking calendar
        } else {
            setAllRanges(props.value)
        }
    }, [props.value]);


    return (
        <div className="calendar" style={{pointerEvents: isSelectionFinished ? 'none' : 'auto'}}>
            <DateRange
                disabledDates={props.disabledPeriodStart ?
                    eachDayOfInterval({
                        start: new Date(),
                        end: addDays(props.disabledPeriodStart, BACKUP_DAY_DELAY - 1)
                    }) // backup day should be not earlier than N days after main day
                    : []}
                showDateDisplay={false}
                ranges={ranges}
                startDate={new Date()}
                onChange={handleSelect}
                focusedRange={focusedRange}
                minDate={addDays(new Date(), 7)} // they can start only after 7 days after today
                maxDate={addDays(new Date(), 120)}
                months={3}
                direction='horizontal'
            />
            <div className="calendarLegend">
                <div className="calendarLegendItem"><span style={{backgroundColor: '#E2E2E2'}}></span>Unavailable
                </div>
                {isSelectionFinished && Object.entries(periods).map(([key, period]) =>
                    <div className="calendarLegendItem" key={key}><span
                        style={{backgroundColor: period.color}}></span>{period.description}</div>)}
            </div>
        </div>
    )
};

export default Calendar;
