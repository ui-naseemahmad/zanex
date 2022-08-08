import "./Dashboard.css"
import DashboardData from "./DashboardData";

const Dashboard = () => {
    return (
        <>
            <div className="cardBody-main">
                {DashboardData.map((items) => {
                    return (
                        <div className="cardBody">
                            <div className="cardBody-left">
                                <h6 class="">{items.title}</h6>
                                <h3 class="number-font">{items.number}</h3>
                                <p class="text-muted">
                                    <span className={`text-primary ${items.className}`}><span className={`text-svg ${items.svgClass}`}>{items.icon}</span> {items.percentage}%</span>
                                    last month
                                </p>
                            </div>
                            <div className={`cardBody-right ${items.className}`}>
                                <span className="cardBdy-right--icon">
                                    {items.rightIcon}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Dashboard;