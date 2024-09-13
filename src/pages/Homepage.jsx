import RecommendContainer from "../components/RecommendContainer";
import DefaultLayout from "../layouts/Default";
import {database} from "../data/firebase";
import { useEffect, useState } from "react";
import { getDatabase, ref, child, get  } from "firebase/database";
const Homepage = () => {
    const [videos, setVideos] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const dbRef = ref(database);
        console.log("Attempting to read data from Firebase...");
        

        get(child(dbRef, 'users')).then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const userArray = Object.values(userData).map((user) => ({ ...user}));
            setUsers(userArray);
            console.log("User array:",userArray);
        
            get(child(dbRef, 'videos')).then((snapshot) => {
              if (snapshot.exists()) {
                const videoData = snapshot.val();
                const videoArray = Object.values(videoData).map((video, id) => {
                  const user = userArray.find((user) => user.id === video.authorId);
                  console.log(video.authorId);
                  return {
                    ...video,
                    id,
                    author: user,
                  };
                });
                console.log("Video Array:", videoArray);
                setVideos(videoArray);
              } else {
                console.log("No data available for videos");
              }
            }).catch((error) => {
              console.error("Error fetching videos:", error);
            });
          } else {
            console.log("No data available for users");
          }
        }).catch((error) => {
          console.error("Error fetching users:", error);
        });
      }, []);
    return(
        <DefaultLayout wrapperClass="mx-auto w-2/5">
            <div className="text-white mt-10"></div>
            <RecommendContainer videos={videos}></RecommendContainer>
        </DefaultLayout>
    )

}
export default Homepage;