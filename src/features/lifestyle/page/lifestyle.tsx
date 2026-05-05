import { memo } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Lifestyle = () => {
  const images = [
    "https://picsum.photos/id/1015/600/800",
    "https://picsum.photos/id/1016/600/800",
    "https://picsum.photos/id/1018/600/800",
    "https://picsum.photos/id/1020/600/800",
    "https://picsum.photos/id/1024/600/800",
    "https://picsum.photos/id/1027/600/800",
    "https://picsum.photos/id/1024/600/800",
    "https://picsum.photos/id/1027/600/800",
  ];

  return (
    <section className="container py-10">
      <PhotoProvider>
        <div className="grid grid-cols-3 gap-4 max-[800px]:grid-cols-2">
          {images.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img
                src={src}
                alt={`img-${index}`}
                className="w-full h-[250px] object-cover cursor-pointer rounded-lg"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default memo(Lifestyle);
