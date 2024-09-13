import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import videos from '../data/videos';
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import HeartIcon from "../components/icons/HeartIcon";
import CommentIcon from "../components/icons/CommentIcon";
import EmbeddedIcon from "../components/icons/EmbeddedIcon";
import SendIcon from "../components/icons/SendIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import ShareIcon from "../components/icons/ShareIcon";
import OptionsIcon from "../components/icons/OptionsIcon";
import CancelIcon from "../components/icons/CancelIcon";
import DownIcon from "../components/icons/DownIcon";
import AddComment from "../components/AddComment";
import numeral from "numeral";
import '../index.css';

const VideoContentPage = () => {
    const { id } = useParams();
    const selectVideo = videos.find((video) => video.id == id);
    return(
        <div className="flex bg-[#121212]">
            <div className="w-3/5 relative">
                <video className="h-[910px] bg-[#ffffff14] rounded-md" src={selectVideo.src} controls></video>
                <Link to='/'><Button wrapperClass={`absolute top-10 left-5 rounded-full flex items-center justify-center h-[48px] w-[48px]`}><CancelIcon></CancelIcon></Button></Link>
            </div>
            <div className="bg-[#121212] w-2/5 overflow-y-scroll pb-[60px] relative h-[900px] sidebar"> 
                <div className="w-4/5 mx-auto my-0 bg-[#ffffff14] rounded-lg mt-7">
                    <div className="flex justify-between">
                        <div className="flex p-5">
                            <Avatar size="commentUser" imageURL={selectVideo.author.avatar}></Avatar>
                            <div className="text-white ml-3 text-[20px]"><b>{selectVideo.author.name}</b></div>
                        </div>
                        <div className="ml-10">
                                <Button size="md" wrapperClass="mt-5 mr-5">Follow</Button>
                        </div>
                    </div>
                    <div style={{ width:'93%' }} className="text-white ml-5 pb-5">
                        {props.videos.description}
                    </div>
                </div>
                <div className="w-4/5 mx-auto my-0 flex pt-3 pb-3 justify-between items-center">
                    <div className="flex">
                        <div className="flex items-center mr-5"> 
                            <Button wrapperClass="rounded-full h-[48px] w-[48px] mr-2" prefixIcon={<HeartIcon className="text-[20px]" />}></Button>
                            <b><p className='text-white text-[13px]'>{numeral(selectVideo.summary.likes).format('0.0a')}</p></b>
                        </div>
                        <div className="flex items-center mr-5"> 
                            <Button wrapperClass="rounded-full h-[48px] w-[48px] mr-2" prefixIcon={<CommentIcon className="text-[20px]" />}></Button>
                            <b><p className='text-white text-[13px]'>{numeral(selectVideo.summary.comments).format('0.0a')}</p></b>
                        </div>
                        <div className="flex items-center mr-5"> 
                            <Button wrapperClass="rounded-full h-[48px] w-[48px] mr-2" prefixIcon={<ShareIcon className="text-[20px]" />}></Button>
                            <b><p className='text-white text-[13px]'>{numeral(selectVideo.summary.shares).format('0.0a')}</p></b>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pr-2 text-white"><EmbeddedIcon></EmbeddedIcon></div>
                        <div className="pr-2 text-white"><SendIcon></SendIcon></div>
                        <div className="pr-2 text-white"><FacebookIcon></FacebookIcon></div>
                        <div className="pr-2 text-white"><WhatsAppIcon></WhatsAppIcon></div>
                        <div className="pr-2 text-white"><TwitterIcon></TwitterIcon></div>
                        <div className="pr-2 text-white"><ShareIcon></ShareIcon></div>
                    </div>
                </div>
                <div className="w-4/5 mx-auto my-0 flex justify-between pb-2 ">
                    <div className="text-white flex items-center justify-center w-1/2 pb-2 border-b border-gray-300">
                        <b>Bình luận ({selectVideo.author.totalComment})</b>
                    </div>
                    <div className="text-gray-500 flex items-center justify-center w-1/2 pb-2 border-b border-gray-700">
                        <b>Video của nhà sáng tạo</b>
                    </div>
                </div>
                <div className="w-4/5 mx-auto my-0">
                    {selectVideo.author.commentUsers.map(commentUser => {
                        return <div className="flex p-4 justify-between">
                            <div className="flex">
                                <div className="pr-3 pt-1"><Avatar size="commentUser" imageURL={commentUser.avatar}></Avatar></div>
                                <div className="text-white">
                                    <div className="font-bold">{commentUser.name}</div>
                                    <div>{commentUser.comment}</div>
                                    <div className="text-gray-500 flex">
                                        <div className="pr-2">{commentUser.commentTime}</div>
                                        <div><button><b>Trả lời</b></button></div>
                                    </div>
                                    <div >
                                        <button className="flex items-center text-gray-500">
                                            <div className="pr-1"><b>Xem {commentUser.commentsOther} câu trả lời</b></div>
                                            <DownIcon></DownIcon>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="pb-2 ml-1"><OptionsIcon></OptionsIcon></div>
                                <div className="flex flex-col items-center">
                                    <div><HeartIcon></HeartIcon></div>
                                    <div>{numeral(commentUser.like).format('0.0a')}</div>
                                </div>

                            </div>
                        </div>
                    } )}
                </div>
                <div className="border-t border-gray-700 fixed bottom-0 right-0 w-2/5 bg-[#121212]">
                    <div className="w-4/5 mx-auto flex items-center justify-around ">
                        <AddComment placeholder="Thêm bình luận"></AddComment>
                        <div className="text-gray-500 ml-5">
                            <button>
                                <b>Đăng</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoContentPage;