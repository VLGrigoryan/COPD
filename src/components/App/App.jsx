import React, { useEffect, useState } from "react";
import Page from "../Page/Page";
import AppStyle from "./App.module.css";
import { request } from "../../utils/api";
import { PageContext } from "../contexts/PageContext";
import Illustration from '../../ui/Illustration/Illustration'
import { data } from "../../utils/data";
function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   return request('/api/ingredients')
  //   .then((res) => setData(res.data))
  //   .catch((err) => console.log(err));
  // }, []);

  return (
    <PageContext.Provider value={{ data }}>
    <Illustration/>
       <main className={AppStyle.content}>
        <Page />
       </main>
    </PageContext.Provider>
  );
}

export default App;
