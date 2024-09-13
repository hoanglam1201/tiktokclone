import Button from "../components/Button";
import DefaultLayout from "../layouts/Default";
const DiscoverPage = () => {
    return(
        <DefaultLayout wrapperClass='w-full bg-black'>
            <div className="ml-[270px] border-t border-[#ccc]">
                <div className="flex bg-[#121212] pb-2 pt-5 items-center justify-between">
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Ca hát & khiêu vũ</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Giải trí</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Thể Thao</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Truyện tranh & hoạt hình</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Mối quan hệ</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Chương trình</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Hát nhép</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Đời sống</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Chăm sóc sắc đẹp</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Trò chơi</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Xã hội</Button></div>
                    <div><Button wrapperClass='p-2 rounded-[12px] m-2 font-bold'>Xe hơi</Button></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-[382px] h-[599.33px] bg-[#121212] rounded-[15px] mt-2 mb-2 mr-4">
                        <video controls className="w-[382px] h-[509.33px] bg-[#ccc] rounded-t-[15px]" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
                        <div className="text-white"><b className="p-2">David ngo</b></div>
                    </div>
                    <div className="w-[382px] h-[599.33px] bg-[#121212] rounded-[15px] mt-2 mb-2 mr-4">
                        <video controls className="w-[382px] h-[509.33px] bg-[#ccc] rounded-t-[15px]" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
                        <div className="text-white"><b className="p-2">David ngo</b></div>
                    </div>
                    <div className="w-[382px] h-[599.33px] bg-[#121212] rounded-[15px] mt-2 mb-2 mr-4">
                        <video controls className="w-[382px] h-[509.33px] bg-[#ccc] rounded-t-[15px]" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
                        <div className="text-white"><b className="p-2">David ngo</b></div>
                    </div>
                    <div className="w-[382px] h-[599.33px] bg-[#121212] rounded-[15px] mt-2 mb-2 mr-4">
                        <video controls className="w-[382px] h-[509.33px] bg-[#ccc] rounded-t-[15px]" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
                        <div className="text-white"><b className="p-2">David ngo</b></div>
                    </div>
                    <div className="w-[382px] h-[599.33px] bg-[#121212] rounded-[15px] mt-2 mb-2 mr-4">
                        <video controls className="w-[382px] h-[509.33px] bg-[#ccc] rounded-t-[15px]" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
                        <div className="text-white"><b className="p-2">David ngo</b></div>
                    </div>
                    <div className="w-[382px] h-[599.33px] bg-[#121212] rounded-[15px] mt-2 mb-2 mr-4">
                        <video controls className="w-[382px] h-[509.33px] bg-[#ccc] rounded-t-[15px]" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
                        <div className="text-white"><b className="p-2">David ngo</b></div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default DiscoverPage;