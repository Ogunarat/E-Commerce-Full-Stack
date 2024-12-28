import "./Acount.css";
import Login from "./Login";
import Register from "./Register";

const Acount = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
};

export default Acount;
