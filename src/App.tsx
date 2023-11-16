import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export interface ImagesType {
  id: number;
  width: number;
  height: number;
  alt_description: string;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}

const App = () => {

  const [images, setImages] = useState([]);

  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}></ImageList>
    </div>
  );
};

export default App;
