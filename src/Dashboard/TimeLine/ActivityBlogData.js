import { FaUserPlus, FaEnvelope } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BsFillChatFill, BsFillHandbagFill } from "react-icons/bs";

const ActivityBlogData = [
    {
        id:1,
        icon:<FaUserPlus />,
        userName:'MR John',
        activity:'Started following you.',
        date:' 01 June 2020',
        badgeNo:'1m',
        borderClrClass:'borderPrimary',
        iconBg:'primaryColor',
    },
    {
        id:2,
        icon:<BsFillChatFill />,
        userName:'Lily',
        activity:' 1 Commented applied.',
        date:' 01 July 2020',
        badgeNo:'3m',
        borderClrClass:'borderSecondary',
        iconBg:'secondaryColor',
    },
    {
        id:3,
        icon:<AiFillLike />,
        userName:'Kevin',
        activity:' liked your site .',
        date:' 05 July 2020',
        badgeNo:'5m',
        borderClrClass:'borderSuccess',
        iconBg:'successColor',
    },
    {
        id:4,
        icon:<FaEnvelope />,
        userName:'Andrena',
        activity:'posted a new article.',
        date:'09 October 2020',
        badgeNo:'5m',
        borderClrClass:'borderInfo',
        iconBg:'infoColor',
    },
    {
        id:5,
        icon:<BsFillHandbagFill />,
        userName:'Sonia',
        activity:' Delivery in progress .',
        date:'12 October 2020',
        badgeNo:'5m',
        borderClrClass:'borderDanger',
        iconBg:'dangerColor',
    }

]
 
export default ActivityBlogData;