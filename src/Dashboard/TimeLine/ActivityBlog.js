import "./ActivityBlog.css"
import ActivityBlogData from "./ActivityBlogData";
const ActivityBlog = () => {
    return (
        <>
            {ActivityBlogData.map((items) => {
                return (
                    <div className='activityBlog'>
                        <div className={`activityImg ${items.borderClrClass}`}>
                            <span className={`activityImg-img ${items.iconBg}`}>
                                <span>{items.icon}</span>
                            </span>
                        </div>
                        <div className='activityDetails'>
                            <div className='activityDetails--details'>
                                <p><span className='activityDetails--userName'>{items.userName} </span>
                                    {items.activity}
                                </p>
                                <span className='activityDetails--date'>
                                    {items.date}
                                </span>
                            </div>
                            <div className='timeLine__badge'>
                                <span className={`timeLine__badge--badge ${items.iconBg}`}>{items.badgeNo}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export default ActivityBlog;