import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SongItem from "./components/SongItem";

function App() {
  const data = [
    {
      id: "1",
      title: "Ghar Kab Aaoge",
      artist: " Sonu Nigam, Arijit Singh",
      image:
        "https://c.saavncdn.com/085/Ghar-Kab-Aaoge-From-BORDER-2-Hindi-2026-20251231171003-500x500.jpg",
    },
    {
      id: "2",
      title: "Gehra Hua",
      artist: "Arijit Singh, Shashwat Sachdev",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBl7APHdxbomSVpn0SoI_7CD1w5uE_3lGv_g&s",
    },
    {
      id: "3",
      title: "Naal Nachna",
      artist: "Hanumankind, Afsana Khan",
      image:
        "https://c.saavncdn.com/570/Naal-Nachna-From-Dhurandhar-Hindi-2025-20251211114255-500x500.jpg",
    },
    {
      id: "4",
      title: "Sitaare",
      artist: "Arijit Singh",
      image:
        "https://agnilyrics.com/sites/default/files/2025-12/Sitaare%20Song%20Poster%20from%20Ikkis_0.webp",
    },
    {
      id: "5",
      title: "Aawaara Angaara",
      artist: "A.R. Rahman, Faheem Abdullah",
      image: "https://i.ytimg.com/vi/BMwDUXLhHLY/sddefault.jpg",
    },
    {
      id: "6",
      title: "Dil Lagana Mana Tha",
      artist: "Krish & Kishore Mondal",
      image:
        "https://c.saavncdn.com/661/Dil-Lagana-Mana-Tha-Hindi-2026-20260114085211-500x500.jpg",
    },
    {
      id: "7",
      title: "Deewaniyat",
      artist: "Vishal Mishra",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYla1ZuXG4z-aXqMtbRTkgqA7nCI1Xr5XFQ&s",
    },
  ];
  return (
    <>
      <div>
        <h2>My Music Playlist 🎵</h2>
        <hr></hr>
        <SongItem songs={data} />
      </div>
    </>
  );
}

export default App;
