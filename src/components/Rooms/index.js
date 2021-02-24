import React, { useEffect, useState } from "react";

import { db } from "../Firebase/firebase";

import styles from './style.module.css'

const Rooms = ({setSelectedImage}) => {
  const [imageUrl, setImageUrl] = useState([]);

  const getImages = () => {
    const imageRef = db.ref("Data").child("rooms");
    imageRef.on("value", (snapshot) => {
      const imageUrls = snapshot.val();
      const urls = [];
      for (let id in imageUrls) {
        urls.push({ id, url: imageUrls[id] });
      }
      const newState = [...imageUrl, ...urls];
      setImageUrl(newState);
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className={styles.galerija}>
      <section className={styles.galerijaGrid}>
        {imageUrl.map(({ id, url }) => (
          <div key={id} onClick={() => setSelectedImage(url)} >
            <img src={url} alt="uploaded-pic" height="240px" />
          </div>
        ))}
      </section>
    </div>
  );
};
export default Rooms;