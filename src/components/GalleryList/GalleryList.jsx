import GalleryItem from "../GalleryItem/GalleryItem";
//passing in the prop of photoList and the likeItem function.
function GalleryList({photoList, likeItem}){

    return(
        <>  

{photoList.map(photo => (
 <GalleryItem
   key ={photo.id}
photo={photo} //This is bascially each photo, photo: { id: 1, description, path , likes}
likeItem = {likeItem}
            />))}
        </>
    );
}

export default GalleryList;