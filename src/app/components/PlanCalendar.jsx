import React, { useMemo } from "react";
import BigCalendar from "react-big-calendar";
import moment from 'moment';

moment.locale("en");
BigCalendar.momentLocalizer(moment);

const PlanCalendar = ({calView, calDate, planData}) => {
  const allViews = useMemo(() => {
    Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
  }, []);

  return (
    <BigCalendar
      toolbar={false}
      events={planData}
      step={60}
      views={allViews}
      view={calView}
      onView={() => {}}
      onNavigate={() => {}}
      date={calDate}
    />
  );
}

export default PlanCalendar;