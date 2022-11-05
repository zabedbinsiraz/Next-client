import Link from "next/link";
import { SvgIcon } from "../Design/SvgIcon";

const SearchCard = () => {
  return (
    <div className="_housiko_search_card_wrapper">
      <div className="_housiko_search_card_wrap">
        <div className="_housiko_search_card">
          <div className="_housiko_search_card_img_wrap">
            <Link href="/listing">
              <img
                src="assets/images/searchimg.png"
                alt=""
                className="_housiko_search_card_img"
              />
            </Link>
          </div>
          <div className="_housiko_search_card_bottom">
            <Link href="/listing">
              <div>
                <div className="_housiko_search_card_bottom_txt">
                  <h3 className="_housiko_search_card_bottom_title">$25,000</h3>
                  <p className="_housiko_search_card_bottom_p">
                    HUF 10,000,000
                  </p>
                </div>
                <div className="_housiko_search_card_bottom_txt">
                  <h3 className="_housiko_search_card_bottom_title2">
                    Luxury Vila
                  </h3>
                  <p className="_housiko_search_card_bottom_p2">
                    101 Valay Road, NY
                  </p>
                </div>
                <ul className="_housiko_search_card_bottom_info_ul">
                  <li className="_housiko_search_card_bottom_info_li">
                    <span className="_housiko_search_card_bottom_info_ic">
                      <SvgIcon iconType={"bed"} color={"#555"} />
                    </span>
                    <span className="_housiko_search_card_bottom_info_txt">
                      6
                    </span>
                  </li>
                  <li className="_housiko_search_card_bottom_info_li">
                    <span className="_housiko_search_card_bottom_info_ic">
                      <SvgIcon iconType={"bath"} color={"#555"} />
                    </span>
                    <span className="_housiko_search_card_bottom_info_txt">
                      5
                    </span>
                  </li>
                  <li className="_housiko_search_card_bottom_info_li">
                    <span className="_housiko_search_card_bottom_info_ic">
                      <SvgIcon iconType={"area"} color={"#555"} />
                    </span>
                    <span className="_housiko_search_card_bottom_info_txt">
                      3000 Sqft
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
            <div className="_housiko_search_card_bottom_btn_ul_wrap">
              <ul className="_housiko_search_card_bottom_btn_ul">
                <li className="_housiko_search_card_bottom_btn_li">
                  <button className="_housiko_search_card_bottom_btn">
                    <span className="_housiko_search_card_bottom_btn_ic">
                      <SvgIcon
                        iconType={"fav"}
                        w={22}
                        h={22}
                        color={"#A32C2C"}
                      />
                    </span>
                    <span className="_housiko_search_card_bottom_btn_txt">
                      (178)
                    </span>
                  </button>
                </li>
                <li className="_housiko_search_card_bottom_btn_li">
                  <button className="_housiko_search_card_bottom_btn">
                    <span className="_housiko_search_card_bottom_btn_ic">
                      <SvgIcon iconType={"phone"} w={22} h={22} />
                    </span>
                  </button>
                </li>
                <li className="_housiko_search_card_bottom_btn_li">
                  <button className="_housiko_search_card_bottom_btn">
                    <span className="_housiko_search_card_bottom_btn_ic">
                      <SvgIcon iconType={"chat"} w={22} h={22} />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
    // </div>
  );
};

export default SearchCard;
