import React from "react";
import { FS4, FS5 } from "../../../../CommonElements/Font/FS";
import {   Image } from "../../../../AbstractElements"; 
import direction from "../../../../assets/images/Essential/direction.png";
import email from "../../../../assets/images/Essential/email.png";
import sms from "../../../../assets/images/Essential/sms.png";
import sharefill from "../../../../assets/images/Essential/share-fill.png";
import rateblue from "../../../../assets/images/Essential/rate-blue.png";

import facebook from "../../../../assets/images/Essential/facebook.png";
import editfill from "../../../../assets/images/Essential/edit-fill.png";
import web from "../../../../assets/images/Essential/web.png";
const sidebarData = [
  { 
    category: [
      {icon:direction,title:"Get Direction"},
      {icon:email,title:"Send Enquiry by Email"},
      {icon:sms,title:"Get info SMS/Email"},
      {icon:sharefill,title:"Share this"},
      {icon:rateblue,title:"Tap to Rate"},
      {icon:web,title:"Visit our Website"},
      {icon:facebook,title:"Facebook"},
      {icon:editfill,title:"Edit this"},
     
    ],
  },
  
];
const SideBar = () => {
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
                      <div className="cd_link"> <Image attrImage={{ src: c?.icon, alt: "start" }} /> {c?.title}</div>
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
        <FS4 attr={{className:"BoldText"}}>Get the list of best <span className="green_text">"Hotels"</span></FS4>
        <div className="input">
          <input type="text" placeholder="Name*" />
        </div>
        <div  className="input" >
          <input type="text"  placeholder="Mobile Number*" />
        </div>
        <button className="btn btn-success">Get Quotes Now</button>{" "}
      </div>
    </div>
  );
};

export default SideBar;
