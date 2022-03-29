import "./index.css";

function handler(id) {
  document.getElementById(id).scrollIntoView();
}

export default function Header() {
  return (
    <header data-aos="zoom-out-right">
      <h1>Portifólio</h1>
      <ul className="menu">
        <li className="item-menu" onClick={() => handler("about")}>
          About
        </li>
        <li className="item-menu" onClick={() => handler("project")}>
          Projects
        </li>
        <li className="item-menu" onClick={() => handler("skill")}>
          Skills
        </li>
        <li className="item-menu" onClick={() => handler("social")}>
          Social
        </li>
      </ul>
    </header>
  );
}
