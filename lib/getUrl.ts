import {storage} from '@/appwrite';


 const getUrl = async (image: Image) => {

    //console.log("IMAGE", image);
     let url = storage.getFilePreview(image.bucketId, image.fileId);
    //const url =  storage.getFilePreview("65ef7c08197845297d0d","6618743dab09a010a97e");
    //console.log("url",url);

    return url;
}

export default getUrl;