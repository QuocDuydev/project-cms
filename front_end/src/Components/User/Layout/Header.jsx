import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="bg-light">
          <div className="container">
            <nav className="navbar navbar-light ">
              <a href="/" className="navbar-brand">
                TTNNTH ĐHTN
              </a>
              <div className="d-flex">
                <form
                  className="p-2 input-group input-group-sm"
                  style={{
                    width: "300px",
                    height: "40px",
                  }}
                >
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Nhập từ khóa cần tìm kiếm..."
                    aria-label="Search"
                    style={{ width: "160px" }}
                  />
                  <button
                    className="bg-white btn btn-outline-secondary btn-sm"
                    type="button"
                    style={{ width: "40px" }}
                  >
                    {" "}
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>

                <ul className="navbar-nav">
                  <li className="p-1 nav-item ">
                    <a href="/" className="p-2 nav-link fw-bold">
                      <i className="fa-solid fa-right-to-bracket"></i> Đăng Nhập
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="container-fluid backgroundLogo">
          <div className="container ">
            <div className="logo">
              <div className="top-menu">
                <div className="bg-warning d-flex"></div>
              </div>

              <img
                src="https://www.ttn.edu.vn/images/TTNNTH/slideshow/banner1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl bg-info">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="mx-auto mb-2 navbar-nav me-auto mb-lg-0">
              {" "}
              <li className="p-1 ml-2 nav-item">
                <a
                  className="nav-link fw-bold active"
                  aria-current="page"
                  href="/"
                >
                  <i className="fa-solid fa-house"></i> Home
                </a>
              </li>
              <li className="p-1 ml-2 nav-item">
                <a className="nav-link fw-bold" href="/">
                  Giới thiệu
                </a>
              </li>
              <li className="p-1 ml-2 nav-item dropdown">
                <a
                  className="nav-link fw-bold dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
