import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get, child, ref, update } from 'firebase/database';
import { database } from '../data/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultLayout from '../layouts/Default';

const EditInfoPage = () => {
    const { id } = useParams();
    const [video, setVideo] = useState({});
    const [user, setUser] = useState({});
    const [editDecription,setEditDecription] = useState('');
    const [editSrc,setEditSrc] = useState('');

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, `videos/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const videoData = snapshot.val();
                console.log("video Data: ",videoData);
                setVideo(videoData);
                setEditDecription(videoData.description);
                setEditSrc(videoData.src);
                get(child(dbRef, `users/${videoData.authorId}`)).then((userSnapshot) => {
                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.val();
                        console.log("user Data:", userData);
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
        console.log("Lưu video", video);
        const dbRef = ref(database);
        const updates = {
            ...video,
            description: editDecription,
            src: editSrc
        };
        update(child(dbRef, `videos/${id}`),updates).then(() => {
            setVideo(updates);
            toast.success(`Lưu Video có id là ${id} thành công`)
        }).catch(() => {
            toast.error("Lưu Video không thành công");
        })
    };

    

    return (
        <DefaultLayout>
            <div className='ml-[400px] bg-[#121212] h-[900px] mt-[90px]'>
                <h1 className='text-white pb-10'>Chỉnh sửa video</h1>
                <div>
                    <form>
                        <div className='text-white pb-10'>
                            <div className='text-white pb-3'>Description:</div>
                            <input className='p-3 text-black rounded-md border-solid border-gray-300' type="text" value={editDecription} onChange={(e) => setEditDecription(e.target.value)} />
                        </div>
                        <div className='text-white pb-10'>
                            <div div className='text-white pb-3'>Src:</div>
                            <input className='p-3 text-black border rounded-md border-solid border-gray-300' type="text" value={editSrc} onChange={(e) => setEditSrc(e.target.value)}/>
                        </div>
                        <button type='button' className='text-white border rounded-md p-5' onClick={handleSave}>Lưu</button>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </DefaultLayout>
    );
};

export default EditInfoPage;
