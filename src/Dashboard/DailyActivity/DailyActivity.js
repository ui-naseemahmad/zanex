import Heading from '../../Heading';
import "./DailyActivity.css"
import DailyActivityData from './DailyActivityData';

const DailyActivity = () => {
    return (
        <div className='timeLine-section'>
            <Heading title="Daily Activity" />
            <div className='dailyActivity'>
                <ul className='dailyActivity__list'>
                    {DailyActivityData.map((items) => {
                        return (
                            <li>
                                <h6>{items.title}
                                    <span className='dailyActivity--date'>{items.date}</span> </h6>
                                <p>{items.activity} <span className='dailyActivity--task'>{items.task}</span></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default DailyActivity;
