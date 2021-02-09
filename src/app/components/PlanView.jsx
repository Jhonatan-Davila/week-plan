import React, {useState, useCallback, useMemo} from 'react';

import PlanFilter from './PlanFilter';
import PlanCalendar from './PlanCalendar';
import {plans} from "../db/plans";

const PlanView = ({open, width, slideSideNav}) => {
  const [calView, setCalView] = useState('work_week');
  const [calDate, setCalDate] = useState(new Date()); //init current date
  const allPlans = useMemo(() => {
    let results = []
    plans.forEach((plan) => {
      results.push(...plan.plans);
    });
    return results
  }, []);
  const [planData, setPlanData] = useState(allPlans);

  const handleCalendarView = useCallback((value) => {
    setCalView(value);
  }, []);

  const handleCalendarDate = useCallback((value) => {
    setCalDate(new Date(value));
  }, []);

  const handleStaff = useCallback((id) => {
    id < 0 ?
      setPlanData(allPlans) :
      setPlanData(plans[id].plans);
  }, []);

  return (
    <div 
      className="plan-view"
      style={{
        marginLeft: !open ? 0 : width
      }}
    >
      <PlanFilter
        handleCalendarView={handleCalendarView}
        handleCalendarDate={handleCalendarDate}
        handleStaff={handleStaff}
        slideSideNav={slideSideNav}/>
      <PlanCalendar
        calView={calView}
        calDate={calDate}
        planData = {planData}/>
    </div>
  );
}

export default PlanView;