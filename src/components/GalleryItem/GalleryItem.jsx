import './GalleryItem.css';
function GalleryItem({photo,getPhotos}){

return(
    <>
    {/* <p> {photo.description} </p> */}
       <img src={photo.path}
       id={photo.id}
       alt = {photo.description}
       />

    
    </>


)
}

export default GalleryItem;