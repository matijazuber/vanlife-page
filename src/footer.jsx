import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#252525",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Link
        to="/about"
        style={{
          color: "#aaaaaa",
          fontWeight: "500",
          fontFamily: "Inter, sans-serif",
          textDecoration: "none",
        }}
      >
        Ⓒ 2026 #VANLIFE
      </Link>
    </footer>
  );
}
