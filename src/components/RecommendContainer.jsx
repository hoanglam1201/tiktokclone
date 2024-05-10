import Avatar from "./Avatar";
import Button from "./Button";
import ContentRecommend from "./ContentRecommend";

const RecommendContainer = () => {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="avatar justify-center items-center">
                    <Avatar imageURL="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/62ddb2fcbc664516337feb8b2bbdb514.jpeg?lk3s=a5d48078&x-expires=1715259600&x-signature=ueC7Mi6iu6DTRNFOLjbYx4pcTYY%3D"></Avatar>
                </div>
                <div className="content pl-3">
                    <ContentRecommend></ContentRecommend>
                </div>
            </div>
            <div className="follow-btn ">
                <Button size='md'>Follow</Button>
            </div>
        </div>
    )
}
export default RecommendContainer;