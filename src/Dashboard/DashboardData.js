import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiBriefcase } from "react-icons/fi";


const DashboardData = [
    {
        id:1,
        title:"Total Sales",
        number:34516,
        icon:<MdKeyboardArrowUp />,
        percentage:3,
        rightIcon:  <IoMdTrendingUp />,
        className:"primary",
        svgClass:"primary"
    },
    {
        id:2,
        title:"Total Leads",
        number:34516,
        icon:<MdKeyboardArrowUp />,
        percentage:3,
        rightIcon:  <IoRocketOutline />,
        className:"danger",
        svgClass:"secondary"

    },
    {
        id:3,
        title:"Total Profit",
        number:34516,
        icon:<MdKeyboardArrowDown />,
        percentage:0.5,
        rightIcon:  <TbCurrencyDollar /> ,
        className:"secondary",
        svgClass:'success'
    },
    {
        id:4,
        title:"Total Cost",
        number:34516,
        icon:<MdKeyboardArrowDown />,
        percentage:0.2,
        rightIcon:  <FiBriefcase />,
        className:"success",
        svgClass:'danger'
        
    }
]

export default DashboardData;