import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import FollowingPage from "../pages/FollowingPage";
import FriendsPage from "../pages/FriendsPage";
import LivePage from "../pages/LivePage";
import DiscoverPage from "../pages/DiscoverPage";
import ProfilePage from "../pages/ProfilePage";
import MessagePage from "../pages/MessagePage";
import MailBoxesPage from "../pages/MailBoxesPage";
import UploadPage from "../pages/UploadPage";
import VideoContentPage from "../pages/VideoContentPage";
import Admin from "../pages/Admin";
import EditInfoPage from "../pages/EditInfoPage";
import EditInfoUserPage from "../pages/EditInfoUserPage";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Homepage/>,
    },
    {
        path: '/followingpage',
        element: <FollowingPage />,
    },
    {
        path: '/friendspage',
        element: <FriendsPage />,
    },
    {
        path: '/livepage',
        element: <LivePage />,
    },
    {
        path: '/discoverpage',
        element: <DiscoverPage />,
    },
    {
        path: '/profilepage',
        element: <ProfilePage/>,
    },
    {
        path: '/messagepage',
        element: <MessagePage/>,
    },
    {
        path: '/mailboxespage',
        element: <MailBoxesPage/>,
    },
    {
        path: '/uploadpage',
        element: <UploadPage/>,
    },
    {
        path: '/video/:id',
        element:<VideoContentPage></VideoContentPage>
    },
    {
        path: '/admin',
        element:<Admin></Admin>
    },
    {
        path: '/editvideo/:id',
        element:<EditInfoPage></EditInfoPage>
    },
    {
        path: '/edituser/:id',
        element:<EditInfoUserPage></EditInfoUserPage>
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    
]);
export default router;