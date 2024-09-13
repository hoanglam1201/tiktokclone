import React, { useEffect, useState } from "react";
import { get, child, ref, remove } from "firebase/database";
import { database } from "../data/firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultLayout from "../layouts/Default";
// const Cha = () => {
//     const [message,setMessage] = useState('');
//     const update = (count) => {
//         if (count === 10){
//             setMessage('Count da tang len 10');
//         }
//     }
//     return(<div>
//         <Con update={update}></Con>
//     </div>)
// }
// const Con = (props) => {
//     const [count,setCount] = useState(0);
//     const tang = () => {
//         setCount((prevCount) => {
//             const newCount = prevCount + 1;
//             props.update(newCount);
//             return newCount;
//         });
//     }
//     return(
//         <div>
//             <button onClick={tang}>Tăng</button>
//         </div>
//     )
// }

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [videos, setVideos] = useState([]);
    const dbRef = ref(database);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token){
            navigate('/login');
        }
    })
    useEffect(() => {
        
        get(child(dbRef, 'users')).then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                const userArray = Object.values(userData).map((user) => ({ ...user }));
                setUsers(userArray);
                console.log("User array:", userArray);

                get(child(dbRef, 'videos')).then((snapshot) => {
                    if (snapshot.exists()) {
                        const videoData = snapshot.val();
                        console.log("Video Data",videoData);
                        console.log("snapshot ",snapshot);
                        const videoArray = Object.values(videoData).map((video, id) => ({
                            ...video,
                            id,
                        }));
                        const entriesVideos = Object.entries(videoData);
                        const entriesVideosMap = entriesVideos.map(([key,value],id) => ({
                            ...value,
                            node_id:key,
                            id,
                        }));
                        console.log("EntriesVideosMap",entriesVideosMap);
                        setVideos(entriesVideosMap);
                        console.log("Video array:", videoArray);
                    } else {
                        console.log("Không có dữ liệu cho videos");
                    }
                }).catch((error) => {
                    console.error("Lỗi khi lấy dữ liệu videos:", error);
                });
            } else {
                console.log("Không có dữ liệu cho users");
            }
        }).catch((error) => {
            console.error("Lỗi khi lấy dữ liệu users:", error);
        });
    
    }, []);

    const handleEditVideo = (videoId) => {
        navigate(`/editvideo/${videoId}`);
    };

    const handleEditUser = (authorId) => {
        navigate(`/edituser/${authorId}`);
    };


    const handleDelete = (videoId) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa video này không");
        if (confirm){
            const videoRef = child(dbRef, `videos/${videoId}`);
            remove(videoRef).then(() => {
                const filterVideos = videos.filter(video => video.node_id != videoId);
                setVideos(filterVideos);
                toast.success("Xóa thành công video ")
            })
        }
    };

    return (
        <DefaultLayout wrapperClass="mx-auto w-5/6 ml-[250px] h-[2000px]">
            <div className="text-white mt-10 bg">
                <table className="min-w-full text-white table-auto">
                    <thead>
                        <tr>
                            <th className="py-2 px-2 flex-1 border border-gray-300 rounded-md">ID</th>
                            <th className="py-2 px-2 flex-1 border border-gray-300 rounded-md">Tên</th>
                            <th className="py-2 px-2 flex-1 border border-gray-300 rounded-md">Avatar</th>
                            <th className="py-2 px-2 flex-1 border border-gray-300 rounded-md">SrcVideos / Description</th>
                            <th className="py-2 px-2 flex-1 border border-gray-300 rounded-md">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos.map((video) => {
                            const author = users.find(user => user.id === video.authorId);
                            return (
                                <tr key={video.id} className="">
                                    <td className="py-2 text-center px-2 flex-1 border border-gray-300 rounded-md">{author.id}</td>
                                    <td className="py-2 text-center px-2 flex-1 border border-gray-300 rounded-md">{author.name}</td>
                                    <td className="py-2 text-center px-2 flex-1 border border-gray-300 rounded-md">
                                        <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full mx-auto" />
                                    </td>
                                    <td className="py-2 text-center px-2 w-[600px] flex-1 border border-gray-300 rounded-md">
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex flex-1 rounded-md mb-2">
                                                <div className="border border-gray-300 rounded-md p-2 w-1/2 truncate overflow-hidden whitespace-nowrap">{video.src}</div>
                                                <div className="border border-gray-300 rounded-md p-2 w-1/2">{video.description}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-center px-2 flex-1 border border-gray-300 rounded-md">
                                        <div className="flex flex-col space-y-2">
                                            <button onClick={() => handleEditVideo(video.node_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                                                Sửa Video
                                            </button>
                                            <button onClick={() => handleEditUser(video.node_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                                                Sửa User
                                            </button>
                                            <button onClick={() => handleDelete(video.node_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                                Xóa Video
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <ToastContainer/>
            </div>
        </DefaultLayout>
    );
};

export default Admin;
