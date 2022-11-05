import { Button, Dropdown, Menu, Select } from "antd";
import Link from "next/link";
import { useState } from "react";
import { SvgIcon } from "../Design/SvgIcon";
import {
  FloorDropdown,
  PriceDropdown,
  TotalRoomDropdown,
  TypeDropdown,
} from "../Dropdowns/Dropdowns";
import { CityModal } from "../Modals/Modals";
const { Option } = Select;

const Hero = () => {
  const [isActive, setIsActive] = useState(1);
  const [cityModal, setCityModal] = useState(false);
  const menu = (
    <Menu
      items={[
        {
          label: <a href="#0">Home</a>,
          key: "0",
        },
        {
          label: <a href="#0">Garage</a>,
          key: "1",
        },
        {
          label: <a href="#0">Land</a>,
          key: "3",
        },
        {
          label: <a href="#0">Local</a>,
          key: "4",
        },
        {
          label: <a href="#0">Office</a>,
          key: "5",
        },
        {
          label: <a href="#0">Store Room</a>,
          key: "6",
        },
      ]}
    />
  );
  return (
    <div className="_housiko_hero_wrapper">
      <div className="_housiko_hero_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_hero_content_wrap">
                <div className="_housiko_hero_content">
                  <div className="_housiko_hero_content_txt">
                    <h1 className="_housiko_hero_content_title">
                      Your{" "}
                      <span className="_housiko_hero_content_title_yl">
                        dream{" "}
                        <Dropdown overlay={menu} trigger={["click"]}>
                          <a
                            href="#0"
                            className="_housiko_hero_content_title _housiko_hero_content_title_a _housiko_hero_content_title_yl  d-inline-flex align-items-center"
                          >
                            Home
                            <span className="d-inline-block mt-1 ms-1">
                              <SvgIcon
                                iconType={"caret-down"}
                                w={12}
                                h={7}
                                color={"#FFBF00"}
                              />
                            </span>
                          </a>
                        </Dropdown>
                      </span>{" "}
                      awaits here
                    </h1>
                  </div>
                  <div className="_housiko_hero_content_tab_wrap">
                    <ul className="_housiko_hero_content_tab_ul">
                      <li
                        onClick={() => setIsActive(1)}
                        className={`_housiko_hero_content_tab_li ${
                          isActive == 1 ? "_active" : ""
                        }`}
                      >
                        Buy
                      </li>
                      <li
                        onClick={() => setIsActive(2)}
                        className={`_housiko_hero_content_tab_li ${
                          isActive == 2 ? "_active" : ""
                        }`}
                      >
                        Rent
                      </li>
                      {/* <li className="_housiko_hero_content_tab_li">
                                                Share
                                            </li> */}
                    </ul>
                    <div className="_housiko_hero_content_tab_content_wrap">
                      <div className="_housiko_hero_content_tab_content">
                        <div className="_housiko_hero_content_tab_type_wrap">
                          <TypeDropdown />
                        </div>
                        <div className="_housiko_hero_content_tab_search_wrap">
                          <Button
                            onClick={() => setCityModal(true)}
                            className="_housiko_hero_content_tab_input _housiko_hero_content_tab_input_btn"
                          >
                            Find home in town
                          </Button>
                        </div>
                        <div className="_housiko_hero_content_tab_price_wrap">
                          <PriceDropdown />
                        </div>
                        <div className="_housiko_hero_content_tab_floor_wrap">
                          <FloorDropdown />
                        </div>
                        <div className="_housiko_hero_content_tab_room_wrap">
                          <TotalRoomDropdown />
                        </div>
                        <div className="_housiko_hero_content_tab_btn_wrap">
                          <div className="_housiko_hero_content_tab_search_btn_wrap d-inline-flex">
                            <Link
                              href="/listing"
                              className="_housiko_hero_content_tab_search_btn"
                            >
                              <span>
                                <span className="_housiko_hero_content_tab_search_btn_ic">
                                  <SvgIcon iconType={"search"} />
                                </span>
                                Search
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_hero_content_draw_wrap">
                    <p className="_housiko_hero_content_draw_txt">
                      <span>New:</span> You can now search your prefered area by
                    </p>
                    <Link href="/listing?tab=map" className="_city_map_btn2">
                      <span>
                        <span className="_housiko_hero_content_tab_search_btn_ic">
                          <SvgIcon iconType={"hand-draw"} />
                        </span>
                        Draw on Map
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CityModal open={cityModal} cancel={() => setCityModal(false)} />
    </div>
  );
};

export default Hero;
