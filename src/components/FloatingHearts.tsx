import heartsBgImg from "@/assets/hearts-bg.png";

const FloatingHearts = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{
        backgroundImage: `url(${heartsBgImg})`,
        backgroundSize: "400px",
        backgroundRepeat: "repeat",
      }}
    />
  );
};

export default FloatingHearts;
