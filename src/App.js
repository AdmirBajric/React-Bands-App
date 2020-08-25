import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import BandsList from "./components/BandsList";
import ModalDialog from "./components/Modal";

const App = () => {
  const [bands, setBands] = useState([]);
  const [currBand, setCurrBand] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchBands = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json"
        )
        .then((response) => setBands(response.data))
        .catch((error) => console.log(error));
    };
    fetchBands();
  }, []);

  const changeCurrentBand = (band) => {
    console.log("radi");
    setCurrBand(band);
    setShow(true);
  };

  const handleCloseDialog = () => {
    setShow(false);
  };

  return (
    <div>
      <Navbar />
      <BandsList data={bands} handleChangeBand={changeCurrentBand} />
      <ModalDialog
        band={currBand}
        show={show}
        handleClose={handleCloseDialog}
      />
    </div>
  );
};

export default App;
