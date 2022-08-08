import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { RiMoonLine } from "react-icons/ri";
import { TbMaximize } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineAlignLeft } from "react-icons/ai";
import "./Topbar.css"
import Dashboard from "../Dashboard/Dashboard";
import Chart from "../Dashboard/Chart/Chart";
import Stroked from "../Dashboard/Chart/Stroked";
import TimeLine from "../Dashboard/TimeLine/TimeLine";
import DailyActivity from "../Dashboard/DailyActivity/DailyActivity";

import Table from "../Dashboard/DataTable/DataTable";

const Topbar = (props) => {
     //full screen
  function Fullscreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement === null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
    return (
        <div className="TobarSection">
            <div className="Tobar">
                <div className="Topbar__item">
                    <span onClick={props.addClass}> <AiOutlineAlignLeft /></span>
                    <span className="serchInput">
                        <input type="text" placeholder="seacrh fro anything..." />
                        <button className="submit"><FiSearch /></button>
                    </span>
                </div>

                <div className="Topbar__item">
                    <RiMoonLine onClick={props.darkMode}/>
                    <TbMaximize onClick={Fullscreen}/>
                    <BiBell />
                    <BsChatLeft />
                    <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/8.jpg" alt="img" className="user-img" />
                    <GiHamburgerMenu />
                    <span className="settingIcon"><AiOutlineSetting /></span>
                </div>
            </div>

            <div className="dashboardMain">
                <div class="page-header">
                    <div className="page-header__left">
                        <h1 class="page-title">Dashboard 01</h1>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">Home  /</li>
                            <li class="breadcrumb-item active" aria-current="page">Dashboard 01</li>
                        </ol>
                    </div>
                    <div className="page-header__right">
                        <span className="add-product">Add Account</span>
                        <span className="export">Export</span>
                    </div>
                </div>
                <Dashboard />
                <div className="chart">
                    <span className="areaChart"> <Chart /></span>
                    <span className="radialChart">   <Stroked /></span>
                </div>
                <div className="timelineMain">
                    <TimeLine />
                    <TimeLine />
                   <DailyActivity />
                </div>
                <div className="dataTable">
                    <Table />
                </div>
            </div>

        </div>
    )
}

export default Topbar;