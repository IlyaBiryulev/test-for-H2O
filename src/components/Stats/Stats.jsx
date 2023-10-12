import React from 'react';
import './Stats.scss';
import TabsContent from '../UI/MyTabs/TabsContent/TabsContent';
import CompanyStats from '../CompanyStats/CompanyStats';
import EmployeesStats from '../EmployeesStats/EmployeesStats';
import DealStats from '../DealStats/DealStats';

function Stats({value}) {

  return (
    <div className='stats'>
      <TabsContent value={value} index={0}>{<EmployeesStats />}</TabsContent>
      <TabsContent value={value} index={1}>{<CompanyStats />}</TabsContent>
      <TabsContent value={value} index={2}>{<DealStats />}</TabsContent>  
    </div>
  );
}

export default Stats;