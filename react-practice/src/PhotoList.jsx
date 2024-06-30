import React from "react";
import Task from "./Task";

const PhotoList = () => {
  const photos = [
    {
      albumId: 1,
      id: 1,
      title: "green",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "purple",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
  ];

  return (
    <Task title="Задание №1">
      {photos.map((photo) => (
        <div key={photo.id}>
          <h3>{photo.title}</h3>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </Task>
  );
};

export default PhotoList;
