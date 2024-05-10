import RecommendContainer from "../components/RecommendContainer";
import DefaultLayout from "../layouts/Default";

const Homepage = () => {
    return(
        <DefaultLayout >
            <div className="text-white"></div>
            <RecommendContainer></RecommendContainer>
        </DefaultLayout>
    )

}
export default Homepage;