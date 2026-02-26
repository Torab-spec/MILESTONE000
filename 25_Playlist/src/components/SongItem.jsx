import sytles from "./SongItem.module.css";

function SongItem({ songs }) {
  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} className={sytles.container}>
          <img src={song.image} alt={song.title} width="150" />
          <div>
            <h4>{song.id}</h4>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongItem;
