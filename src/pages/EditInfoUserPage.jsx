import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get, child, ref, update } from 'firebase/database';
import { database } from '../data/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultLayout from '../layouts/Default';

const EditInfoUserPage = () => {
    const { id } = useParams();
    const [video, setVideo] = useState({});
    const [user, setUser] = useState({});
    const [editName,setEditName] = useState('');
    const [editAvatar,setEditAvatar] = useState('');

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, `videos/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const videoData = snapshot.val();
                console.log("video Data: ",videoData);
                setVideo(videoData);
                get(child(dbRef, `users/${videoData.authorId}`)).then((userSnapshot) => {
                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.val();
                        console.log("user Data:", userData);
                        setEditName(userData.name);
                        setEditAvatar(userData.avatar);
                        setUser(userData);
                    } else {
                        console.log("Không có dữ liệu cho video");
                    }
                }).catch((error) => {
                    console.error("Lỗi khi lấy dữ liệu video:", error);
                });
            } else {
                console.log("Không có dữ liệu cho người dùng");
                console.log(id);
            }
        }).catch((error) => {
            console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        });
    }, [id]);

    const handleSave = () => {
        console.log("Lưu User", user);
        const dbRef = ref(database);
        const updates = {
            ...user,
            name: editName,
            avatar: editAvatar
        };
        update(child(dbRef, `users/${video.authorId}`),updates).then(() => {
            setUser(updates);
            toast.success(`Lưu User có id: ${video.authorId} thành công!`);
        }).catch(() => {
            toast.error("Lưu User thất bại");
        })
    };

    

    return (
        <DefaultLayout>
            <div className='ml-[400px] bg-[#121212] h-[900px] mt-[90px] w-full'>
                <h1 className='text-white pb-10'>Chỉnh sửa User</h1>
                <div>
                    <form>
                        <div className='text-white pb-10'>
                            <div className='text-white pb-3'>Name:</div>
                            <input className='p-3 text-black rounded-md border-solid border-gray-300 w-full' type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                        </div>
                        <div className='text-white pb-10'>
                            <div className='text-white pb-3'>Avatar URL:</div>
                            <input className='p-3 text-black rounded-md border-solid border-gray-300 w-full' type="text" value={editAvatar} onChange={(e) => setEditAvatar(e.target.value)}/>
                        </div>
                        <button type='button' className='text-white border rounded-md p-5' onClick={handleSave}>Lưu</button>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </DefaultLayout>
    );
};

export default EditInfoUserPage;
