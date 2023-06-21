import React from "react";
import "./videofooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({user, description, music,}) {
  return (
    <div className="videofooter">
      <div className="videoFooter_text">
        <h3>@{user}</h3>
        <p>{description}</p>
      <div className="videofooter_music">
        <MusicNoteIcon className="videofooter_icon" />
      <div className="videofooter_musictext">
        <p>{music}</p>
      </div>
      </div>
      </div>
      <img
        className="videofooter_vinil"
        alt="Vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
