import theme from "../styles/theme";

const Header = () => {
  const style = {
    background: theme.primary,
    color: "#fff",
    fontSize: 14,
  };

  const container = {
    maxWidth: 1200,
    margin: "auto",
    padding: "6px 16px",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={style}>
      <div style={container}>
        <span>📞 0911 815 570</span>
        <span>✉️ cskh@shop.vn</span>
      </div>
    </div>
  );
};

export default Header;
