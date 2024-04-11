import React from "react";
import './PlaylistStyling.css'

export default function PlaylistComponent({ data }) {
    const videoText = (data.videoCount <= 1) ? "Video" : "Videos";
    const videoUrl = 'https://www.youtube.com/playlist?list=' + data.id;
    return (<a href={videoUrl} target="_blank" rel="noopener noreferrer"><div className="VideoComponent">
        <div className="Video"> <img src={data.thumbnails[0].url} alt={data.title} /> </div>
        <div className="Description">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
        <div className="VideoCount">{data.videoCount} {videoText}</div>
    </div></a>);
}