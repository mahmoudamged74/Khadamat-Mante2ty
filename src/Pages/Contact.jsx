import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("global");

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h3>{t("contact")}</h3>
          </div>
          <div className="card-body">
            <p>{t("description")}</p>
            <p>هذه صفحة اتصل بنا</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
