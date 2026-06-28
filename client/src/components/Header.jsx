import { FaSearch, FaBell } from "react-icons/fa";

function Header({ search, setSearch }) {
  return (
    <div className="header">
      <div>
        <h2>Welcome 👋</h2>
        <p>Manage your daily tasks efficiently</p>
      </div>

      <div className="header-right">
        <div className="search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="notification">
          <FaBell />
        </div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/45"
            alt="profile"
          />
          <span>Prakyath</span>
        </div>
      </div>
    </div>
  );
}

export default Header;