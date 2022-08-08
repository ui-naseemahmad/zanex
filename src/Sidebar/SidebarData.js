import { BiHome } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SidebarDat = [
    {
        subcategory:'Main',
        sidebarLabelIcon:<BiHome />,
        sidebarLabel:'Dashboard' 
    },
    {
        subcategory:'Widget',
        sidebarLabelIcon:<BiHome />,
        sidebarLabel:'Dashboard' 
    },
    {
        subcategory:'Element',
        sidebarLabelIcon:<BiHome />,
        sidebarLabel:'Dashboard' ,
        sideMenuIcon:<MdOutlineKeyboardArrowRight />
    }
]

export default SidebarDat;