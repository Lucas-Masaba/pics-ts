import { ImagesType } from "../App";

interface ImageTypeProps {
  image: ImagesType;
}

// Alternatively, you can add props to  images like this:

// const ImageShow = ({ image }: {image: ImagesType}) => {
//   return <div>
//     <img src={image.urls.small} alt={image.alt_description} />
//     </div>
// }

const ImageShow = ({ image }: ImageTypeProps) => {
  return <div>
    <img src={image.urls.small} alt={image.alt_description} />
    </div>
}

export default ImageShow;