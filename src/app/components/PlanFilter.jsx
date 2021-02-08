import React, { useMemo, useRef } from 'react';
import { DropdownList, DateTimePicker } from 'react-widgets';
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";

import {staffs} from '../db/plans';
import './PlanFilter.scss';

moment.locale("en");
momentLocalizer();

const PlanFilter = ({
  handleCalendarView,
  handleCalendarDate,
  handleStaff,
}) => {
  const calViews = useRef(['day', 'week', 'agenda']);
  const staffNames = useMemo(() => {
    let results = [];
    staffs.forEach(staff => results.push(staff.name));
    return results; 
  }, []);

  return (
    <div className="plan-filter">
      <button className="btn-appoint">Create Appointment</button>
      <div className="plan-filter-option">
        <div className="plan-filter-option-item">
          <DropdownList
            data={staffNames}
            defaultValue={staffNames[0]}
            onChange={value => {handleStaff(staffs[staffNames.indexOf(value)].id)}}
          />
        </div>
        <div className="plan-filter-option-item">
          <DateTimePicker
            format='MMM DD, YYYY'
            defaultValue={new Date()}
            time={false}
            onChange={value => handleCalendarDate(value)}
          />
        </div>
        <div className="plan-filter-option-item">
          <DropdownList
            data={calViews.current}
            defaultValue={calViews.current[2]}  //init 'week'
            onChange={value => handleCalendarView(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PlanFilter;