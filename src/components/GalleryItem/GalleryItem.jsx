import {useState} from "react";
import './GalleryItem.css';

function GalleryItem({photo, likeItem}){ // These are the props.
//photoDesc is a variable, which is set as true.
const [photoDesc, setPhotoDesc] = useState(true)
//These above are item components

// const [likeAmount, setLikeAmount] = useState(0);
//Nor did I need this


// const onLike = () => {
//     console.log('clicked like button');
//     likeItem(photo);
// }; 
// I didn't need this above since I just put an anonymous function within the html elements below.

const getDesc = () => {
setPhotoDesc(!photoDesc) // This is called a not operator '!'
}


return(
    <section>
       {/* The question mark basically says if it's true do this*/}




{photoDesc ? <img src={photo.path} onClick={getDesc} />:
             <h2 onClick={getDesc}> {photo.description} </h2>}

    <button onClick = {() => likeItem(photo.id)} className="btn">Like</button> 
    {/* This calls the function using the photo.id and is an inline function*/}

    {photo.likes === 0 ?
   <div> No one likes this Image</div>:
   <h3>The number of Likes: {photo.likes}</h3>
} 

    </section>


)
}

export default GalleryItem;