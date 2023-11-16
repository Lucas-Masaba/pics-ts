import { ImagesType } from "../App";

interface ImageTypeProps {
  image: ImagesType;
}

const ImageShow = ({ image }: ImageTypeProps) => {
  return <div>
    <img src={image.urls.small} alt={image.alt_description} />
    </div>
}

export default ImageShow;