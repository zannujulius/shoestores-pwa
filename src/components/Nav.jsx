import { useState } from "react";
import SideNav from "./SideNav";

const Nav = () => {
  const [menuState, setMenuState] = useState(false);
  const data = [
    {
      name: "Men",
    },
    {
      name: "Women",
    },
    {
      name: "Kids",
    },
    {
      name: "Sport",
    },
    {
      name: "Hiking",
    },
  ];
  const handleMenu = () => {
    setMenuState(true);
  };
  return (
    <>
      <div className="nav">
        <div className="nav-brand">Nike</div>
        <div className="nav-items">
          {data.map((e, index) => (
            <div className="nav-link__cover" key={index}>
              <a href="/" className="nav-links">
                {e.name}
              </a>
            </div>
          ))}
        </div>
        <div className="nav-activity">
          {/* <div className="nav-search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="search" placeholder="search..." />
          </div> */}
          <div className="nav-icon">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="nav-icon">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
          <div className="nav-menu__btn" onClick={handleMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div
        className={menuState ? "backdrop" : "disable"}
        onClick={() => setMenuState(false)}
      ></div>
      <div
        className={menuState ? "mobile-nav" : "disable"}
        onClick={() => setMenuState(false)}
      >
        {data.map((e, index) => (
          <div className="mobile-link__cover">
            <a href="" className="mobile-links">
              {e.name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
