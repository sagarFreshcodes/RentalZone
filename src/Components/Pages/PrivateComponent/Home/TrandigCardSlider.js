import React, { useEffect, useRef, useState } from "react";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { FS10 } from "../../../../CommonElements/Font/FS";
import TrandingCard from "./TrandingCard";
import lptopImg4 from "../../../../assets/images/Essential/lptopImg4.png";
import { SimpleAnimation } from "../../../Common/Component/helperFunction";
import Example from "./AnimatedSlider";
const TrandigCardSlider = ({ ProductList, productRef }) => {
  const [sliderItem, setSliderItem] = useState([1, 2, 3]);
  const [totleItem, setTotleItem] = useState(3);
  const [MouseOn, setMouseOn] = useState(false);
  const productSliderRef = useRef(null);
  useEffect(() => {
    setTotleItem(ProductList.length || 3);
  }, []);
  const ChangeSlide = (type) => {
    if (type == "next") {
      const newAdding = sliderItem[2] >= totleItem ? 1 : sliderItem[2] + 1;
      setSliderItem([sliderItem[1], sliderItem[2], newAdding]);
    } else {
      const newAdding = sliderItem[0] == 1 ? totleItem - 1 : sliderItem[0] - 1;
      setSliderItem([sliderItem[1], sliderItem[2], newAdding]);
    }
  };
  const test = () => {
    // handleScroll();
    window.scrollTo(798, 1200);
  };

  useEffect(() => {
    setTimeout(() => {
      ChangeSlide("next");
    }, 5000);

    // SimpleAnimation({
    //   className: ".showImg",
    //   scale1: 0.1,
    //   scale2: 1,
    //   edition: true,
    //   duration1: 0.1,
    //   //   delay1: 0.5,
    //   duration2: 1,
    // });
  }, [sliderItem]);

  const handleScroll = (event) => {
    const targetDiv = document.querySelector(".TrendingsContainer"); // Replace with your class name
    if (targetDiv) {
      // Logic to scroll the targeted div
      targetDiv.scrollLeft += 100; // You can change the scroll behavior as needed
    }
  };

  const StopScroll = (e) => {
    const { offsetHeight, offsetWidth, offsetTop, clientHeight } = e.target;
    // test();
    // handleScroll();
    console.log(`code1254`, offsetHeight, offsetWidth, offsetTop, clientHeight);
  };
  return (
    <ContentBox attr={{ className: "TrendingsSlider" }}>
      {/* <div className="ContentCenter" onClick={test}>
        <FS10>Top Trendings For Your City</FS10>
      </div> */}

      {/* <div className="sliderScroll" onScrollCapture={StopScroll}>
        <div className="scrollDown"></div> */}
      <div
        className="TrendingsContainer"
        ref={productSliderRef}
        // onScroll={StopScroll}
        // onMouseMove={StopScroll}
        onWheelCapture={StopScroll}
      >
        {ProductList.slice(0, 4)?.map((item, index) => {
          return (
            <TrandingCard
              className={""}
              title={item?.product_name}
              price={item?.price}
              address1={item?.address1}
              address2={item?.address2}
              like={item?.like}
              statics={item?.static}
              view={item?.view}
              share={item?.share}
              picture={
                `${item?.product_image}`.includes("/")
                  ? item?.product_image
                  : lptopImg4
              }
              d1={item?.d1}
              d2={item?.d2}
              d3={item?.d3}
              d4={item?.d4}
              specification={[item?.description]}
              id={item.id}
              item={item}
            />
          );
        })}
      </div>
      {/* <div className="scrollUp"></div>
      </div> */}
    </ContentBox>
  );
};

export default TrandigCardSlider;
