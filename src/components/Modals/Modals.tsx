import { Checkbox, Input, Modal, Select } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { SvgIcon } from "../Design/SvgIcon";

import SingleListing from "../../pages/SingleListing/SingleListing";

const { Option } = Select;
const { TextArea } = Input;

export const LoginModal = ({ open, cancel, showCreate }: any) => {
  return (
    <>
      <div className="_login_modal_wrapper">
        <Modal
          centered
          wrapClassName="_login_modal_wrap"
          className="_login_modal"
          title="Login"
          open={open}
          onCancel={cancel}
          footer={null}
          closeIcon={<SvgIcon iconType={"close"} w={14} h={14} />}
          width={424}
        >
          <Input placeholder="Email*" className="_login_input" />
          <Input placeholder="Password*" className="_login_input" />
          <div className="_login_forgot_wrap">
            <div className="_login_remember_check">
              <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                Remember me
              </Checkbox>
            </div>
            <a href="#0" className="_login_forgot_link">
              Forgot password?
            </a>
          </div>
          <div className="_login_submit_wrap">
            <button className="_login_submit_btn">Submit</button>
            <button onClick={showCreate} className="_login_submit_txt">
              Dont’t have an account yet?
            </button>
          </div>
          <div className="_login_or_wrap">
            <p className="_login_or_txt">Or</p>
          </div>
          <div className="_login_auth_wrap">
            <button className="_login_auth_btn">
              <span className="_login_auth_btn_ic">
                <img
                  src="assets/images/gg.svg"
                  alt="google"
                  className="_login_auth_btn_ic_img"
                />
              </span>
              <span className="_login_auth_btn_txt">Continue with Google</span>
            </button>
            <button className="_login_auth_btn _fb_btn">
              <span className="_login_auth_btn_ic">
                <img
                  src="assets/images/fb.svg"
                  alt="google"
                  className="_login_auth_btn_ic_img"
                />
              </span>
              <span className="_login_auth_btn_txt">
                Continue with Facebook
              </span>
            </button>
            <button className="_login_auth_btn _login_auth_apl_btn">
              <span className="_login_auth_btn_ic">
                <img
                  src="assets/images/apl.svg"
                  alt="apple"
                  className="_login_auth_btn_ic_img"
                />
              </span>
              <span className="_login_auth_btn_txt">Continue with Apple</span>
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export const CreateAccount = ({ open, cancel }: any) => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    cancel();
    router.push(path);
  };
  return (
    <>
      <Modal
        centered
        wrapClassName="_login_modal_wrap _create_modal_wrap"
        className="_login_modal"
        title="Create Account"
        open={open}
        onCancel={cancel}
        footer={null}
        closeIcon={<SvgIcon iconType={"close"} w={14} h={14} />}
        width={424}
      >
        <div className="_login_remember_check _create_professional">
          <Checkbox className=" _create_professional_checkbox ">
            I am a professional agency
          </Checkbox>
        </div>
        <Input placeholder="Full Name*" className="_login_input" />
        <Input placeholder="Email*" className="_login_input" />
        <Input placeholder="Password*" className="_login_input" />
        <div className="_login_forgot_wrap">
          <div className="_login_remember_check">
            <Checkbox className="_create_professional_checkbox ">
              I accept the legal notice and privacy
            </Checkbox>
          </div>
        </div>
        <div className="_login_submit_wrap">
          <button
            onClick={() => navigateTo("pricing")}
            className="_login_submit_btn"
          >
            Create my account
          </button>
        </div>
        <div className="_login_or_wrap">
          <p className="_login_or_txt">Or</p>
        </div>
        <div className="_login_auth_wrap">
          <button className="_login_auth_btn">
            <span className="_login_auth_btn_ic">
              <img
                src="assets/images/gg.svg"
                alt="google"
                className="_login_auth_btn_ic_img"
              />
            </span>
            <span className="_login_auth_btn_txt">Continue with Google</span>
          </button>
          <button className="_login_auth_btn _fb_btn">
            <span className="_login_auth_btn_ic">
              <img
                src="assets/images/fb.svg"
                alt="google"
                className="_login_auth_btn_ic_img"
              />
            </span>
            <span className="_login_auth_btn_txt">Continue with Facebook</span>
          </button>
          <button className="_login_auth_btn _login_auth_apl_btn">
            <span className="_login_auth_btn_ic">
              <img
                src="assets/images/apl.svg"
                alt="apple"
                className="_login_auth_btn_ic_img"
              />
            </span>
            <span className="_login_auth_btn_txt">Continue with Apple</span>
          </button>
        </div>
      </Modal>
    </>
  );
};
export const CityModal = ({ open, cancel }: any) => {
  const [savedSearchModal, setSavedSearchModal] = useState(false);
  return (
    <div className="_login_modal_wrapper _city_modal_wrapper">
      <Modal
        centered
        wrapClassName="_login_modal_wrap _city_modal_wrap"
        className="_login_modal _login_modal_space _city_modal"
        title="Enter city or location"
        open={open}
        onCancel={cancel}
        footer={[
          <button className="_city_modal_btn">Clear</button>,
          <button className="_city_modal_btn _city_modal_apply_btn">
            Apply
          </button>,
        ]}
        closeIcon={<SvgIcon iconType={"close"} w={14} h={14} />}
        width={648}
      >
        <Input
          placeholder="e.g : District V or szeged orz street"
          className="_city_input"
        />
        <div className="_city_map_btn_wrap _city_map_btns">
          <button className="_city_map_btn">
            <span className="_city_map_btn_ic">
              <SvgIcon iconType={"hand-draw"} />
            </span>
            <span className="_city_map_btn_txt">Draw On Map</span>
          </button>
          <button
            onClick={() => setSavedSearchModal(true)}
            className="_city_map_btn"
          >
            <span className="_city_map_btn_txt">My saved searches</span>
          </button>
        </div>
        <div className="_city_map_tab_wrap">
          <ul className="_city_map_tab_ul">
            <li className="_city_map_tab_li _active">Budapest</li>
            <li className="_city_map_tab_li">Balaton</li>
            <li className="_city_map_tab_li">Other cities</li>
            <li className="_city_map_tab_li">Counties</li>
          </ul>
          <div className="_city_map_tab_content">
            <div className="_city_map_tab_content_inner">
              <div className="_city_map_tab_content_all_wrap _login_remember_check">
                <Input
                  type="checkbox"
                  id="all"
                  className="_login_input_check _city_input_check_login_input_check"
                />
                <label className="_login_input_label" htmlFor="all">
                  All
                </label>
              </div>
              <div className="_city_map_tab_content_ul_wrap">
                <ul className="_city_map_tab_content_ul">
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        I.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        II.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        III.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        IV.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        V.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        VI.
                      </label>
                    </div>
                  </li>
                </ul>
                <ul className="_city_map_tab_content_ul">
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        VII.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        VIII.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        IX.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        X.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XI.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XII.
                      </label>
                    </div>
                  </li>
                </ul>
                <ul className="_city_map_tab_content_ul">
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XIII.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XIV.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XV.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XVI.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XVII.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XVIII.
                      </label>
                    </div>
                  </li>
                </ul>
                <ul className="_city_map_tab_content_ul">
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XIX.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XX.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XXI.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XXII.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XXIII.
                      </label>
                    </div>
                  </li>
                  <li className="_city_map_tab_content_li">
                    <div className="_city_map_tab_content_all_wrap _login_remember_check">
                      <Input
                        type="checkbox"
                        className="_city_input_check _login_input_check"
                      />
                      <label className="_city_input_label " htmlFor="">
                        XXIV.
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <SavedSearch
        open={savedSearchModal}
        cancel={() => setSavedSearchModal(false)}
      />
    </div>
  );
};
export const MoreFilterModal = ({ open, cancel }: any) => {
  return (
    <>
      <div className="_login_modal_wrapper _city_modal_wrapper">
        <Modal
          centered
          wrapClassName="_login_modal_wrap _city_modal_wrap"
          className="_login_modal _city_modal"
          title="Feature"
          open={open}
          onCancel={cancel}
          footer={[
            <button className="_city_modal_btn">Clear</button>,
            <button className="_city_modal_btn _city_modal_apply_btn">
              Apply
            </button>,
          ]}
          closeIcon={<SvgIcon iconType={"close"} w={14} h={14} />}
          width={820}
        >
          <div className="_city_map_tab_wrap border-bottom-0 m-0">
            <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap m-0">
              <div className="_housiko_list_prop_characterstics_input_wrap mt-0">
                <label
                  htmlFor=""
                  className="_housiko_list_prop_characterstics_label"
                >
                  Bedrooms
                </label>
                <div className="_housiko_list_prop_characterstics_input_inner">
                  <ul className="_housiko_list_prop_tab_ul _housiko_list_prop_tab_ul3">
                    <li className="_housiko_list_prop_tab_li  _active">All</li>
                    <li className="_housiko_list_prop_tab_li ">Studio</li>
                    <li className="_housiko_list_prop_tab_li ">1</li>
                    <li className="_housiko_list_prop_tab_li ">2</li>
                    <li className="_housiko_list_prop_tab_li ">3</li>
                  </ul>
                </div>
              </div>
              <div className="_housiko_list_prop_characterstics_input_wrap">
                <label
                  htmlFor=""
                  className="_housiko_list_prop_characterstics_label"
                >
                  Bathroom
                </label>
                <div className="_housiko_list_prop_characterstics_input_inner">
                  <ul className="_housiko_list_prop_tab_ul _housiko_list_prop_tab_ul3">
                    <li className="_housiko_list_prop_tab_li  _active">All</li>
                    <li className="_housiko_list_prop_tab_li ">1</li>
                    <li className="_housiko_list_prop_tab_li ">2</li>
                    <li className="_housiko_list_prop_tab_li ">3</li>
                    <li className="_housiko_list_prop_tab_li ">4+</li>
                  </ul>
                </div>
              </div>
              <div className="_housiko_list_prop_characterstics_input_wrap">
                <label
                  htmlFor=""
                  className="_housiko_list_prop_characterstics_label"
                >
                  Floor
                </label>
                <div className="_housiko_list_prop_characterstics_drop_wrap d-flex align-items-center">
                  <div className="_housiko_list_prop_characterstics_input_inner">
                    <Select
                      className="_housiko_hero_content_tab_type _housiko_hero_content_tab_select _housiko_list_prop_characterstics_select2"
                      defaultValue="Basement"
                      style={{
                        width: "100%",
                      }}
                      suffixIcon={
                        <SvgIcon iconType={"caret-down"} w={14} h={14} />
                      }
                    >
                      <Option value="Basement">Basement</Option>
                      <Option value="Basement 2">Basement 2</Option>
                      <Option value="Basement 3">Basement 3</Option>
                    </Select>
                  </div>
                  <div className="_housiko_list_prop_characterstics_input_inner">
                    <Select
                      className="_housiko_hero_content_tab_type _housiko_hero_content_tab_select _housiko_list_prop_characterstics_select2"
                      defaultValue="10th"
                      style={{
                        width: "100%",
                      }}
                      suffixIcon={
                        <SvgIcon iconType={"caret-down"} w={14} h={14} />
                      }
                    >
                      <Option value="10th">10th</Option>
                      <Option value="9th">9th</Option>
                      <Option value="8th">8th</Option>
                      <Option value="7th">7th</Option>
                      <Option value="6th">6th</Option>
                      <Option value="5th">5th</Option>
                      <Option value="4th">4th</Option>
                      <Option value="3rd">3rd</Option>
                      <Option value="2nd">2nd</Option>
                      <Option value="1st">1st</Option>
                      <Option value="GF">GF</Option>
                    </Select>
                  </div>
                </div>
                <div className="_housiko_list_prop_feature_wrap">
                  <div className="_housiko_list_prop_feature_inner">
                    <div className="_housiko_list_prop_feature_content">
                      <h3 className="_housiko_list_prop_feature_content_title">
                        View
                      </h3>
                      <div className="_housiko_list_prop_feature_check_wrap">
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Street
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Danube
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Panoramic
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Balaton
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Courtyard
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_feature_content">
                      <h3 className="_housiko_list_prop_feature_content_title">
                        Orientation
                      </h3>
                      <div className="_housiko_list_prop_feature_check_wrap">
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            North
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            North East
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            East
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            North West
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            West
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            South East
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            South
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            South West
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_feature_content">
                      <h3 className="_housiko_list_prop_feature_content_title">
                        Languages spoken
                      </h3>
                      <div className="_housiko_list_prop_feature_check_wrap d-block">
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            English
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Hungarian
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_list_prop_feature_inner _housiko_list_prop_feature_inner2">
                    <div className="_housiko_list_prop_feature_content">
                      <h3 className="_housiko_list_prop_feature_content_title">
                        Conservation status
                      </h3>
                      <div className="_housiko_list_prop_feature_check_wrap">
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Almost New
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            For renovation
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Good
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Very good
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Refurbished
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            New
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_feature_content">
                      <h3 className="_housiko_list_prop_feature_content_title">
                        Extras
                      </h3>
                      <div className="_housiko_list_prop_feature_check_wrap d-flex">
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Lift
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Parking
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Terrace
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Heating gas
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Heating electric
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Central Heating
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Airbnb license
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Garden
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Swimming Pool
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Balcony
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Furnished
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            A/C
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Storage
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            American Kitchen
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            In-suite bathroom
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Parquet floor
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_feature_content">
                      <h3 className="_housiko_list_prop_feature_content_title">
                        Others
                      </h3>
                      <div className="_housiko_list_prop_feature_check_wrap d-flex">
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            On sale
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Housiko Exclusive
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Virtual 3D tour
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            With floor plan
                          </Checkbox>
                        </div>
                        <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                          <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                            Directly from owner
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export const AlertModal = ({ open, cancel }: any) => {
  return (
    <>
      <div className="_login_modal_wrapper _alert_modal_wrapper">
        <Modal
          centered
          wrapClassName="_login_modal_wrap _alert_modal_wrap"
          className="_login_modal _alert_modal"
          title={null}
          open={open}
          onCancel={cancel}
          footer={null}
          width={648}
        >
          <div className="_alert_modal_illustration">
            <img
              src="assets/images/alert-Modal-illustration.png"
              alt="alert-illustration"
              className="_alert_modal_illustration_img"
            />
          </div>
          <div className="_alert_modal_content">
            <h5 className="_alert_modal_content_txt">
              You have created an alert with the following filters:
            </h5>
            <p className="_alert_modal_content_para">
              Type, price, floor area, rooms
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};
export const SaveSearch = ({ open, cancel }: any) => {
  return (
    <>
      <div className="_login_modal_wrapper _alert_modal_wrapper">
        <Modal
          centered
          wrapClassName="_login_modal_wrap _alert_modal_wrap"
          className="_login_modal _alert_modal"
          title={null}
          open={open}
          onCancel={cancel}
          footer={null}
          width={648}
        >
          <div className="_alert_modal_illustration">
            <img
              src="assets/images/search.svg"
              alt="alert-illustration"
              className="_alert_modal_illustration_img"
            />
          </div>
          <div className="_alert_modal_content">
            <h5 className="_alert_modal_content_txt">
              You have saved a search with the following filters:
            </h5>
            <p className="_alert_modal_content_para">
              Type, price, floor area, rooms
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export const ListingModal = ({ open, cancel }: any) => {
  return (
    <div className="_listing_modal_wrap">
      <Modal
        title={null}
        centered
        open={open}
        onCancel={cancel}
        footer={null}
        bodyStyle={{
          padding: 0,
        }}
        className="_listing_modal"
        width={1400}
      >
        <SingleListing />
      </Modal>
    </div>
  );
};

export const ReportModal = ({ open, cancel }: any) => {
  return (
    <div className="_login_modal_wrapper _report_modal_wrapper">
      <Modal
        title={null}
        className="_report_modal"
        open={open}
        onCancel={cancel}
        footer={null}
        centered
        width={575}
      >
        <h5 className="_alert_modal_content_txt fs-4">
          Enter your report below:
        </h5>
        <div className="_report_modal_txt_box my-4">
          <TextArea rows={3} />
        </div>
        <div className="_report_modal_buttons">
          <button className="_report_modal_button">Send Report</button>
        </div>
      </Modal>
    </div>
  );
};

export const EditInfoModal = ({
  open,
  cancel,
  name,
  email,
  updateName,
  updateEmail,
}: any) => {
  return (
    <>
      <Modal
        open={open}
        onCancel={cancel}
        className="_editinfo_modal_wrap"
        width={420}
        onOk={cancel}
        centered
        okText={"Update Info"}
      >
        <div className="mt-4">
          <h5 className="_alert_modal_content_txt fs-5">Update Name</h5>
          <div className="_report_modal_txt_box mt-1 mb-3">
            <Input value={name} onChange={updateName} />
          </div>
          <h5 className="_alert_modal_content_txt fs-5">Update Email</h5>
          <div className="_report_modal_txt_box mt-1 mb-3">
            <Input value={email} onChange={updateEmail} />
          </div>
        </div>
      </Modal>
    </>
  );
};
export const LightBox = ({ open, cancel, imageList, startIndex }: any) => {
  return (
    <>
      <Modal
        open={open}
        onCancel={cancel}
        className="_housiko_image_lightbox_wrapper"
        width={1024}
        onOk={cancel}
        footer={null}
      >
        <div className="_housiko_image_lightbox_wrap">
          <ReactImageGallery
            startIndex={startIndex}
            items={imageList}
            showPlayButton={false}
            showIndex={true}
          />
        </div>
      </Modal>
    </>
  );
};

export const CreateNewAlbum = ({ open, cancel }: any) => {
  return (
    <>
      <Modal
        open={open}
        onCancel={cancel}
        className="_editinfo_modal_wrap"
        width={420}
        onOk={cancel}
        centered
        okText={"Create New Album"}
      >
        <div className="mt-4">
          <h5 className="_alert_modal_content_txt fs-5">Creating New Album</h5>
          <div className="_report_modal_txt_box mt-1 mb-3">
            <Input value={""} placeholder="Enter new album name" />
          </div>
        </div>
      </Modal>
    </>
  );
};
export const SavedSearch = ({ open, cancel }: any) => {
  return (
    <>
      <Modal
        open={open}
        onCancel={cancel}
        className="_saved_modal_wrap _editinfo_modal_wrap"
        width={575}
        onOk={cancel}
        centered
        okText={"Okay"}
        footer={null}
      >
        <div className="mt-4">
          <h5 className="_saved_modal_content_txt _alert_modal_content_txt fs-5">
            My Saved Search
          </h5>
          <div className="_saved_modal_content_wrap">
            <ul className="_saved_modal_content_ul">
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
              <li className="_saved_modal_content_li">
                <div className="_saved_modal_content_li_txt">
                  <h3 className="_saved_modal_content_li_title">
                    Madrid Capital
                  </h3>
                  <p className="_saved_modal_content_li_p">Buy, Home</p>
                </div>
                <div className="_saved_modal_content_li_btn_wrap">
                  <button className="_saved_modal_content_li_btn _search_btn">
                    <SvgIcon iconType={"search"} />
                  </button>
                  <button className="_saved_modal_content_li_btn _del_btn">
                    <SvgIcon iconType={"trash"} color={"#A32C2C"} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
export const PricingPlanExample = ({ open, cancel, plan }: any) => {
  return (
    <>
      <Modal
        open={open}
        onCancel={cancel}
        className="_pricing_example_wrap _housiko_image_lightbox_wrapper"
        width={1024}
        onOk={cancel}
        footer={null}
      >
        <div className="_housiko_image_lightbox_wrap">
          <img src={`assets/images/${plan}.png`} />
        </div>
      </Modal>
    </>
  );
};
