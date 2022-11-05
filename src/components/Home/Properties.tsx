import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { SvgIcon } from "../Design/SvgIcon";
import PropertyCard from "./PropertyCard";

const Properties = ({ houseName }: any) => {
  const { pathname } = useRouter();
  const responsiveSettings = [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ];
  if (pathname === "/listing") {
    return (
      <div className="_housiko_search_wrapper _housiko_property_wrapper">
        <div className="_housiko_search_wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="_housiko_search_heading">
                  <h2 className="_housiko_search_heading_title">
                    Hot Properties
                  </h2>
                </div>
              </div>
            </div>
            <Carousel
              className="_housiko_slider_wrapper"
              draggable
              infinite
              slidesToScroll={1}
              slidesToShow={2}
              arrows
              autoplay
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
              responsive={responsiveSettings}
            >
              {Array.from(Array(8), (item, id) => (
                <PropertyCard key={id} />
              ))}
            </Carousel>
            {/* Bootstrap grid used */}
            {/* <div className="_housiko_search_content_wrap">
                            <div className="row">
                                {
                                    Array.from(Array(4), (item, id) =>
                                        <PropertyCard key={id} />
                                    )
                                }
                            </div>
                        </div> */}
            {/* Bootstrap grid used */}
          </div>
        </div>
      </div>
    );
  } else if (pathname === "/singleListing") {
    return (
      <div className="_housiko_search_wrapper _housiko_property_wrapper">
        <div className="_housiko_search_wrap">
          <Carousel
            className="_housiko_slider_wrapper"
            draggable
            infinite
            slidesToScroll={1}
            slidesToShow={2}
            arrows
            autoplay
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
            responsive={responsiveSettings}
          >
            {Array.from(Array(8), (item, id) => (
              <PropertyCard key={id} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  } else if (pathname === "/myinfo") {
    return (
      <div className="_housiko_search_wrapper _housiko_property_wrapper">
        <div className="_housiko_search_wrap">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_search_heading">
                <h6 className="_housiko_search_myinfo_heading_title">
                  {houseName} houses
                </h6>
                <button className="_housiko_listing_card_item_bottom_btn">
                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                    <SvgIcon iconType={"trash"} color={"#8D2525"} />
                  </span>
                  <span className="_housiko_listing_card_item_bottom_btn_txt _del_btn_txt">
                    Discard
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Carousel
            className="_housiko_album_slider_wrapper"
            draggable
            infinite
            slidesToScroll={1}
            slidesToShow={2}
            arrows
            autoplay
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
            responsive={responsiveSettings}
          >
            {Array.from(Array(8), (item, id) => (
              <PropertyCard key={id} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  } else {
    return (
      <div className="_housiko_search_wrapper _housiko_property_wrapper">
        <div className="_housiko_search_wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="_housiko_search_heading">
                  <h2 className="_housiko_search_heading_title">
                    New properties
                  </h2>
                  <Link
                    href={"/listing"}
                    className="_housiko_search_heading_view_btn _new_prop_btn"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <Carousel
              className="_housiko_slider_wrapper"
              draggable
              infinite
              slidesToScroll={1}
              slidesToShow={4}
              arrows
              autoplay
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
              responsive={responsiveSettings}
            >
              {Array.from(Array(8), (item, id) => (
                <PropertyCard key={id} />
              ))}
            </Carousel>
            {/* Bootstrap grid used */}
            {/* <div className="_housiko_search_content_wrap">
                            <div className="row">
                                {
                                    Array.from(Array(4), (item, id) =>
                                        <PropertyCard key={id} />
                                    )
                                }
                            </div>
                        </div> */}
            {/* Bootstrap grid used */}
          </div>
        </div>
      </div>
    );
  }
};

export default Properties;
