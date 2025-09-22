import React from "react";
import { useTranslation } from "react-i18next";

const Pharmacy = () => {
  const { t } = useTranslation("global");

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h3>{t("pharmacy")}</h3>
          </div>
          <div className="card-body">
            <p>{t("description")}</p>
            <p>هذه صفحة الصيدلية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
