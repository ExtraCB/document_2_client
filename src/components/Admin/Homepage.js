import React, { useEffect, useState } from "react";
//Layout
import NavbarCom from "./../layout/NavbarCom";
import TableAdmin from "../layout/TableAdmin";

import ModalCreateFile from "../layout/ModalCreateFile";
import { getFileAll } from "../../functions/file";
import SearchBox from "../layout/SearchBox";

const Homepage = () => {
  const [dataFileAll, setdataFileAll] = useState([]);

  const tokenid = localStorage.getItem("access_token");
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getFileAll(tokenid)
      .then((fileall) => {
        setdataFileAll(fileall.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavbarCom />

      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <div>
            <SearchBox
              data={dataFileAll}
              setData={setdataFileAll}
              loadData={loadData}
            />
          </div>
          <div>
            <ModalCreateFile />
          </div>
        </div>
        <div>
          <TableAdmin dataFileAll={dataFileAll} loadData={loadData} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
