import React, {useState} from 'react';
import './CompanyStats.scss'
import Card from '../Card/Card';
import { data } from '../../utils/data';

function CompanyStats(props) {
    const [ newData, setNewData ] = useState(data);

    return (
        <div className='company-stats'>
            <h1 className='company-stats__title'>Сводный отчет</h1>
            <div className='company-stats__cards'>
                <Card title={'Итог'}/>
                <Card title={'B2B'}/>
                <Card title={'B2C'}/>
            </div>
        </div>
    );
}

export default CompanyStats;