const ImageLightBox = ({ showLightBox, setShowLightBox }) => {
  return (
    <>
      <h1>Lightbox</h1>
      <p className="cursor-pointer" onClick={() => setShowLightBox(false)}>
        X
      </p>
    </>
  );
};

export default ImageLightBox;
