import GalleryItem from "../GalleryItem/GalleryItem";
//passing in the prop of photoList
function GalleryList({photoList, getPhotos}){

    return(
        <>  

{photoList.map(photo => (
 <GalleryItem
   key ={photo.id}
photo={photo}
getPhotos = {getPhotos}
  
            />))}
        </>
    );
}

export default GalleryList;