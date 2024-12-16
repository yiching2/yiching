import React, { useState } from "react";
import YouTube from "react-youtube";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const songs = [
    { id: 1, title: "七里香", videoId: "Bbp9ZaJD_eA" },
    { id: 2, title: "軌跡", videoId: "SdBwt6pyNwE" },
    { id: 3, title: "擱淺", videoId: "YJfHuATJYsQ" },
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const opts = {
    height: "0", // 設置為 0 隱藏畫面
    width: "0",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container">
      <h2>音樂選擇</h2>
      {currentSong ? (
        <div className="current-song">
          <p>
            <strong>現正播放:</strong> {currentSong.title}
          </p>
          <button onClick={togglePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      ) : (
        <p>選擇一首喜歡的歌曲來播放</p>
      )}

      <ul className="song-list">
        {songs.map((song) => (
          <li
            key={song.id}
            onClick={() => handleSongSelect(song)}
            className={currentSong?.id === song.id ? "active" : ""}
          >
            {song.title}
          </li>
        ))}
      </ul>

      {currentSong && (
        <YouTube
          videoId={currentSong.videoId}
          opts={opts}
          onReady={(e) => {
            if (isPlaying) e.target.playVideo();
            else e.target.pauseVideo();
          }}
          onStateChange={(e) => {
            if (e.data === 0) setIsPlaying(false); // 視頻結束時
          }}
        />
      )}
    </div>
  );
};

export default MusicPlayer;
