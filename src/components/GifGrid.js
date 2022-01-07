import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  /*
  useEffect(() => {
    getGifs(category).then((gifs) => setImages(gifs));
  }, [category]); */ //El segundo parametro del useEffect es un arreglo de dependencias, si colocamos el arreglo vacio, quiere decir que lo que esta en el useEffect se ejecutara una sola vez, cuando se cargue el componente.

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}
      {/* Si loading es true, refleja el p */}

      <div className="card-grid">
        {images.map((item) => (
          <GifGridItem key={item.id} {...item} /> //Enviamos como prop como objeto item(que es un elemento del arreglo del estado images)
        ))}
      </div>
    </>
  );
};
