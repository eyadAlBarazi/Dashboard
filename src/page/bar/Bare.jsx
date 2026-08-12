// import { Theme } from '@fullcalendar/core/internal'

import Header from "../../component/Header";
import BarChar from "./BarChar";

function Bare() {
  return (
    <>
      <Header title={"BarChar"} discription={"simple BarChar Chart"} />
      <BarChar />
    </>
  );
}

export default Bare;
