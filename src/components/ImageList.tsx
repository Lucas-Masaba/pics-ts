import './ImageList.css'
import { ImagesType } from "../App";
import ImageShow from "./ImageShow";
interface ImageListProps {
  images: ImagesType[];
}

const ImageList = ({ images }: ImageListProps) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className='image-list'>{renderedImages}</div>;
};

export default ImageList;
