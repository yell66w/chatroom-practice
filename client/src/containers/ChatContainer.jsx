import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import ChatPill from '../components/ChatPill'
import MessageBox from '../components/MessageBox'

const ChatContainer = () => {
    return (
    
        <div className="flex flex-col 4 w-3/5 overflow-y-auto">
                <Scrollbars style={{ width: "100%"}} autoHeightMax>
            <ChatPill message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ut voluptas maiores temporibus, inventore repudiandae exercitationem. Tempora magni quos animi dignissimos recusandae cupiditate! Maiores quisquam atque facere sit nihil."/>
            <ChatPill owner={true} message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ut voluptas maiores temporibus, inventore repudiandae exercitationem. Tempora magni quos animi dignissimos recusandae cupiditate! Maiores quisquam atque facere sit nihil."/>
            <ChatPill message="Hello there"/>
            <ChatPill owner={true} message="Goodmorning sir"/>
            <ChatPill owner={true} message="Hahaha"/>
            <ChatPill owner={false} message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ut voluptas maiores temporibus, inventore repudiandae exercitationem. Tempora magni quos animi dignissimos recusandae cupiditate! Maiores quisquam atque facere sit nihil."/>
            <ChatPill owner={false} message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ut voluptas maiores temporibus, inventore repudiandae exercitationem. Tempora magni quos animi dignissimos recusandae cupiditate! Maiores quisquam atque facere sit nihil."/>
            <ChatPill owner={true} message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ut voluptas maiores temporibus, inventore repudiandae exercitationem. Tempora magni quos animi dignissimos recusandae cupiditate! Maiores quisquam atque facere sit nihil."/>
            <MessageBox />
            </Scrollbars>
        </div>
       
    )
}

export default ChatContainer
