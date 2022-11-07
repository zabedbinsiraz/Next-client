import {
  Checkbox,
  Descriptions,
  Form,
  Input,
  Select,
  Switch,
  Upload,
} from "antd";
import { useState } from "react";
import { SvgIcon } from "../../components/Design/SvgIcon";
import BasicCharacteristics from "../../components/Property/BasicCharacteristics";
import Description from "../../components/Property/Description";
import Features from "../../components/Property/Features";

import useProperty from "./useProperty";

const ListProperty = () => {
  const [useDifferent, setUseDifferent] = useState(false);
  const [showRentPrice, setShowRentPrice] = useState(false);
  const {
    form,
    onFinish,
    setRoomValue,
    setHalfRoomValue,
    setBathRooms,
    setBedRooms,
    setPropertyExtras,
    setAlsoRentIt,
    alsoRentIt,
    fromOwner,
    setFromOwner,
    setHomeType,
  } = useProperty();

  const handelUseDifferent = () => {
    setUseDifferent(!useDifferent);
  };

  const handleRentPrice = (checked) => {
    setAlsoRentIt(checked);
    setShowRentPrice(!showRentPrice);
  };

  const handleFromOwner = (checked) => {
    setFromOwner(checked);
  };

  return (
    <div className="_housiko_list_prop_wrapper">
      <div className="_housiko_list_porp_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 mx-auto">
              <div className="_housiko_list_prop_content_wrap">
                <div className="_housiko_list_prop_content">
                  <div className="_housiko_list_prop_main_tab_wrap">
                    <ul className="_housiko_list_prop_main_tab_ul">
                      <li className="_housiko_list_prop_main_tab_li _active">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"home"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Home
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"garage"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Garage
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"land"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Land
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"local"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Local
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"office"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Office
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"store"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Store Room
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                    </ul>

                    <div className="_housiko_list_prop_tab_wrap">
                      <ul className="_housiko_list_prop_tab_ul">
                        <li className="_housiko_list_prop_tab_li  _active">
                          I Sell
                        </li>
                        <li className="_housiko_list_prop_tab_li ">I Rent</li>
                      </ul>
                      <div className="_housiko_list_prop_toggle_btn_wrap">
                        <ul className="_housiko_list_prop_toggle_btn_ul">
                          <li className="_housiko_list_prop_toggle_btn_li">
                            <Switch
                              onChange={handleRentPrice}
                              className="_housiko_list_prop_toggle_btn"
                            />
                            <span className="_housiko_list_prop_toggle_btn_txt">
                              I also rent it
                            </span>
                          </li>
                          <li className="_housiko_list_prop_toggle_btn_li">
                            <Switch
                              className="_housiko_list_prop_toggle_btn"
                              onChange={handleFromOwner}
                            />
                            <span className="_housiko_list_prop_toggle_btn_txt">
                              Directly from owner
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Form form={form} onFinish={onFinish}>
                    <BasicCharacteristics
                      showRentPrice={showRentPrice}
                      setHomeType={setHomeType}
                      setRoomValue={setRoomValue}
                      setHalfRoomValue={setHalfRoomValue}
                    />
                    <Description />
                    <Features
                      useDifferent={useDifferent}
                      handelUseDifferent={handelUseDifferent}
                      setBedRooms={setBedRooms}
                      setPropertyExtras={setPropertyExtras}
                      setBathRooms={setBathRooms}
                    />
                    <div className="_housiko_list_prop_finish_wrap d-flex align-items-center justify-content-between">
                      <button className="_housiko_list_prop_preview_btn">
                        Preview
                      </button>
                      <ul className="_housiko_list_prop_finish_ul">
                        <li className="_housiko_list_prop_finish_li">
                          <button className="_housiko_list_prop_finish_btn _housiko_list_prop_draft_btn">
                            Save Draft
                          </button>

                          <button className="_housiko_list_prop_finish_btn _city_modal_apply_btn">
                            Finish
                          </button>
                        </li>
                      </ul>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;
