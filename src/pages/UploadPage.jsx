import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

const UploadPage = () => {
    const [authorId, setAuthorId] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('');

    const upLoad = () => {
        const db = getDatabase();
        const randomString = Math.random().toString(36).slice(2, 7);
        set(ref(db, 'videos/' + randomString), {
            authorId,
            title,
            description,
            src: source,
        }).then(() => {
            alert("Đã thêm vào firebase");
        }).catch((error) => {
            console.error("Lỗi khi thêm vào firebase: ", error);
        });
    }

    return (
        <div className="p-4">
            <div className="mb-4">
                <label>Author ID:</label>
                <input
                    className="border m-2 p-1"
                    type="number"
                    value={authorId}
                    onChange={(e) => setAuthorId(parseInt(e.target.value))}
                />
            </div>
            <div className="mb-4">
                <label>Title video:</label>
                <input
                    className="border m-2 p-1"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label>Description:</label>
                <input
                    className="border m-2 p-1"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label>Source:</label>
                <input
                    className="border m-2 p-1"
                    type="text"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
            </div>
            <button onClick={upLoad} className="border m-2 p-2 bg-blue-500 text-white rounded">
                Upload
            </button>
        </div>
    )
}

export default UploadPage;
