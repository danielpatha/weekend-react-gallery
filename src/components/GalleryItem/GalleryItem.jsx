import {useState} from "react";
import './GalleryItem.css';

function GalleryItem({photo}){
const [photoDesc, setPhotoDesc] = useState(false)


const getDesc = () => {
setPhotoDesc(true)
}


return(
    <>
       {/* <img src={photo.path}
       alt = {photo.description}
       /> */}

{!photoDesc && <img src={photo.path} onClick={getDesc} />}
            {photoDesc && <h2>{photo.description}</h2>}

    <button className="btn">Up Vote</button>
    
    </>


)
}

export default GalleryItem;