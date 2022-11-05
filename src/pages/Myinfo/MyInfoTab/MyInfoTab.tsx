import Link from "next/link";
import { SvgIcon } from "../../../components/Design/SvgIcon";

function MyInfoTab(props: any) {
  function wrapHandleClick(ev: any) {
    props.handleTab(ev);
  }
  // const location = useLocation();

  return (
    <div className="_housiko_myads_btns_wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_housiko_myads_all_btn">
              <div className="_housiko_myads_btns">
                <div className="_housiko_myads_btn_list">
                  <Link
                    href="/myinfo?mytab=profile"
                    onClick={() => wrapHandleClick(6)}
                    className={`_housiko_myads_btn ${
                      props.navItem === "profile"
                        ? "_housiko_myads_btn_active"
                        : ""
                    }`}
                  >
                    <span className="_housiko_myads_btn_ic _bg_ic1">
                      <SvgIcon iconType={"myprofile"} />
                    </span>
                    <span className="_housiko_myads_btn_txt">My Profile</span>
                  </Link>
                </div>
                <div className="_housiko_myads_btn_list">
                  <Link
                    href="/myinfo?mytab=message"
                    onClick={() => wrapHandleClick(5)}
                    className={`_housiko_myads_btn ${
                      props.navItem === "message"
                        ? "_housiko_myads_btn_active"
                        : ""
                    }`}
                  >
                    <span className="_housiko_myads_btn_ic _bg_ic3">
                      <SvgIcon iconType={"mymessages"} />
                    </span>
                    <span className="_housiko_myads_btn_txt">My Messages</span>
                  </Link>
                </div>
                <div className="_housiko_myads_btn_list">
                  <Link
                    href="/myinfo?mytab=ad"
                    onClick={() => wrapHandleClick(1)}
                    className={`_housiko_myads_btn ${
                      props.navItem === "ad" ? "_housiko_myads_btn_active" : ""
                    }`}
                  >
                    <span className="_housiko_myads_btn_ic _bg_ic1">
                      <SvgIcon iconType={"myads"} />
                    </span>
                    <span className="_housiko_myads_btn_txt">My Ads</span>
                  </Link>
                </div>
                <div className="_housiko_myads_btn_list">
                  <Link
                    href="/myinfo?mytab=products"
                    className="_housiko_myads_btn products_come"
                  >
                    <span className="_housiko_myads_btn_ic _bg_ic2">
                      <SvgIcon iconType={"myproducts"} />
                    </span>
                    <span className="_housiko_myads_btn_txt">My Products</span>

                    <span className="_housiko_list_prop_main_tab_come_box">
                      <p className="_housiko_list_prop_main_tab_come_box_txt">
                        coming soon
                      </p>
                    </span>
                  </Link>
                </div>
                <div className="_housiko_myads_btn_list">
                  <Link
                    href="/myinfo?mytab=alert"
                    onClick={() => wrapHandleClick(3)}
                    className={`_housiko_myads_btn ${
                      props.navItem === "alert"
                        ? "_housiko_myads_btn_active"
                        : ""
                    }`}
                  >
                    <span className="_housiko_myads_btn_ic _bg_ic3">
                      <SvgIcon iconType={"myalerts"} />
                    </span>
                    <span className="_housiko_myads_btn_txt">My Alerts</span>
                  </Link>
                </div>
                <div className="_housiko_myads_btn_list">
                  <Link
                    href="/myinfo?mytab=fav"
                    onClick={() => wrapHandleClick(4)}
                    className={`_housiko_myads_btn ${
                      props.navItem === "fav" ? "_housiko_myads_btn_active" : ""
                    }`}
                  >
                    <span className="_housiko_myads_btn_ic _bg_ic4">
                      <SvgIcon iconType={"myfav"} />
                    </span>
                    <span className="_housiko_myads_btn_txt">
                      My Favourites
                    </span>
                  </Link>
                </div>
                <div className="_housiko_myads_btn_list">
                  <Link
                    href="/myinfo?mytab=discarded"
                    onClick={() => wrapHandleClick(7)}
                    className={`_housiko_myads_btn ${
                      props.navItem === "discarded"
                        ? "_housiko_myads_btn_active"
                        : ""
                    }`}
                  >
                    <span className="_housiko_myads_btn_ic _bg_ic4">
                      <SvgIcon iconType={"advert"} />
                    </span>
                    <span className="_housiko_myads_btn_txt">
                      My Discarded Adverts
                    </span>
                  </Link>
                </div>
              </div>
              <div className="_housiko_myads_change_btns"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfoTab;
