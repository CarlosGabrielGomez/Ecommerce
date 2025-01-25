import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "../../components/Layout/Layout";
const Login = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <form className="mb-5 mt-5">
            <div className="form-row mb-3">
              <div className="form-group col-md-6">
                <label className="mb-1">Email</label>
                <input
                  type="mail"
                  className="form-control"
                  id="inputEmail4"
                  placeholder=""
                />
              </div>
            </div>

            <div className="form-row mb-3">
              <div className="form-group col-md-6 ">
                <label className="mb-1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder=""
                />
              </div>
            </div>

            <button type="submit" className="btn btn-secondary btn-dark btn-lg">
              Registrarse
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export { Login };
