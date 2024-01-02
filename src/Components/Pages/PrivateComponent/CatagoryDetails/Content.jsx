import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { FileApi } from "../../../../api";
import { FS10 } from "../../../../CommonElements/Font/FS";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import CategoryCard from "./CategoryCard";
import SearchBar from "../Home/SearchBar";
import burncastle from "../../../../assets/images/Essential/burncastle.png";
const Content = ({ allProps }) => {
  const [myfile, setMyFile] = useState([]);
  const { ListDetails, BreadcrumData, chatToggle, EditContactInfoModeltoggle } =
    allProps || {};

  const {
    // canonical,
    // contact_person,
    // cover_image_url,
    // description,
    // final_rating,
    // get_ratings,
    listing_categories,
    listing_details,
    // listing_id,
    // listing_name,
    // listing_thumbnail_url,
    // listing_video_url,
    // meta_description,
    // meta_keywords,
    // meta_title,
    page_title,
    // profile_banner,
    profile_pic,
    // ratings_count,
    // related_listings,
  } = ListDetails || {};

  const { name, address, is_approved } = listing_details
    ? listing_details[0]
    : {};
  const categoryList = listing_categories?.map((i) => i?.category_name);
  const TrandingList = [
    {
      title: name,
      categoryList: categoryList,
      address: address,
      address2: "Mira Road, Mumbai, Maharashtra, India.",
      static: "89",
      like: "98",
      view: "5522",
      share: "233",
      star: "5",
      is_approved: is_approved,
      picture: profile_pic || burncastle,
    },
  ];
  const test = () => {};
  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  return (
    <Fragment>
      <div className="searchHeadBx">
        {<SearchBar className="hideSearchbarOnDesktop" />}
      </div>
      <div className="spaceForSearchbar" />

      {/* <ContentBox className=""> 
          {BreadCrum(BreadcrumData)} 
      </ContentBox> */}
      <ContentBox className="">
        <FS10 attr={{ className: "lh-1", onClick: test }}>{page_title}</FS10>
      </ContentBox>
      <ContentBox className="">
        <div className="SeviceContainer">
          {TrandingList.map((item) => {
            return (
              <CategoryCard
                title={item?.title}
                address={item?.address}
                address2={item.address2}
                like={item.like}
                statics={item.static}
                view={item.view}
                share={item.share}
                picture={item.picture}
                is_approved={is_approved == "Yes"}
                categoryList={item?.categoryList}
                chatToggle={chatToggle}
                EditContactInfoModeltoggle={EditContactInfoModeltoggle}
                phone_number={item?.phone_number}
              />
            );
          })}
        </div>
      </ContentBox>
    </Fragment>
  );
};
export default Content;
