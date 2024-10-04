import { worldMusicGenres } from "@/data/data";
import TreeCheckbox from "./components/TreeCheckBox";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <TreeCheckbox data={worldMusicGenres}/>
    </div>
  );
}