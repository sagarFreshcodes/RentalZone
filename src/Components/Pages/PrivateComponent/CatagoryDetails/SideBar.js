import React, { useState } from "react";
import { FS4, FS5 } from "../../../../CommonElements/Font/FS";
import { Image } from "../../../../AbstractElements";
import direction from "../../../../assets/images/Essential/direction.png";
import email from "../../../../assets/images/Essential/email.png";
import sms from "../../../../assets/images/Essential/sms.png";
import sharefill from "../../../../assets/images/Essential/share-fill.png";
import rateblue from "../../../../assets/images/Essential/rate-blue.png";

import facebook from "../../../../assets/images/Essential/facebook.png";
import editfill from "../../../../assets/images/Essential/edit-fill.png";
import web from "../../../../assets/images/Essential/web.png";
import { ToastError } from "../../../Common/Component/helperFunction";
import { ApiLoader } from "../../../Common/Component/DesignElement";
import { Submit_quotes } from "../../Models/GetQuotes/get_quotes_helper";
const sidebarData = [
  {
    category: [
      { icon: direction, title: "Get Direction" },
      { icon: email, title: "Send Enquiry by Email" },
      { icon: sms, title: "Get info SMS/Email" },
      { icon: sharefill, title: "Share this" },
      { icon: rateblue, title: "Tap to Rate" },
      { icon: web, title: "Visit our Website" },
      { icon: facebook, title: "Facebook" },
      { icon: editfill, title: "Edit this" },
    ],
  },
];
const SideBar = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "" });
  const onHandleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setFormData({ ...formData, [name]: value });
  };
  const OnSubmitForm = () => {
    setLoading(true);
    const submitData = {
      [`listing_category[]`]: `1`,
      // individual_company: formData?.individual_company,
      // quantity: formData?.quantity,
      name: formData?.name,
      phone_number: formData?.number,
      // email: formData?.email,
      // location: formData?.location,
      // message: formData?.message,
    };
    if ([formData?.number, formData?.name].includes("")) {
      ToastError("Please fill data");
      setLoading(false);
    } else {
      if (formData?.number.length < 10) {
        ToastError("Please fill valid 10 digit mobile number");
        setLoading(false);
      } else {
        Submit_quotes({
          submitData: submitData,
          setLoading: setLoading,
          toggle: () => console.log(""),
        });
      }
    }
  };
  return (
    <div className="cat-container">
      <div className="cd_linkBox">
        {sidebarData.map((i) => {
          return (
            <>
              <div className="s_catTitleBox">
                <div className="s_catTitle">{i.title}</div>
                <div className="cd_links_group">
                  {i.category.map((c) => {
                    return (
                      <>
                        <div className="cd_link">
                          {" "}
                          <Image
                            attrImage={{ src: c?.icon, alt: "start" }}
                          />{" "}
                          {c?.title}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="s_form">
        {/* <FS4 attr={{ className: "BoldText" }}>
          Get the list of best <span className="green_text">"Hotels"</span>
        </FS4> */}
        <div className="input">
          <input
            name="name"
            type="text"
            onChange={onHandleChange}
            placeholder="Name*"
          />
        </div>
        <div className="input">
          <input
            name="number"
            type="number"
            onChange={onHandleChange}
            placeholder="Mobile Number*"
          />
        </div>
        <button className="btn btn-success" onClick={OnSubmitForm}>
          {" "}
          Get Quotes Now {loading ? <ApiLoader /> : ""}
        </button>{" "}
      </div>
    </div>
  );
};

export default SideBar;
