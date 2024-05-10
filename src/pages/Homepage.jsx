import RecommendContainer from "../components/RecommendContainer";
import DefaultLayout from "../layouts/Default";

const Homepage = () => {
    return(
        <DefaultLayout >
            <div className="text-white mt-10"></div>
            <RecommendContainer></RecommendContainer>
        </DefaultLayout>
    )

}
export default Homepage;