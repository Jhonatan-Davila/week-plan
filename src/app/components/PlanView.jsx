import React, {useState, useCallback} from 'react';

import PlanFilter from './PlanFilter';
import PlanCalendar from './PlanCalendar';
import {plans} from "../db/plans";

const PlanView = () => {
  const [calView, setCalView] = useState('week');
  const [calDate, setCalDate] = useState(new Date()); //init current date
  const [planData, setPlanData] = useState(plans[0].plans);

  const handleCalendarView = useCallback((value) => {
    setCalView(value);
  }, []);

  const handleCalendarDate = useCallback((value) => {
    setCalDate(new Date(value));
  }, []);

  const handleStaff = useCallback((id) => {
    setPlanData(plans[id].plans);
  }, []);

  return (
    <div className="plan-view">
      <PlanFilter
        handleCalendarView={handleCalendarView}
        handleCalendarDate={handleCalendarDate}
        handleStaff={handleStaff}/>
      <PlanCalendar
        calView={calView}
        calDate={calDate}
        planData = {planData}/>
    </div>
  );
}

export default PlanView;