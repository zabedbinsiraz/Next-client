import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import SearchCard from "./SearchCard";

const Search = () => {
  return (
    <div className="_housiko_search_wrapper">
      <div className="_housiko_search_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_search_heading">
                <h2 className="_housiko_search_heading_title">
                  Your Last search
                </h2>
                <Link href={"/listing"}>
                  <a className="_housiko_search_heading_view_btn">View All</a>
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
          >
            {Array.from(Array(8), (item, id) => (
              <SearchCard key={id} />
            ))}
          </Carousel>
          {/* Bootstrap grid used */}
          {/* <div className="_housiko_search_content_wrap">
                        <div className="row">
                            {
                                Array.from(Array(4), (item, id) =>
                                    <SearchCard key={id} />
                                )
                            }
                        </div>
                    </div> */}
          {/* Bootstrap grid used */}
        </div>
      </div>
    </div>
  );
};

export default Search;
