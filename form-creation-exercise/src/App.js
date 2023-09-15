import * as React from "react";

import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import Page from "./Page";
import Navigation from "./Navigation";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  const [selectedBand, setSelectedBand] = React.useState(bands[0])

  const handleSelect = (event) => {
    setSelectedBand(event)
  };

  return (
    <div className="App">
      <Navigation events={bands} handleSelect={handleSelect} />
      <Page band={selectedBand}></Page>
    </div>
  );
}

export default App;
