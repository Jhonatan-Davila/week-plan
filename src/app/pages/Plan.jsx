import React from 'react';

import Sidebar from '../components/Sidebar';
import SidebarContent from '../components/SidebarContent';
import PlanView from '../components/PlanView';

const Plan = () => {
  return (
    <div className="plan-container">
      <Sidebar width="300" height="100vh">
        <SidebarContent />
      </Sidebar>
      <PlanView />
    </div>
  );
}

export default Plan;