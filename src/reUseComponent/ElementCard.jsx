
const ElementCard = ({ eName, description, image }) => {
  const cardStyle = {
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: " 0px 4px 27px 5px rgba(13,13,13,0.33)",
    padding: "2rem",
    margin: "1rem 2rem",
    backgroundImage: "url(" + "/assets/elementBg.webp" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const textBox = {
    borderRadius: "10px",
    maxWidth: "",
    background: "var(--site-color)",
    padding: "1rem",
    marginTop: "0.7rem",
  };
  return (
    <div>
      <div style={cardStyle}>
        <img src={image} className="" alt="" />
        <p className="text-2xl font-semibold text-center">{eName}</p>
        <div style={textBox}>
          <p className="text-sm text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ElementCard;
