import Link from "next/link";
import { SvgIcon } from "../../components/Design/SvgIcon";

const DashboardAgentSidebar = () => {
  return (
    <div className="_dashboard_sidebar_area">
      <div className="_dashboard_sidebar_area_top">
        <div className="_dashboard_sidebar_area_top_logo">
          <Link href="" className="_dashboard_sidebar_area_top_logo_image">
            <img
              src="assets/images/logo-white.png"
              className="_navbar_logo_img"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="_dashboard_sidebar_area_top_list">
          <li className="_dashboard_sidebar_area_top_item">
            <Link href="" className="_dashboard_sidebar_area_top_link">
              All properties
            </Link>
          </li>
          <li className="_dashboard_sidebar_area_top_item">
            <Link href="" className="_dashboard_sidebar_area_top_link">
              My Agents
            </Link>
          </li>
          <li className="_dashboard_sidebar_area_top_item">
            <Link href="" className="_dashboard_sidebar_area_top_link">
              Statistics
            </Link>
          </li>
          <li className="_dashboard_sidebar_area_top_item">
            <Link href="" className="_dashboard_sidebar_area_top_link">
              Feedback
            </Link>
          </li>
        </ul>
      </div>
      <div className="_dashboard_sidebar_area_bottom">
        <ul className="_dashboard_sidebar_area_top_list">
          <li className="_dashboard_sidebar_area_top_item1 _dashboard_border">
            <Link href="" className="_dashboard_sidebar_area_top_link">
              <span className="_dashboard_sidebar_area_top_link_icon">
                <SvgIcon iconType={"user"} />
              </span>
              Manager
            </Link>
          </li>
          <li className="_dashboard_sidebar_area_top_item1">
            <Link href="" className="_dashboard_sidebar_area_top_link">
              <span className="_dashboard_sidebar_area_top_link_icon">
                <SvgIcon iconType={"settings"} />
              </span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardAgentSidebar;
