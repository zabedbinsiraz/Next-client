import { Select } from "antd";
import { SvgIcon } from "../../components/Design/SvgIcon";
const { Option } = Select;

const ListingTop = () => {
  return (
    <div className="_housiko_listing_top_wrap">
      <p className="_housiko_listing_top_txt">
        13.578 new construction results
      </p>
      <div className="_housiko_listing_top_filter_wrap">
        <p className="_housiko_listing_top_filter_txt">Sort by:</p>
        <div className="_housiko_listing_top_filter _navbar_btn3">
          <Select
            defaultValue="Housiko rating"
            style={
              {
                // width: 160,
              }
            }
            suffixIcon={<SvgIcon iconType={"caret-down"} w={14} h={14} />}
          >
            <Option value="Housiko rating">Housiko rating</Option>
            <Option value="Housiko rating 2">Housiko rating 2</Option>
            <Option value="Housiko rating 3">Housiko rating 3</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ListingTop;
