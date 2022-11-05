import Link from "next/link";
import { SvgIcon } from "../../../../components/Design/SvgIcon";

function DashboardTop() {
  return (
    <div className="_dashboard_content_top">
      <div className="_dashboard_content_inner_left">
        <h2 className="_dashboard_content_inner_left_title">
          Welcome back <span>Adam Smith</span>
        </h2>
      </div>
      <div className="_dashboard_content_inner_right">
        <div className="_dashboard_content_inner_right_icon">
          <span className="_navbar_btn_ic">
            <SvgIcon iconType={"homeicon"} />
          </span>
          <p className="_dashboard_content_inner_right_icon_para">x350</p>
        </div>
        <div className="_dashboard_content_inner_right_button">
          <Link href="" className="_dashboard_content_inner_right_button_link">
            Top up Housikoins
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DashboardTop;
