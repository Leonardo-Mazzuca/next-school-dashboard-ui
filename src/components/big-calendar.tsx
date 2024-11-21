'use client'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {

    const [view, setView] = useState<View>(Views.WORK_WEEK)

    const handleOnChangeView = (selectedView:View) => {

        setView(selectedView)

    }

    return (


        <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "98%" }}
        views={['work_week','day']}
        view={view}
        onView={handleOnChangeView}
        min={new Date(2024, 10, 18, 8, 0,0)}
        max={new Date(2024, 10, 18, 17, 0,0)}
        />


    )

}

export default BigCalendar