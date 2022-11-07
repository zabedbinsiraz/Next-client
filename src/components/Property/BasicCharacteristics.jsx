import { Form, Input, Select, Switch, Upload } from "antd";
import CompoundedSpace from "antd/lib/space";
import { useState } from "react";
import { SvgIcon } from "../Design/SvgIcon";
import { TypeDropdown } from "../Dropdowns/Dropdowns";

const BasicCharacteristics = ({
  showRentPrice,
  setRoomValue,
  setHalfRoomValue,
}) => {
  const { Option } = Select;
  const [roomActive, setRoomActive] = useState("1");
  const [halfRoomActive, setHalfRoomActive] = useState("1");

  const handleRoomValue = (e) => {
    setRoomActive(e.target.innerText);
    setRoomValue(e.target.innerText);
  };

  const handleHalfRoomValue = (e) => {
    setHalfRoomActive(e.target.innerText);
    setHalfRoomValue(e.target.innerText);
  };

  const props = {
    name: "file",
    action: "http://localhost:3333/api/property/upload-media",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      console.log(file.type);
      const validate =
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "video/mp4";
      if (!validate) {
        message.error(`png, jpg, mp4 are supported only`);
      }
      return validate || Upload.LIST_IGNORE;
    },
    async onChange(info) {
      if (info.file.status === "done") {
        const obj = info.file.response;
        console.log(obj);
      } else if (info.file.status === "error") {
        console.log(info.file.response);
      }
    },
  };

  return (
    <div className="_housiko_list_prop_characterstics">
      <h3 className="_housiko_list_prop_charactersitics_title">
        Basic characteristics
      </h3>

      <div className="_housiko_list_prop_characterstics_input_wrap">
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
          Price
        </label>
        <div className="_housiko_list_prop_characterstics_input_inner">
          <Form.Item name="price">
            <Input
              type="number"
              className="_housiko_list_prop_characterstics_input _housiko_list_prop_characterstics_input1"
              placeholder="$20000"
            />
          </Form.Item>
          <div className="_price_select_wrap">
            <span className="_price_select">£</span>
          </div>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        {showRentPrice && (
          <>
            <label
              htmlFor=""
              className="_housiko_list_prop_characterstics_label"
            >
              Rent price
            </label>
            <div className="_housiko_list_prop_characterstics_input_inner">
              <Form.Item name="rent_price">
                <Input
                  type="number"
                  className="_housiko_list_prop_characterstics_input _housiko_list_prop_characterstics_input1"
                  placeholder="$20000"
                />
              </Form.Item>
              <div className="_price_select_wrap">
                <span className="_price_select">£</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
          Type of construction
        </label>
        <div className="_housiko_list_prop_characterstics_input_inner">
          <Form.Item name="construction_type">
            <Select
              className="_housiko_hero_content_tab_type _housiko_hero_content_tab_select _housiko_list_prop_characterstics_select2"
              defaultValue="Piso"
              style={{
                width: "100%",
              }}
              suffixIcon={<SvgIcon iconType={"caret-down"} w={14} h={14} />}
            >
              <Option value="Piso1">Piso 1</Option>
              <Option value="Piso2">Piso 2</Option>
              <Option value="Piso3">Piso 3</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
          Type of home
        </label>
        <div className="_housiko_list_prop_characterstics_input_inner">
          <Form.Item name="home_type">
            <TypeDropdown />
          </Form.Item>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
          Floor area
          {/* <span className='_housiko_list_prop_characterstics_label_unit'>(sqm, m2)</span> */}
        </label>
        <div className="_housiko_list_prop_characterstics_input_inner">
          <Form.Item name="floor_area">
            <Input
              type="number"
              className="_housiko_list_prop_characterstics_input _housiko_list_prop_characterstics_input1"
              placeholder="Piso"
            />
          </Form.Item>
          <p className="_housiko_list_prop_characterstics_label_unit">m2</p>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <div className="_housiko_list_prop_characterstics_label_ics">
          <label htmlFor="" className="_housiko_list_prop_characterstics_label">
            Total Rooms
          </label>
          <span className="_housiko_list_prop_characterstics_label_ic">
            <SvgIcon iconType={"info"} color={"#555"} w={19} h={19} />
          </span>
        </div>

        <div className="_housiko_list_prop_characterstics_input_inner">
          <h4 className="_housiko_list_prop_characterstics_title">Rooms</h4>
          <ul className="_housiko_list_prop_tab_ul">
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    Number(roomActive) === item
                      ? "_housiko_list_prop_tab_li _active"
                      : "_housiko_list_prop_tab_li"
                  }
                  onClick={handleRoomValue}
                >
                  {item}
                </li>
              );
            })}
            <li className="_housiko_list_prop_tab_li ">
              More
              {/* <div className="_housiko_list_prop_tab_li_inner px-2">
                <Input placeholder="5" className="text-center" />
              </div> */}
            </li>
          </ul>
        </div>
        <div className="_housiko_list_prop_characterstics_input_wrap">
          <div className="_housiko_list_prop_characterstics_input_inner">
            <h4 className="_housiko_list_prop_characterstics_title">
              Half rooms
            </h4>
            <ul className="_housiko_list_prop_tab_ul">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      Number(halfRoomActive) === item
                        ? "_housiko_list_prop_tab_li _active"
                        : "_housiko_list_prop_tab_li"
                    }
                    onClick={handleHalfRoomValue}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
        <h3 className="_housiko_list_prop_characterstics_address_title">
          Property Address
        </h3>
        <div className="_housiko_list_prop_characterstics_input_inner2">
          <div className="_housiko_list_prop_characterstics_input_inner2_inner">
            <Input
              className="_housiko_list_prop_characterstics_input2 _housiko_list_prop_characterstics_input1"
              placeholder="Street, Number and population"
            />
            <button className="_housiko_list_map_btn">
              <SvgIcon iconType={"map-pin"} color={"#fff"} />
            </button>
          </div>
          <button className="_housiko_list_prop_characterstics_input_btn">
            To Locate
          </button>
        </div>
        <div className="_housiko_list_prop_characterstics_map_wrap">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="gmap"
                width={"100%"}
                height={500}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
              <a href="https://123movies-to.org"></a>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;height:500px;width:600px;}",
                }}
              />
              {/* <a href="https://www.embedgooglemap.net">responsive google map</a> */}
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}",
                }}
              />
            </div>
          </div>
        </div>
        <div className="_housiko_list_prop_toggle_btn_wrap">
          <ul className="_housiko_list_prop_toggle_btn_ul _housiko_list_prop_toggle_btn_ul2 mt-3">
            <li className="_housiko_list_prop_toggle_btn_li">
              <Switch className="_housiko_list_prop_toggle_btn" />
              <span className="_housiko_list_prop_toggle_btn_txt">
                Hide The Address for <span>$25</span>
              </span>
            </li>
            <li className="_housiko_list_prop_toggle_btn_li _housiko_list_prop_toggle_btn_li2">
              <a
                href="#0"
                className="_housiko_list_prop_toggle_btn_li _housiko_list_prop_toggle_btn_li2"
              >
                <span className="_housiko_list_prop_toggle_btn_li_ic">
                  <SvgIcon iconType={"info"} color={"#252E8D"} />
                </span>
                <span className="_housiko_list_prop_toggle_btn_txt _housiko_list_prop_toggle_btn_txt2">
                  More Information
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
        <h3 className="_housiko_list_prop_characterstics_address_title">
          Photos of the property
        </h3>
        <div className="_housiko_list_prop_characterstics_upload_img_wrap">
          <div className="_housiko_list_prop_characterstics_upload_img_inner">
            <Upload {...props}>
              <button className="_housiko_list_prop_characterstics_upload_img_btn">
                <SvgIcon iconType={"folder"} w={64} h={64} />
                <span className="_housiko_list_prop_characterstics_upload_img_btn_txt">
                  Upload Photo
                </span>
              </button>
            </Upload>
          </div>
          <div className="_housiko_list_prop_characterstics_upload_img_btn_wrap">
            <button className="_city_map_btn _housiko_list_prop_characterstics_add_img_btn">
              +Add photo of the floor plan
            </button>
            <button className="_city_map_btn _housiko_list_prop_characterstics_add_img_btn">
              +Add 3D Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCharacteristics;
