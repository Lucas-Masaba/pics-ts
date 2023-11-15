import searchImages from "./api";
import SearchBar from "./components/SearchBar";

const App = () => {

  const handleSubmit: any = (term: string) => {
    console.log("Search", term);
    // searchImages(term);
  }

  return <div><SearchBar onSubmit={handleSubmit}/></div>
}

export default App;