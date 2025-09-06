import "./HeaderBlock.scss";

function HeaderBlock({ title, header, highlight }) {
  return (
    <div className="header">
      <h6 className="sub-header">{title}</h6>
      <h4 className="main-header">
        {header} <span>{highlight}</span>
      </h4>
    </div>
  );
}

export default HeaderBlock;
