import "./style.css";

const Button = ({ child, className, onClick, type }) => {
  return (
    <button onClick={onClick} className={`custom-btn ${className}`}>
      {child}
    </button>
  );
};

export default Button;
