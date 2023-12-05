import React, { Fragment, useContext } from 'react';
import { Image, UL, LI } from '../../../../../AbstractElements';
import ChatAppContext from '../../../../../_helper/Chat';
import { AlignJustify, Headphones, Paperclip, Search, Video } from 'react-feather';
import { useLocation } from 'react-router-dom';
import video from "../../../../../assets/images/Essential/Models/video.png";
import audio from "../../../../../assets/images/Essential/Models/audio.png";
import closeButton from "../../../../../assets/images/Essential/Models/closeButton.png";
import search from "../../../../../assets/images/Essential/Models/search.png";
const ChatHeader = ({allProps}) => {
  const { selectedUserr, setMenuToggle, menuToggle } = useContext(ChatAppContext);
  const location = useLocation();

  const chatMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const {toggle} = allProps
  return (
    <Fragment>
      <div className='chat-header'>
        {/* <Image
          attrImage={{
            className: 'rounded-circle',
            src: `${require(`../../../../../assets/images/${selectedUserr ? selectedUserr.thumb : 'user/8.jpg'}`)}`,
            alt: '',
          }}
        /> */}
        <div className='media-body'>
          <div className='about'>
            <div className='name'>
              {selectedUserr ? selectedUserr.name : 'Vincent Porter'}
              {location.state3 ? <span className='font-primary f-12'> Typing...</span> : ''}
            </div>
            <div className='status digits'>{selectedUserr ? selectedUserr.lastSeenDate : '5 May, 5:30 PM'}</div>
          </div>
        </div>
        <UL attrUL={{ className: 'simple-list list-inline float-start float-sm-end chat-menu-icons d-flex flex-row' }}>
          
         
          <LI attrLI={{ className: 'list-inline-item border-0' }}>
          <img src={search} alt="" />
          </LI>
          <LI attrLI={{ className: 'list-inline-item border-0' }}>
          <img src={audio} alt="" />
          </LI>
          <LI attrLI={{ className: 'list-inline-item border-0' }}>
            <img src={video} alt="" />
          </LI>
          <LI attrLI={{ className: 'list-inline-item border-0',onClick:toggle }} >
            <img src={closeButton} alt="" />
          </LI>
        </UL>
      </div>
    </Fragment>
  );
};
export default ChatHeader;
