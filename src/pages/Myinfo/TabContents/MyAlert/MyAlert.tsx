import { useState } from "react";
import { SvgIcon } from "../../../../components/Design/SvgIcon";
import { AlertModal } from "../../../../components/Modals/Modals";

function MyAlert() {
  const [isAlertModalOpen, setAlertModalOpen] = useState(false);

  return (
    <div className="_housiko_myads_search_wrapper">
      <div className="_housiko_myads_search_line"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_housiko_myalerts_card_wrap">
              <div className="_housiko_myalerts_card_top">
                <h6 className="_housiko_myalerts_card_txt m-0">My Alerts</h6>
                <button
                  className="_housiko_listing_nav_search_btn _housiko_listing_nav_alert_btn"
                  onClick={() => setAlertModalOpen(true)}
                >
                  <span className="_housiko_listing_nav_search_btn_ic">
                    <SvgIcon iconType={"noti"} />
                  </span>
                  <span className="_housiko_listing_nav_search_btn_txt">
                    Create Alert
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="_housiko_myalerts_card">
              <div className="_housiko_myalerts_card_cont">
                <p className="_housiko_myalerts_card_cont1">Madrid Capital</p>
                <p className="_housiko_myalerts_card_cont2">Buy, home</p>
              </div>

              <div className="_housiko_myalerts_card_bottm_cont_links">
                <div className="_housiko_myalerts_card_bottm_lft_cont">
                  <p className="_housiko_myalerts_card_bottm_lft_cont1">
                    You are receving updates:
                  </p>
                  <p className="_housiko_myalerts_card_bottm_lft_cont2">
                    Instantly to your e-mail and mobile
                  </p>
                </div>
                <div className="_housiko_myalerts_card_bottm_left_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_cont_link1"
                  >
                    Change Frequency
                  </a>
                </div>
              </div>

              <div className="_housiko_myalerts_card_bottm_crud_links">
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link1"
                  >
                    See result
                  </a>
                </div>
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link2"
                  >
                    <SvgIcon iconType={"advert"} />
                  </a>
                </div>
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link3"
                  >
                    <SvgIcon iconType={"pencil"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="_housiko_myalerts_card">
              <div className="_housiko_myalerts_card_cont">
                <p className="_housiko_myalerts_card_cont1">Madrid Capital</p>
                <p className="_housiko_myalerts_card_cont2">Buy, home</p>
              </div>

              <div className="_housiko_myalerts_card_bottm_cont_links">
                <div className="_housiko_myalerts_card_bottm_lft_cont">
                  <p className="_housiko_myalerts_card_bottm_lft_cont1">
                    You are receving updates:
                  </p>
                  <p className="_housiko_myalerts_card_bottm_lft_cont2">
                    Instantly to your e-mail and mobile
                  </p>
                </div>
                <div className="_housiko_myalerts_card_bottm_left_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_cont_link1"
                  >
                    Change Frequency
                  </a>
                </div>
              </div>

              <div className="_housiko_myalerts_card_bottm_crud_links">
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link1"
                  >
                    See result
                  </a>
                </div>
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link2"
                  >
                    <SvgIcon iconType={"advert"} />
                  </a>
                </div>
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link3"
                  >
                    <SvgIcon iconType={"pencil"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="_housiko_myalerts_card">
              <div className="_housiko_myalerts_card_cont">
                <p className="_housiko_myalerts_card_cont1">Madrid Capital</p>
                <p className="_housiko_myalerts_card_cont2">Buy, home</p>
              </div>

              <div className="_housiko_myalerts_card_bottm_cont_links">
                <div className="_housiko_myalerts_card_bottm_lft_cont">
                  <p className="_housiko_myalerts_card_bottm_lft_cont1">
                    You are receving updates:
                  </p>
                  <p className="_housiko_myalerts_card_bottm_lft_cont2">
                    Instantly to your e-mail and mobile
                  </p>
                </div>
                <div className="_housiko_myalerts_card_bottm_left_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_cont_link1"
                  >
                    Change Frequency
                  </a>
                </div>
              </div>

              <div className="_housiko_myalerts_card_bottm_crud_links">
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link1"
                  >
                    See result
                  </a>
                </div>
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link2"
                  >
                    <SvgIcon iconType={"advert"} />
                  </a>
                </div>
                <div className="_housiko_myalerts_card_bottm_crud_link">
                  <a
                    href="#0"
                    className="_housiko_myalerts_card_bottm_crud_link3"
                  >
                    <SvgIcon iconType={"pencil"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertModal
        open={isAlertModalOpen}
        cancel={() => setAlertModalOpen(false)}
      />
    </div>
  );
}

export default MyAlert;
