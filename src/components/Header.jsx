import React from "react";

const Header = () => {
  return (
    <header>
      <div class="menu-principal">
        <div className="logo">
          <img
            className="img-header"
            src={"../assets/img/logo-marvel.png"}
            alt=""
          />
        </div>

        <div className="user">
          <span className="nome-user">Erik Badaró</span>
          <span className="cargo-user">Front-end</span>
          <button className="inicio-user">EB</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
