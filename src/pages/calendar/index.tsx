import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarIndex = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                className="mx-auto mt-20"
                locale="ja-JP"
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default CalendarIndex;
