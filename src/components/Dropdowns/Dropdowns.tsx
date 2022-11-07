import { Checkbox, Dropdown, Popover, Select } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SvgIcon } from "../Design/SvgIcon";

const { Option } = Select;

// Total Room Dropdown
export const TotalRoomDropdown = () => {
  const [room, setRoom] = useState("");

  const [exactNum, setExactNum] = useState(false);
  const totalRoom = () => {
    return (
      <>
        <div className="_dropdown_price_wrap">
          <div className="_dropdown_price_inner">
            <h4 className="_dropdown_price_title">Total Rooms</h4>
            <div className="_dropdown_price_content">
              <div className="_housiko_list_prop_characterstics_input_wrap m-0">
                <div className="_housiko_list_prop_characterstics_input_inner">
                  <ul className="_housiko_list_prop_tab_ul">
                    <li
                      onClick={() => setRoom("")}
                      className={`_housiko_list_prop_tab_li ${
                        room == "" ? "_active" : ""
                      }`}
                    >
                      All
                    </li>
                    <li
                      onClick={() => setRoom("1")}
                      className={`_housiko_list_prop_tab_li ${
                        room == "1" ? "_active" : ""
                      }`}
                    >
                      1{!exactNum ? "+" : ""}
                    </li>
                    <li
                      onClick={() => setRoom("2")}
                      className={`_housiko_list_prop_tab_li ${
                        room == "2" ? "_active" : ""
                      }`}
                    >
                      2{!exactNum ? "+" : ""}
                    </li>
                    <li
                      onClick={() => setRoom("3")}
                      className={`_housiko_list_prop_tab_li ${
                        room == "3" ? "_active" : ""
                      }`}
                    >
                      3{!exactNum ? "+" : ""}
                    </li>
                    <li
                      onClick={() => setRoom("4")}
                      className={`_housiko_list_prop_tab_li ${
                        room == "4" ? "_active" : ""
                      }`}
                    >
                      4{!exactNum ? "+" : ""}
                    </li>
                  </ul>
                </div>
                <Checkbox
                  onChange={() => setExactNum(!exactNum)}
                  className="_login_input_check _city_input_check_login_input_check _login_input_label"
                >
                  Exact Number
                </Checkbox>
              </div>
            </div>
            <div className="_dropdown_price_content_btn_wrap">
              <button className="_dropdown_price_content_btn">Apply</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Dropdown
      className="_housiko_listing_nav_dropdown _housiko_listing_floor_nav_dropdown"
      overlay={totalRoom}
      trigger={["click"]}
    >
      <p className="_housiko_listing_nav_dropdown_txt">
        {room.length > 0 && `${room}${!exactNum ? "+" : ""} `}Rooms
        <span className="_housiko_listing_nav_dropdown_ic">
          <SvgIcon iconType={"caret-down"} w={14} h={14} />
        </span>
      </p>
    </Dropdown>
  );
};

// Floor Area Dropdown

export const FloorDropdown = () => {
  const [floor, setFloor] = useState("");
  const [floorValue1, setFloorValue1] = useState("");
  const [floorValue2, setFloorValue2] = useState("");

  const changefloorValue1 = (value: any) => {
    setFloorValue1(value);
  };
  const changefloorValue2 = (value: any) => {
    setFloorValue2(value);
  };

  const getFloor = () => {
    setFloor(`${floorValue1} - ${floorValue2}`);
    if (floor == "Indifferent - Indifferent") {
      setFloor(``);
    }
  };

  const floorDrop = () => {
    return (
      <>
        <div className="_dropdown_price_wrap">
          <div className="_dropdown_price_inner">
            <h4 className="_dropdown_price_title">Floor Area</h4>
            <div className="_dropdown_price_content">
              <div className="_dropdown_price_content_input_wrap">
                <div className="_dropdown_price_content_input_inner _housiko_listing_floor_nav_drop_inner">
                  <label
                    htmlFor=""
                    className="_dropdown_price_content_input_label"
                  >
                    Min
                  </label>
                  <div className="_dropdown_price_content_input_select_wrap">
                    <Select
                      defaultValue="Ind"
                      className="_dropdown_price_content_input"
                      onSelect={changefloorValue1}
                    >
                      <Option value="Ind">Indifferent</Option>
                      <Option value="20">20 m2</Option>
                      <Option value="40">40 m2</Option>
                      <Option value="60">60 m2</Option>
                      <Option value="80">80 m2</Option>
                      <Option value="100">100 m2</Option>
                    </Select>
                  </div>
                </div>
                <div className="_dropdown_price_content_input_inner _housiko_listing_floor_nav_drop_inner">
                  <label
                    htmlFor=""
                    className="_dropdown_price_content_input_label"
                  >
                    Max
                  </label>
                  <div className="_dropdown_price_content_input_select_wrap">
                    <Select
                      defaultValue="Ind"
                      className="_dropdown_price_content_input"
                      onSelect={changefloorValue2}
                    >
                      <Option value="Ind">Indifferent</Option>
                      <Option value="20">20 m2</Option>
                      <Option value="40">40 m2</Option>
                      <Option value="60">60 m2</Option>
                      <Option value="80">80 m2</Option>
                      <Option value="100">100 m2</Option>
                      <Option value="120">120 m2</Option>
                      <Option value="140">140 m2</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="_dropdown_price_content_btn_wrap">
              <button
                onClick={getFloor}
                className="_dropdown_price_content_btn"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <Dropdown
      className="_housiko_listing_nav_dropdown _housiko_listing_floor_nav_dropdown"
      overlay={floorDrop}
      trigger={["click"]}
    >
      <p className="_housiko_listing_nav_dropdown_txt">
        {floor.length == 0 && "Floor Area"}
        {(floor.length != 0 && floor != "Ind - Ind" && floor) ||
          (floor == "Ind - Ind" && "Floor Area")}
        <span className="_housiko_listing_nav_dropdown_ic">
          <SvgIcon iconType={"caret-down"} w={14} h={14} />
        </span>
      </p>
    </Dropdown>
  );
};
// Type Dropdown

export const TypeDropdown = () => {
  const [typeArr, setTypeArr] = useState<any[]>([]);

  function checkHandler(e: any) {
    let val = e.target.value;

    let checked = e.target.checked;
    console.log(e.target.value);
    console.log(e.target);
    if (checked) {
      setTypeArr([...typeArr, val]);
      console.log(typeArr, "checked");
    } else {
      console.log(typeArr, "unchecked");
      // setCounts(typeArr.length);
    }
  }

  const [counts, setCounts] = useState(0);

  useEffect(() => {
    setCounts(typeArr.length);
  }, [typeArr, counts]);

  const data: any = {
    "All flats": [
      { id: 1, label: "Intermediate Floors", value: "sub-type-1" },
      { id: 2, label: "Apartment", value: "sub-type-2" },
      { id: 3, label: "Penthouse", value: "sub-type-3" },
      { id: 4, label: "Duplex apartment", value: "sub-type-4" },
      { id: 5, label: "Loft", value: "sub-type-5" },
      { id: 6, label: "Ground floor", value: "sub-type-6" },
      { id: 7, label: "Studio", value: "sub-type-7" },
    ],
    "All houses": [
      { id: 8, label: "House or chalet", value: "sub-type-1" },
      { id: 9, label: "Rural property", value: "sub-type-2" },
      { id: 10, label: "Penthouse", value: "sub-type-3" },
      { id: 11, label: "Single-family semi-detached", value: "sub-type-4" },
      { id: 12, label: "Loft", value: "sub-type-5" },
      { id: 13, label: "Ground floor", value: "sub-type-6" },
      { id: 14, label: "Studio", value: "sub-type-7" },
    ],
  };

  const typeDrop = () => {
    return (
      <>
        <div className="_dropdown_price_wrap _dropdown_type_wrap">
          <div className="_dropdown_price_inner _dropdown_type_inner _dropdown_type">
            <div className="_dropdown_type_content">
              <h4 className="_dropdown_price_title">Type of Construction</h4>
              <div className="_dropdown_type_content_ul_wrap">
                <ul className="_dropdown_type_content_ul">
                  <li className="_dropdown_type_content_li">
                    <Checkbox
                      checked
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      <span className="_login_input_label_txt">
                        All constuctions
                      </span>
                    </Checkbox>
                  </li>
                  <li className="_dropdown_type_content_li">
                    <ul className="_dropdown_type_content_ul_in">
                      <li className="_dropdown_type_content_li _dropdown_type_content_li_in">
                        <Checkbox
                          checked
                          className="_login_input_check _city_input_check_login_input_check _login_input_label"
                        >
                          <span className="_login_input_label_txt">
                            Second hand
                          </span>
                        </Checkbox>
                      </li>
                      <li className="_dropdown_type_content_li_in">
                        <Checkbox
                          checked
                          className="_login_input_check _city_input_check_login_input_check _login_input_label"
                        >
                          <span className="_login_input_label_txt">
                            New Contruction
                          </span>
                        </Checkbox>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="_dropdown_type_content">
                            <h4 className="_dropdown_price_title">
                                Type of home
                            </h4>
                            <div className="_dropdown_type_content_ul_wrap">
                                <ul className="_dropdown_type_content_ul">
                                    <li className="_dropdown_type_content_li">
                                        <Checkbox className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                            <span className="_login_input_label_txt">
                                                All flats
                                            </span>
                                        </Checkbox>
                                    </li>
                                    <li className="_dropdown_type_content_li">
                                        <ul className="_dropdown_type_content_ul_in">
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Intermediate Floors" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Intermediate Floors
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Apartment" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Apartment
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Penthouse" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Penthouse
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Duplex apartment" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Duplex apartment
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Loft" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Loft
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Ground floor" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Ground floor
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Studio" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Studio
                                                    </span>
                                                </Checkbox>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="_dropdown_type_content_li">
                                        <Checkbox className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                            <span className="_login_input_label_txt">
                                                All houses
                                            </span>
                                        </Checkbox>
                                    </li>
                                    <li className="_dropdown_type_content_li">
                                        <ul className="_dropdown_type_content_ul_in">
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="House or chalet" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        House or chalet
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Rural property" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Rural property
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Penthouse" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Penthouse
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Single-family" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Single-family
                                                        <br />
                                                        semi-detached
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Loft" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Loft
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Ground floor" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Ground floor
                                                    </span>
                                                </Checkbox>
                                            </li>
                                            <li className="_dropdown_type_content_li_in">
                                                <Checkbox value="Studio" onChange={checkHandler} className='_login_input_check _city_input_check_login_input_check _login_input_label'>
                                                    <span className="_login_input_label_txt">
                                                        Studio
                                                    </span>
                                                </Checkbox>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
            <div className="_dropdown_type_content">
              <h4 className="_dropdown_price_title">Type of home</h4>
              <div className="_dropdown_type_content_ul_wrap">
                <ul className="_dropdown_type_content_ul">
                  {Object.keys(data).map((type) => (
                    <>
                      <li className="_dropdown_type_content_li" key={type}>
                        <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                          <span className="_login_input_label_txt">{type}</span>
                        </Checkbox>
                      </li>
                      <li className="_dropdown_type_content_li">
                        <ul className="_dropdown_type_content_ul_in">
                          {data[type].map((subType: any) => (
                            <li
                              className="_dropdown_type_content_li_in"
                              key={subType.id}
                            >
                              <Checkbox
                                value={subType.value}
                                onChange={checkHandler}
                                className="_login_input_check _city_input_check_login_input_check _login_input_label"
                              >
                                <span className="_login_input_label_txt">
                                  {subType.label}
                                </span>
                              </Checkbox>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="_dropdown_price_content_btn_wrap">
            <button className="_dropdown_price_content_btn">Apply</button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Dropdown
        className="_housiko_listing_nav_dropdown"
        overlay={typeDrop}
        trigger={["click"]}
      >
        <p className="_housiko_listing_nav_dropdown_txt">
          {counts > 0 ? `(${counts})` : ""} Type
          <span className="_housiko_listing_nav_dropdown_ic">
            <SvgIcon iconType={"caret-down"} w={14} h={14} />
          </span>
        </p>
      </Dropdown>
    </>
  );
};

// Price Dropdow

export const PriceDropdown = () => {
  const [price, setPrice] = useState("");
  const [priceValue1, setPriceValue1] = useState("");
  const [priceValue2, setPriceValue2] = useState("");

  const changePriceValue1 = (value: any) => {
    setPriceValue1(value);
  };
  const changePriceValue2 = (value: any) => {
    setPriceValue2(value);
  };

  const getPrice = () => {
    setPrice(`${priceValue1} - ${priceValue2}`);
    if (price == "Indifferent - Indifferent") {
      setPrice(``);
    }
  };
  const priceDrop = () => {
    return (
      <>
        <div className="_dropdown_price_wrap">
          <div className="_dropdown_price_inner">
            <h4 className="_dropdown_price_title">Price</h4>
            <div className="_dropdown_price_content">
              <div className="_dropdown_price_content_input_wrap">
                <div className="_dropdown_price_content_input_inner">
                  <label
                    htmlFor=""
                    className="_dropdown_price_content_input_label"
                  >
                    Min
                  </label>
                  <div className="_dropdown_price_content_input_select_wrap">
                    <Select
                      defaultValue="Indifferent"
                      className="_dropdown_price_content_input"
                      onSelect={changePriceValue1}
                    >
                      <Option value="Ind">Indifferent</Option>
                      <Option value="50K">50.000 €</Option>
                      <Option value="75K">75.000 €</Option>
                      <Option value="100K">100.000 €</Option>
                      <Option value="125K">125.000 €</Option>
                    </Select>
                  </div>
                </div>
                <div className="_dropdown_price_content_input_inner">
                  <label
                    htmlFor=""
                    className="_dropdown_price_content_input_label"
                  >
                    Max
                  </label>
                  <div className="_dropdown_price_content_input_select_wrap">
                    <Select
                      defaultValue="Indifferent"
                      className="_dropdown_price_content_input"
                      onSelect={changePriceValue2}
                    >
                      <Option value="Ind">Indifferent</Option>
                      <Option value="75K">75.000 €</Option>
                      <Option value="100K">100.000 €</Option>
                      <Option value="125K">125.000 €</Option>
                      <Option value="150K">150.000 €</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="_dropdown_price_content_btn_wrap">
              <button
                onClick={getPrice}
                className="_dropdown_price_content_btn"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Dropdown
      className="_housiko_listing_nav_dropdown"
      overlay={priceDrop}
      trigger={["click"]}
    >
      <p className="_housiko_listing_nav_dropdown_txt">
        {price.length == 0 && "Price"}
        {(price.length != 0 && price != "Ind - Ind" && price) ||
          (price == "Ind - Ind" && "Price")}
        <span className="_housiko_listing_nav_dropdown_ic">
          <SvgIcon iconType={"caret-down"} w={14} h={14} />
        </span>
      </p>
    </Dropdown>
  );
};
export const ActiveStatusDropdown = () => {
  const [isActive, setIsActive] = useState(true);

  const isActiveDropdown = () => {
    return (
      <>
        <div className="_dropdown_profile_wrap _nav_dropdown_profile_wrap">
          <div className="_dropdown_profile_buttons border-0">
            <div className="_dropdown_profile_button_list">
              <button
                onClick={() => setIsActive(true)}
                className="_dropdown_profile_button"
              >
                <span className="_housiko_myads_btn_txt">Available</span>
              </button>
            </div>
            <div className="_dropdown_profile_button_list">
              <button
                onClick={() => setIsActive(false)}
                className="_dropdown_profile_button"
              >
                <span className="_housiko_myads_btn_txt">Unvailable</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="_dropdown_profile_info_txt">
      <div className="_dropdown_profile_info_select">
        <Dropdown trigger={["click"]} overlay={isActiveDropdown}>
          <p className="_dropdown_profile_info_select_txt">
            Hi Adam Smith
            {isActive && <span></span>}
          </p>
        </Dropdown>
      </div>
      <div className="_dropdown_profile_info_mail">
        <p className="_dropdown_profile_info_mail_txt">adam@housiko.com</p>
      </div>
    </div>
  );
};
// Profile Dropdown
export const ProfileDropdown = () => {
  const profileDrop = () => {
    return (
      <>
        <div className="_dropdown_profile_wrap">
          <div className="_dropdown_profile_info">
            <ActiveStatusDropdown />
            <div className="_dropdown_profile_info_btn">
              <div className="_housiko_profile_nav_dropdown_main_plus_box">
                <p className="_housiko_profile_nav_dropdown_main_plus_box_cont">
                  Plus
                </p>
              </div>
              <Link
                href="/pricing?isLogin=1"
                className="_dropdown_profile_info_btn_link"
              >
                Change plan
              </Link>
            </div>
          </div>
          <div className="_dropdown_profile_buttons">
            <div className="_dropdown_profile_button_list">
              <Link
                href="/myinfo?mytab=profile"
                className="_dropdown_profile_button"
              >
                <span className="_dropdown_profile_button_ic _bg_ic1">
                  <SvgIcon iconType={"myprofile"} />
                </span>
                <span className="_housiko_myads_btn_txt">My Profile</span>
              </Link>
            </div>
            <div className="_dropdown_profile_button_list">
              <Link
                href="/myinfo?mytab=message"
                className="_dropdown_profile_button"
              >
                <span className="_dropdown_profile_button_ic _bg_ic3">
                  <SvgIcon iconType={"mymessages"} />
                </span>
                <span className="_housiko_myads_btn_txt">My Messages</span>
              </Link>
            </div>
            <div className="_dropdown_profile_button_list">
              <Link
                href="/myinfo?mytab=ad"
                className="_dropdown_profile_button"
              >
                <span className="_dropdown_profile_button_ic _bg_ic1">
                  <SvgIcon iconType={"myads"} />
                </span>
                <span className="_housiko_myads_btn_txt">My Ads</span>
              </Link>
            </div>
            <div className="_dropdown_profile_button_list">
              <button className="_dropdown_profile_button products_come">
                <span className="_dropdown_profile_button_ic _bg_ic2">
                  <SvgIcon iconType={"myproducts"} />
                </span>
                <span className="_housiko_myads_btn_txt">My Products</span>

                <span className="_housiko_list_prop_main_tab_come_box">
                  <p className="_housiko_list_prop_main_tab_come_box_txt">
                    coming soon
                  </p>
                </span>
              </button>
            </div>
            <div className="_dropdown_profile_button_list">
              <Link
                href="/myinfo?mytab=alert"
                className="_dropdown_profile_button"
              >
                <span className="_dropdown_profile_button_ic _bg_ic3">
                  <SvgIcon iconType={"myalerts"} />
                </span>
                <span className="_housiko_myads_btn_txt">My Alerts</span>
              </Link>
            </div>
            <div className="_dropdown_profile_button_list">
              <Link
                href="/myinfo?mytab=fav"
                className="_dropdown_profile_button"
              >
                <span className="_dropdown_profile_button_ic _bg_ic4">
                  <SvgIcon iconType={"myfav"} />
                </span>
                <span className="_housiko_myads_btn_txt">My Favourites</span>
              </Link>
            </div>
            <div className="_dropdown_profile_button_list">
              <Link
                href="/myinfo?mytab=discarded"
                className="_dropdown_profile_button"
              >
                <span className="_dropdown_profile_button_ic _bg_ic4">
                  <SvgIcon iconType={"advert"} />
                </span>
                <span className="_housiko_myads_btn_txt">
                  My Rejected Adverts
                </span>
              </Link>
            </div>
          </div>
          <div className="_dropdown_profile_logout_button">
            <button className="_dropdown_profile_logout_button_tag">
              <span className="_dropdown_profile_logout_button_ic">
                <SvgIcon iconType={"logout"} />
              </span>
              <span className="_housiko_myads_btn_txt">Log out</span>
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="_housiko_listing_nav_dropdown_wrap _housiko_listing_nav_select _housiko_myads_search_list_space">
      <Dropdown
        className="_housiko_profile_nav_dropdown"
        overlay={profileDrop}
        trigger={["click"]}
      >
        <div className="_housiko_profile_nav_dropdown_main">
          <div className="_housiko_profile_nav_dropdown_main_ic _active_prof">
            <img
              src="assets/images/dropdown-profile-img.png"
              alt="icon"
              className="_housiko_profile_nav_dropdown_main_ic_tag"
            />
            <span className="_housiko_mymessage_r8_message_box_prof_active">
              <SvgIcon iconType={"active"} />
            </span>
          </div>
          <div className="_housiko_profile_nav_dropdown_main_plus_box">
            <p className="_housiko_profile_nav_dropdown_main_plus_box_cont">
              Plus
            </p>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};
// Favourite Dropdown
export const FavouriteDropdown = () => {
  const [fav, setFav] = useState(false);

  const favDrop = () => {
    return (
      <>
        <div className="_dropdown_profile_wrap _dropdown_fav_wrap">
          <ul className="_dropdown_fav_ul">
            <li onClick={() => setFav(!fav)} className="_dropdown_fav_li">
              <span className="_dropdown_fav_li_ic _fav">
                <SvgIcon iconType={"fav"} w={18} h={18} />
              </span>
              <span className="_dropdown_fav_li_txt">
                {fav && "Remove from favourite"}
                {!fav && "Mark as favourite"}
              </span>
            </li>
            <li className="_dropdown_fav_li">
              <span className="_dropdown_fav_li_ic _house_s">
                <SvgIcon iconType={"house"} w={18} h={18} color="#FFBF00" />
              </span>
              <span className="_dropdown_fav_li_txt">Summer Houses</span>
            </li>
            <li className="_dropdown_fav_li">
              <span className="_dropdown_fav_li_ic _house_w">
                <SvgIcon iconType={"house"} w={18} h={18} />
              </span>
              <span className="_dropdown_fav_li_txt">Winter Houses</span>
            </li>
            <li className="_dropdown_fav_li">
              <span className="_dropdown_fav_li_ic _plus">
                <SvgIcon iconType={"plus"} w={18} h={18} />
              </span>
              <span className="_dropdown_fav_li_txt">Create a new album</span>
            </li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <div className="_housiko_listing_nav_dropdown_wrap _housiko_listing_nav_select _housiko_myads_search_list_space">
      <Dropdown
        className="_housiko_profile_nav_dropdown"
        overlay={favDrop}
        trigger={["click"]}
      >
        <button className="_housiko_listing_card_item_bottom_btn">
          <span
            className={`_housiko_listing_card_item_bottom_btn_ic ${
              fav ? "_active" : ""
            }`}
          >
            <SvgIcon iconType={"fav"} />
          </span>
          <span className="_housiko_listing_card_item_bottom_btn_txt _fav_btn_txt">
            Favourite
            <span>(256)</span>
          </span>
        </button>
      </Dropdown>
    </div>
  );
};
// Print Dropdown
export const PrintDropdown = () => {
  const printDrop = () => {
    return (
      <>
        <div className="_dropdown_profile_wrap _dropdown_print_wrap">
          <ul className="_dropdown_fav_ul">
            <li className="_dropdown_fav_li">QR Code</li>
            <li className="_dropdown_fav_li">Full Details</li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <div className="_housiko_myads_qr_code_btn_wrap">
      <Dropdown
        className="_housiko_profile_nav_dropdown"
        overlay={printDrop}
        trigger={["click"]}
      >
        <button className="_housiko_myads_qr_code_btn _print_btn">
          <SvgIcon iconType={"print"} />
        </button>
      </Dropdown>
    </div>
  );
};
// Phone Dropdown
export const PhoneDropdown = () => {
  const phoneDropOverlay = () => {
    return (
      <div className="_phone_dropdown">
        <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _myads_whatsapp_btn">
          <span className="_housiko_listing_card_item_bottom_btn_ic">
            <SvgIcon iconType={"whatsapp"} w={24} h={22} color={"#30B742"} />
          </span>
          <span className="_housiko_myads_card_item_bottom_btn_txt">
            915 233 266
          </span>
        </button>
      </div>
    );
  };
  return (
    <>
      <Dropdown overlay={phoneDropOverlay} trigger={["click"]}>
        <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _whatsapp_btn">
          <span className="_housiko_listing_card_item_bottom_btn_ic">
            <SvgIcon iconType={"phone"} />
          </span>
          <span className="_housiko_listing_card_item_bottom_btn_txt">
            915 233 266
          </span>
        </button>
      </Dropdown>
    </>
  );
};
// Popovers
// Extra Popovers
export const ExtraPopover = () => {
  const popoverContent = () => {
    return (
      <>
        <div className="_extra_popver_ul_wrap _housiko_listing_nav_tag_wrap">
          <ul className="_extra_popver_ul _housiko_listing_nav_tag_ul">
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Airbnb</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Parking</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Street</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Street</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Airbnb</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Street</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Airbnb</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Parking</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Airbnb</span>
            </li>
            <li className="_housiko_listing_nav_tag_li">
              <span className="_housiko_listing_nav_tag_li_txt">Parking</span>
            </li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <>
      <Popover
        overlayClassName="_popover_wrap"
        title={null}
        content={popoverContent}
        placement={"bottom"}
        trigger="hover"
      >
        <p className="_housiko_listing_card_item_tag_txt">16+ Extras</p>
      </Popover>
    </>
  );
};
