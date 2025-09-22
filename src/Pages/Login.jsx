import React from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation("global");

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>{t("login")}</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">{t("email")}</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">{t("password")}</label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                {t("login")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
