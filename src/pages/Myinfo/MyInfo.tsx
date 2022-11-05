import { Select } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import Myprofile from "../Myprofile";
import MyInfoTab from "./MyInfoTab/MyInfoTab";
import MyAds from "./TabContents/MyAds/MyAds";
import MyAlert from "./TabContents/MyAlert/MyAlert";
import MyDiscarded from "./TabContents/MyDiscardedAdverts/MyDiscarded";
import MyFav from "./TabContents/MyFav/Myfav";
import MyMessages from "./TabContents/MyMessages/MyMessages";

const { Option } = Select;

function MyInfo() {
  // const location = useLocation();
  const { query } = useRouter();
  const tabSelect = query.mytab;
  console.log(tabSelect);
  const [navItem, setNavItem] = useState(1);

  const handleTab = (tab: any) => {
    setNavItem(tab);
  };

  return (
    <div className="_myinfo_wrapper">
      <div className="_myinfo_wrap">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <MyInfoTab
              navItem={tabSelect}
              handleTab={(ev: any) => handleTab(ev)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            {tabSelect === "ad" && <MyAds />}
            {/* {
                            tabSelect === 'ad' && (
                                <MyAds />
                            )
                        } */}
            {tabSelect === "alert" && <MyAlert />}
            {tabSelect === "fav" && <MyFav />}
            {tabSelect === "message" && <MyMessages />}
            {tabSelect === "profile" && <Myprofile />}
            {tabSelect === "discarded" && <MyDiscarded />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
