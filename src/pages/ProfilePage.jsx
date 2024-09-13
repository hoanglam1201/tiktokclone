import ProfileDescription from "../components/ProfileDescription";
import DefaultLayout from "../layouts/Default";
import profile from '../data/profile';
const ProfilePage = () => {
    return(
        <div>
            <DefaultLayout wrapperClass="w-full">
                <ProfileDescription></ProfileDescription>
            </DefaultLayout>
        </div>
        
    )
}
export default ProfilePage;