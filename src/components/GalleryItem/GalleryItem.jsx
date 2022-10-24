import {useState} from "react";
import './GalleryItem.css';

function GalleryItem({photo, likeItem}){
const [photoDesc, setPhotoDesc] = useState(true)
// const [likeAmount, setLikeAmount] = useState(0);
//Nor did I need this


// const onLike = () => {
//     console.log('clicked like button');
//     likeItem(photo);
// }; 
// I didn't need this above

const getDesc = () => {
setPhotoDesc(!photoDesc)
}


return(
    <>
       {/* The question mark basically says if it's true do this*/}
 
{photoDesc? <img src={photo.path} onClick={getDesc} />:
             <h2 onClick={getDesc}> {photo.description} </h2>}

    <button onClick = {() => likeItem(photo.id)} className="btn">Like</button>
    {/* This calls the function using the photo.id */}

    <h3>The number of Likes: {photo.likes}</h3>
    </>


)
}

export default GalleryItem;