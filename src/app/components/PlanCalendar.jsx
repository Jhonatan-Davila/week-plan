import React, { useState, useCallback, useMemo } from "react";
import BigCalendar from "react-big-calendar";
import moment from 'moment';

import './PlanView.scss';
import PlanModal from "./PlanModal";

moment.locale("en");
BigCalendar.momentLocalizer(moment);

const PlanCalendar = ({calView, calDate, planData}) => {
  const allViews = useMemo(() => {
    return Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
  }, []);
  
  const [open, setOpen] = useState(false);
  const [showEvents, setShowEvents] = useState([]);

  const selectEvent = useCallback((event) => {
    let arrEvent = [];
    planData.forEach((plan) => {
      const planStart = plan.start;
      const eventStart = event.start;

      if( planStart.getFullYear() === eventStart.getFullYear() &&
          planStart.getMonth() === eventStart.getMonth() &&
          planStart.getDate() === eventStart.getDate() &&
          planStart.getHours() === eventStart.getHours())
        arrEvent.push(plan);
    })
    setShowEvents(arrEvent);
    setOpen(true);
  }, [planData]);

  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '#' + (event.hexColor ? event.hexColor : '3174ad');
    let style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
      style: style
    };
  };

  return (
    <React.Fragment>
      <BigCalendar
        popup
        selectable
        toolbar={false}
        events={planData}
        step={30}
        views={allViews}
        view={calView}
        onSelectEvent={selectEvent}
        onView={() => {}}
        onNavigate={() => {}}
        date={calDate}
        eventPropGetter={eventStyleGetter}
      />
      <PlanModal 
        open={open}
        setOpen={setOpen}
        events={showEvents}
      />
    </React.Fragment>
  );
}

export default PlanCalendar;