import { Drawer, Input, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SvgIcon } from "../Design/SvgIcon";
import {
  FloorDropdown,
  PriceDropdown,
  ProfileDropdown,
  TotalRoomDropdown,
  TypeDropdown,
} from "../Dropdowns/Dropdowns";
import {
  AlertModal,
  CityModal,
  CreateAccount,
  LoginModal,
  MoreFilterModal,
  SaveSearch,
} from "../Modals/Modals";
import en from "./en.json";
import hu_Hu from "./hu_Hu.json";

const { Option } = Select;

const Navbar = () => {
  const router = useRouter();
  const { pathname, query, asPath, locale } = useRouter();

  const isLoginVal = query.isLogin;
  console.log(locale);

  const t = locale === "en-GB" ? en : hu_Hu;
  console.log(locale);

  const pathToAvoid = ["/dashboard", "/dashboardagent", "/pricing"];

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isAlertModalOpen, setAlertModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isCityModalOpen, setCityModalOpen] = useState(false);
  const [moreFilterModal, setMoreFilterModal] = useState(false);
  const [saveSearch, setSaveSearch] = useState(false);

  const changeLanguage = (e) => {
    const locale = e;
    router.push({ pathname, query }, asPath, { locale });
  };

  console.log(pathname);
  // Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Drawer

  const showLoginModal = () => {
    setLoginModalOpen(true);
  };
  const showCreateModal = () => {
    setCreateModalOpen(true);
    setLoginModalOpen(false);
    setAlertModalOpen(false);
  };
  const showCityModal = () => {
    setCityModalOpen(true);
  };
  const showCreateAlertModal = () => {
    setAlertModalOpen(true);
  };

  const handleCancel = () => {
    setLoginModalOpen(false);
    setCreateModalOpen(false);
    setCityModalOpen(false);
    setMoreFilterModal(false);
    setAlertModalOpen(false);
    setSaveSearch(false);
  };

  // Price Dropdown
  const NavDrawerBtn = () => {
    return (
      <button className="_myinfo_navbar_btn _myinfo_navbar_btn2">
        <SvgIcon iconType={"close"} />
      </button>
    );
  };
  // console.log(isLoginVal);
  // const [getOption] = useSearchParams();
  const isOption = query.option;
  const [option, setOption] = useState(isOption);

  const changeOption = (value: string) => {
    console.log("hello", value);
    setOption(value);
  };

  useEffect(() => {
    setOption(isOption);
  }, [isOption]);

  if (pathname === "/listproperty") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light _navbar_wrap">
        <div className="container-fluid">
          <Link href={"/"}>
            <a className="navbar-brand _navbar_logo">
              <Image
                src="assets/images/logo.svg"
                className="_navbar_logo_img"
                alt="logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 _navbar_ul2">
              <li className="nav-item">
                <div className="nav-link _navbar_btn _navbar_btn3">
                  <Link href="/myinfo?mytab=message">
                    <a>
                      <span className="_housiko_listing_card_item_bottom_btn_ic">
                        <SvgIcon iconType={"chat"} color={"#000"} />
                      </span>
                    </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link _navbar_btn _navbar_btn3">
                  <Link href="/myinfo?mytab=alert">
                    <a>
                      <span className="_navbar_btn_ic">
                        <SvgIcon iconType={"noti"} />
                      </span>
                    </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  href="/myinfo?mytab=fav"
                  className="nav-link _navbar_btn _navbar_btn3"
                >
                  <SvgIcon iconType={"fav"} color={"#A32C2C"} />
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link _navbar_btn3 myinfo_navbar_btn">
                  <Select
                    defaultValue={`eur`}
                    suffixIcon={
                      <SvgIcon w={14} h={14} iconType={"caret-down"} />
                    }
                    style={{
                      width: "75px",
                    }}
                  >
                    <Option value="eur" label="EUR">
                      <span className="_myinfo_select_currency">EUR</span>
                    </Option>
                    <Option value="huf" label="HUF">
                      <span className="_myinfo_select_currency">HUF</span>
                    </Option>
                    <Option value="usd" label="USD">
                      <span className="_myinfo_select_currency">USD</span>
                    </Option>
                  </Select>
                </button>
              </li>
              <li className="nav-item">
                <Link href="/ListProperty" passHref>
                  <a className="nav-link _navbar_btn _myinfo_navbar_btn_list _navbar_link">
                    List Your Property For FREE
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <ProfileDropdown />
              </li>
              <li className="nav-item">
                <button className="nav-link _navbar_btn3">
                  <Select
                    defaultValue={`en-GB`}
                    suffixIcon={""}
                    style={{
                      paddingRight: 0,
                      width: "auto",
                    }}
                  >
                    <Option value="en-GB" label="english">
                      <div className="option-label-item d-flex">
                        <span
                          className="_navbar_btn3_flag_wrap"
                          role="img"
                          aria-label="england"
                        >
                          <img
                            src="assets/images/engflag.png"
                            alt=""
                            className="_navbar_btn3_flag"
                          />
                        </span>
                      </div>
                    </Option>
                    <Option value="hu_Hu" label="hungarian">
                      <div className="option-label-item d-flex">
                        <span
                          className="_navbar_btn3_flag_wrap"
                          role="img"
                          aria-label="england"
                        >
                          <img
                            src="assets/images/hungflag.png"
                            alt=""
                            className="_navbar_btn3_flag"
                          />
                        </span>
                      </div>
                    </Option>
                  </Select>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <LoginModal
          showCreate={showCreateModal}
          open={isLoginModalOpen}
          cancel={handleCancel}
        />
        <CreateAccount open={isCreateModalOpen} cancel={handleCancel} />
      </nav>
    );
  } else if (pathname === "/listing") {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light _navbar_wrap">
          <div className="container-fluid">
            <button
              onClick={() => setDrawerOpen(true)}
              className="_myinfo_navbar_btn"
            >
              <SvgIcon iconType={"menu"} />
            </button>
            <Link href={"/"} className="navbar-brand _navbar_logo">
              <img
                src="assets/images/logo.svg"
                className="_navbar_logo_img"
                alt="logo"
              />
            </Link>
            <div className="_housiko_listing_top_filter _navbar_btn3 _housiko_listing_nav_filter">
              <Select
                defaultValue="Home"
                suffixIcon={
                  <SvgIcon
                    iconType={"caret-down"}
                    w={14}
                    h={14}
                    color={"#FFBF00"}
                  />
                }
                dropdownStyle={{
                  width: 100,
                }}
              >
                <Option value="Home">Home</Option>
                <Option value="Garage">Garage</Option>
                <Option value="Land">Land</Option>
                <Option value="Local">Local</Option>
                <Option value="Office">Office</Option>
                <Option value="Store room">Store room</Option>
              </Select>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="_housiko_myads_select _housiko_listing_nav_select _housiko_myads_search_list_space _nav_buy_select">
                <Select
                  defaultValue={option ? option : "buy"}
                  style={{
                    width: 80,
                  }}
                  suffixIcon={<SvgIcon iconType={"caret-down"} w={14} h={14} />}
                  onSelect={changeOption}
                  value={option}
                >
                  <Option value="buy">{t.buy}</Option>
                  <Option value="rent">Rent</Option>
                </Select>
              </div>
              <div className="_housiko_listing_nav_city_select_wrap">
                <ul
                  className="_housiko_listing_nav_city_select_ul"
                  onClick={showCityModal}
                >
                  <li className="_housiko_listing_nav_city_select_li">
                    <button className="_housiko_listing_nav_city_select_btn">
                      <span className="_housiko_listing_nav_city_select_txt">
                        District I
                      </span>
                      <span className="_housiko_listing_nav_city_select_ic">
                        <SvgIcon iconType={"close-round"} />
                      </span>
                    </button>
                  </li>
                  <li className="_housiko_listing_nav_city_select_li">
                    <button className="_housiko_listing_nav_city_select_btn">
                      <span className="_housiko_listing_nav_city_select_txt">
                        District II
                      </span>
                      <span className="_housiko_listing_nav_city_select_ic">
                        <SvgIcon iconType={"close-round"} />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 _navbar_ul2">
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=message"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <span className="_housiko_listing_card_item_bottom_btn_ic">
                      <SvgIcon iconType={"chat"} color={"#000"} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=alert"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <span className="_navbar_btn_ic">
                      <SvgIcon iconType={"noti"} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=fav"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <SvgIcon iconType={"fav"} color={"#A32C2C"} />
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3 myinfo_navbar_btn">
                    <Select
                      defaultValue={`eur`}
                      suffixIcon={
                        <SvgIcon w={14} h={14} iconType={"caret-down"} />
                      }
                      style={{
                        width: "75px",
                      }}
                    >
                      <Option value="eur" label="EUR">
                        <span className="_myinfo_select_currency">EUR</span>
                      </Option>
                      <Option value="huf" label="HUF">
                        <span className="_myinfo_select_currency">HUF</span>
                      </Option>
                      <Option value="usd" label="USD">
                        <span className="_myinfo_select_currency">USD</span>
                      </Option>
                    </Select>
                  </button>
                </li>
                <li className="nav-item">
                  <Link
                    href="/ListProperty"
                    className="nav-link _navbar_btn _navbar_btn_list _navbar_link"
                  >
                    <a></a>
                    List Your Property For FREE
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link _navbar_btn"
                    onClick={showLoginModal}
                  >
                    <span className="_navbar_btn_ic">
                      <SvgIcon iconType={"user"} />
                    </span>
                    <span className="_navbar_btn_txt">Log In</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3">
                    <Select
                      defaultValue={`en-GB`}
                      suffixIcon={""}
                      style={{
                        paddingRight: 0,
                        width: "auto",
                      }}
                    >
                      <Option value="en-GB" label="english">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/engflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                      <Option value="hu_Hu" label="hungarian">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/hungflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                    </Select>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="_nav_drawer_wrap">
          <Drawer
            closable
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            placement="left"
            closeIcon={<NavDrawerBtn />}
          >
            <div className="_housiko_drawer_ul">
              <div className="_housiko_drawer_ul1">
                <div
                  className="_housiko_drawer_li"
                  onClick={() => changeOption("buy")}
                >
                  <Link href="/listing?option=buy">{t.buy}</Link>
                </div>
                <div
                  className="_housiko_drawer_li"
                  onClick={() => changeOption("rent")}
                >
                  <Link href="/listing?option=rent">Rent</Link>
                </div>
                <div className="_housiko_drawer_li">Individuals</div>
                <div className="_housiko_drawer_li _housiko_list_prop_main_tab_come">
                  Professionals
                  <span className="_housiko_drawer_li_tab_come_box">
                    <p className="_housiko_list_prop_main_tab_come_box_txt">
                      coming soon
                    </p>
                  </span>
                </div>
                <div className="_housiko_drawer_li">Blog</div>
              </div>
              <div className="_housiko_drawer_ul2">
                <button
                  className="nav-link _navbar_btn"
                  onClick={showLoginModal}
                >
                  <span className="_navbar_btn_ic">
                    <SvgIcon iconType={"user"} />
                  </span>
                  <span className="_navbar_btn_txt">Log In</span>
                </button>
              </div>
            </div>
          </Drawer>
        </div>
        <div className="_housiko_listing_nav_select_wrap">
          <ul className="_housiko_listing_nav_select_ul d-flex">
            <li className="_housiko_listing_nav_select_li">
              <div className="_housiko_listing_nav_dropdown_wrap _housiko_listing_nav_select _housiko_myads_search_list_space">
                <TypeDropdown />
              </div>
            </li>
            <li className="_housiko_listing_nav_select_li">
              <div className="_housiko_listing_nav_dropdown_wrap _housiko_listing_nav_select _housiko_myads_search_list_space">
                <PriceDropdown />
              </div>
            </li>
            <li className="_housiko_listing_nav_select_li">
              <div className="_housiko_listing_nav_dropdown_wrap _housiko_listing_nav_select _housiko_myads_search_list_space">
                <FloorDropdown />
              </div>
            </li>
            <li className="_housiko_listing_nav_select_li">
              <div className="_housiko_listing_nav_dropdown_wrap _housiko_listing_nav_select _housiko_myads_search_list_space">
                <TotalRoomDropdown />
              </div>
            </li>
            <li className="_housiko_listing_nav_select_li">
              <div className="_housiko_listing_nav_dropdown_wrap">
                <div
                  onClick={() => setMoreFilterModal(true)}
                  className="_housiko_listing_nav_dropdown _nav_more_btn"
                >
                  <span className="_more_ic">
                    <SvgIcon iconType={"more"} />
                  </span>
                  <p className="_housiko_listing_nav_dropdown_txt">More</p>
                  {/* <span className="_housiko_listing_nav_dropdown_txt _more_counted">
                                        (2)
                                    </span> */}
                </div>
              </div>
            </li>
          </ul>
          <div className="_housiko_listing_nav_tag_wrap">
            <ul className="_housiko_listing_nav_tag_ul">
              <li className="_housiko_listing_nav_tag_li">
                <span className="_housiko_listing_nav_tag_li_txt">Airbnb</span>
                <span className="_housiko_listing_nav_tag_li_ic">
                  <SvgIcon iconType={"close-round"} />
                </span>
              </li>
              <li className="_housiko_listing_nav_tag_li">
                <span className="_housiko_listing_nav_tag_li_txt">Parking</span>
                <span className="_housiko_listing_nav_tag_li_ic">
                  <SvgIcon iconType={"close-round"} />
                </span>
              </li>
              <li className="_housiko_listing_nav_tag_li">
                <span className="_housiko_listing_nav_tag_li_txt">Street</span>
                <span className="_housiko_listing_nav_tag_li_ic">
                  <SvgIcon iconType={"close-round"} />
                </span>
              </li>
            </ul>
          </div>
          <div className="_housiko_listing_nav_search_btn_wrap">
            <ul className="_housiko_listing_nav_search_btn_ul">
              <li className="_housiko_listing_nav_search_btn_li">
                <button
                  className="_housiko_listing_nav_search_btn _housiko_listing_nav_alert_btn"
                  onClick={showCreateAlertModal}
                >
                  <span className="_housiko_listing_nav_search_btn_ic">
                    <SvgIcon iconType={"noti"} />
                  </span>
                  <span className="_housiko_listing_nav_search_btn_txt">
                    Create Alert
                  </span>
                </button>
              </li>
              <li className="_housiko_listing_nav_search_btn_li">
                <button
                  onClick={() => setSaveSearch(true)}
                  className="_housiko_listing_nav_search_btn"
                >
                  <span className="_housiko_listing_nav_search_btn_txt">
                    Save Search
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <SaveSearch open={saveSearch} cancel={handleCancel} />
        <AlertModal open={isAlertModalOpen} cancel={handleCancel} />
        <LoginModal
          showCreate={showCreateModal}
          open={isLoginModalOpen}
          cancel={handleCancel}
        />
        <CreateAccount open={isCreateModalOpen} cancel={handleCancel} />
        <CityModal open={isCityModalOpen} cancel={handleCancel} />
        <MoreFilterModal open={moreFilterModal} cancel={handleCancel} />
      </>
    );
  } else if (pathname === "/pricing" && isLoginVal) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light _navbar_wrap">
          <div className="container-fluid">
            <Link href={"/"} className="navbar-brand _navbar_logo">
              <img
                src="assets/images/logo.svg"
                className="_navbar_logo_img"
                alt="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 _navbar_ul">
                <li className="nav-item _navbar_pricing_li _navbar_li">
                  <div className="_housiko_hero_content_tab_search_wrap">
                    <Input
                      className="_housiko_hero_content_tab_input"
                      placeholder="find home"
                    />
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 _navbar_ul2">
                <li className="nav-item">
                  <ProfileDropdown />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  } else if (pathToAvoid.includes(pathname)) {
    return <></>;
  } else if (pathname === "/myinfo") {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light _navbar_wrap">
          <div className="container-fluid">
            <button
              onClick={() => setDrawerOpen(true)}
              className="_myinfo_navbar_btn"
            >
              <SvgIcon iconType={"menu"} />
            </button>
            <Link href={"/"} className="navbar-brand _navbar_logo">
              <img
                src="assets/images/logo.svg"
                className="_navbar_logo_img"
                alt="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 _navbar_ul">
                <li className="nav-item _navbar_pricing_li _navbar_li">
                  <div className="_housiko_hero_content_tab_search_wrap">
                    <Input
                      className="_housiko_hero_content_tab_input _housiko_myinfo_inpt"
                      placeholder="find home"
                    />
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 _navbar_ul2 _navbar_ul22">
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=message"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <span className="_housiko_listing_card_item_bottom_btn_ic">
                      <SvgIcon iconType={"chat"} color={"#000"} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=alert"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <span className="_navbar_btn_ic">
                      <SvgIcon iconType={"noti"} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=fav"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <SvgIcon iconType={"fav"} color={"#A32C2C"} />
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3 myinfo_navbar_btn">
                    <Select
                      defaultValue={`eur`}
                      suffixIcon={
                        <SvgIcon w={14} h={14} iconType={"caret-down"} />
                      }
                      style={{
                        width: "75px",
                      }}
                    >
                      <Option value="eur" label="EUR">
                        <span className="_myinfo_select_currency">EUR</span>
                      </Option>
                      <Option value="huf" label="HUF">
                        <span className="_myinfo_select_currency">HUF</span>
                      </Option>
                      <Option value="usd" label="USD">
                        <span className="_myinfo_select_currency">USD</span>
                      </Option>
                    </Select>
                  </button>
                </li>
                <li className="nav-item">
                  <Link
                    href="/ListProperty"
                    className="nav-link _navbar_btn _myinfo_navbar_btn_list _navbar_link"
                  >
                    List Your Property For FREE
                  </Link>
                </li>
                <li className="nav-item">
                  <ProfileDropdown />
                </li>
                {/* <li className="nav-item">
                                    <button className="nav-link _navbar_btn3 myinfo_navbar_btn">
                                        <Select
                                            defaultValue={`eng`}
                                            suffixIcon={null}
                                            style={{
                                                width: 60,
                                            }}
                                        >
                                            <Option value="eng" label="EFLAG">
                                                <img src="assets/images/engflag.png" alt="" className="myinfo_navbar_flag" />
                                            </Option>
                                            <Option value="hung" label="HFLAG">
                                                <img src="assets/images/hungflag.png" alt="" className="myinfo_navbar_flag" />
                                            </Option>
                                        </Select>
                                    </button>
                                </li> */}
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3">
                    <Select
                      defaultValue={`en-GB`}
                      onChange={changeLanguage}
                      suffixIcon={""}
                      style={{
                        paddingRight: 0,
                        width: "auto",
                      }}
                    >
                      <Option value="en-GB" label="english">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/engflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                      <Option value="hu_Hu" label="hungarian">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/hungflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                    </Select>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="_nav_drawer_wrap">
          <Drawer
            closable
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            placement="left"
            closeIcon={<NavDrawerBtn />}
          >
            <div className="_housiko_drawer_ul">
              <div className="_housiko_drawer_ul1">
                <div
                  className="_housiko_drawer_li"
                  onClick={() => changeOption("buy")}
                >
                  <Link href="/listing?option=buy">{t.buy}</Link>
                </div>
                <div
                  className="_housiko_drawer_li"
                  onClick={() => changeOption("rent")}
                >
                  <Link href="/listing?option=rent">Rent</Link>
                </div>
                <div className="_housiko_drawer_li">Individuals</div>
                <div className="_housiko_drawer_li _housiko_list_prop_main_tab_come">
                  Professionals
                  <span className="_housiko_drawer_li_tab_come_box">
                    <p className="_housiko_list_prop_main_tab_come_box_txt">
                      coming soon
                    </p>
                  </span>
                </div>
                <div className="_housiko_drawer_li">Blog</div>
              </div>
              <div className="_housiko_drawer_ul2">
                <button
                  className="nav-link _navbar_btn"
                  onClick={showLoginModal}
                >
                  <span className="_navbar_btn_ic">
                    <SvgIcon iconType={"user"} />
                  </span>
                  <span className="_navbar_btn_txt">Log In</span>
                </button>
              </div>
            </div>
          </Drawer>
        </div>
        <LoginModal
          showCreate={showCreateModal}
          open={isLoginModalOpen}
          cancel={handleCancel}
        />
        <CreateAccount open={isCreateModalOpen} cancel={handleCancel} />
      </>
    );
  } else if (pathname === "/agentlist") {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light _navbar_wrap">
          <div className="container-fluid">
            <Link href={"/"} className="navbar-brand _navbar_logo">
              <img
                src="assets/images/logo.svg"
                className="_navbar_logo_img"
                alt="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 _navbar_ul2">
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=message"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <span className="_housiko_listing_card_item_bottom_btn_ic">
                      <SvgIcon iconType={"chat"} color={"#000"} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=alert"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <span className="_navbar_btn_ic">
                      <SvgIcon iconType={"noti"} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/myinfo?mytab=fav"
                    className="nav-link _navbar_btn _navbar_btn3"
                  >
                    <SvgIcon iconType={"fav"} color={"#A32C2C"} />
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3 myinfo_navbar_btn">
                    <Select
                      defaultValue={`eur`}
                      suffixIcon={
                        <SvgIcon w={14} h={14} iconType={"caret-down"} />
                      }
                      style={{
                        width: "75px",
                      }}
                    >
                      <Option value="eur" label="EUR">
                        <span className="_myinfo_select_currency">EUR</span>
                      </Option>
                      <Option value="huf" label="HUF">
                        <span className="_myinfo_select_currency">HUF</span>
                      </Option>
                      <Option value="usd" label="USD">
                        <span className="_myinfo_select_currency">USD</span>
                      </Option>
                    </Select>
                  </button>
                </li>
                <li className="nav-item">
                  <Link
                    href="/ListProperty"
                    className="nav-link _navbar_btn _navbar_btn_list _navbar_link"
                  >
                    <a>List Your Property For FREE</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <ProfileDropdown />
                </li>
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3">
                    <Select
                      defaultValue={`en-GB`}
                      suffixIcon={""}
                      onChange={changeLanguage}
                      style={{
                        paddingRight: 0,
                        width: "auto",
                      }}
                    >
                      <Option value="en-GB" label="english">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/engflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                      <Option value="hu_Hu" label="hungarian">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/hungflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                    </Select>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <LoginModal
          showCreate={showCreateModal}
          open={isLoginModalOpen}
          cancel={handleCancel}
        />
        <CreateAccount open={isCreateModalOpen} cancel={handleCancel} />
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light _navbar_wrap">
          <div className="container-fluid">
            <Link href={"/"}>
              <a>
                <div className="navbar-brand _navbar_logo">
                  <img
                    src="assets/images/logo.svg"
                    className="_navbar_logo_img"
                    alt="logo"
                  />
                </div>
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 _navbar_ul">
                <li className="nav-item _navbar_li">
                  {/* <a className="nav-link _navbar_link" href="#0">Buy</a> */}
                  <Link href="/listing?option=buy">
                    <a>
                      <div className="nav-link _navbar_link">{t.buy}</div>
                    </a>
                  </Link>
                </li>
                <li className="nav-item _navbar_li">
                  <Link href="/listing?option=rent">
                    <a>
                      <div className="nav-link _navbar_link">Rent</div>
                    </a>
                  </Link>
                </li>
                <li className="nav-item _navbar_li">
                  <a className="nav-link _navbar_link" href="#0">
                    Individuals
                  </a>
                </li>
                <li className="nav-item _navbar_li">
                  <a className="nav-link _navbar_link" href="#0">
                    Professionals
                  </a>
                </li>
                <li className="nav-item _navbar_li">
                  <a className="nav-link _navbar_link" href="#0">
                    Blog
                  </a>
                </li>
                {/* <li className="nav-item _navbar_li">
                                    <Link to='/myinfo' className="nav-link _navbar_link">My Info</Link>
                                </li> */}
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 _navbar_ul2">
                <li className="nav-item">
                  <Link href="/myinfo?mytab=message">
                    <a>
                      <div className="nav-link _navbar_btn _navbar_btn3">
                        <span className="_housiko_listing_card_item_bottom_btn_ic">
                          <SvgIcon iconType={"chat"} color={"#000"} />
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/myinfo?mytab=alert">
                    <a>
                      <div className="nav-link _navbar_btn _navbar_btn3">
                        <span className="_navbar_btn_ic">
                          <SvgIcon iconType={"noti"} />
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/myinfo?mytab=fav">
                    <a>
                      <div className="nav-link _navbar_btn _navbar_btn3">
                        <SvgIcon iconType={"fav"} color={"#A32C2C"} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3 myinfo_navbar_btn">
                    <Select
                      defaultValue={`eur`}
                      suffixIcon={
                        <SvgIcon w={14} h={14} iconType={"caret-down"} />
                      }
                      style={{
                        width: "75px",
                      }}
                    >
                      <Option value="eur" label="EUR">
                        <span className="_myinfo_select_currency">EUR</span>
                      </Option>
                      <Option value="huf" label="HUF">
                        <span className="_myinfo_select_currency">HUF</span>
                      </Option>
                      <Option value="usd" label="USD">
                        <span className="_myinfo_select_currency">USD</span>
                      </Option>
                    </Select>
                  </button>
                  {/* <button className="nav-link _navbar_btn3">
                                        <Select
                                            defaultValue={`english`}
                                            suffixIcon={<SvgIcon w={14} h={14} iconType={'caret-down'} />}
                                            style={{
                                                minWidth: 130,
                                                width: 'auto'
                                            }}
                                        >
                                            <Option value="english" label="ENG">
                                                <div className="option-label-item d-flex">
                                                    <span className='_navbar_btn3_flag_wrap' role="img" aria-label="england">
                                                        <img src="assets/images/engflag.png" alt="" className="_navbar_btn3_flag" />
                                                    </span>
                                                    ENG
                                                </div>
                                            </Option>
                                            <Option value="usa" label="USA">
                                                <div className="option-label-item d-flex">
                                                    <span className='_navbar_btn3_flag_wrap' role="img" aria-label="england">
                                                        <img src="assets/images/hungflag.png" alt="" className="_navbar_btn3_flag" />
                                                    </span>
                                                    Hungarian
                                                </div>
                                            </Option>
                                        </Select>
                                    </button> */}
                </li>
                <li className="nav-item">
                  <Link href="/ListProperty">
                    <a>
                      <div className="nav-link _navbar_btn _navbar_btn_list _navbar_link">
                        List Your Property For FREE
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link _navbar_btn"
                    onClick={showLoginModal}
                  >
                    <span className="_navbar_btn_ic">
                      <SvgIcon iconType={"user"} />
                    </span>
                    <span className="_navbar_btn_txt">Log In</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link _navbar_btn3">
                    <Select
                      defaultValue={`en-GB`}
                      suffixIcon={""}
                      onChange={changeLanguage}
                      style={{
                        paddingRight: 0,
                        width: "auto",
                      }}
                    >
                      <Option value="en-GB" label="english">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/engflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                      <Option value="hu_Hu" label="hungarian">
                        <div className="option-label-item d-flex">
                          <span
                            className="_navbar_btn3_flag_wrap"
                            role="img"
                            aria-label="england"
                          >
                            <img
                              src="assets/images/hungflag.png"
                              alt=""
                              className="_navbar_btn3_flag"
                            />
                          </span>
                        </div>
                      </Option>
                    </Select>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <LoginModal
          showCreate={showCreateModal}
          open={isLoginModalOpen}
          cancel={handleCancel}
        />
        <CreateAccount open={isCreateModalOpen} cancel={handleCancel} />
      </>
    );
  }
};

export default Navbar;
