import { useState } from "react";
import "./StyleSwitch.css";

const StyleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive((prev) => !prev);
  };

  const closeSwitch = () => {
    setIsActive(false);
  };

  return (
    <div className={`style-switch-wrapper ${isActive ? "active" : ""}`}>
      <div className="style-switch-button" onClick={toggleSwitch}>
        <i className="fa fa-sliders"></i>
      </div>
      <h3>Style Options</h3>
      <button id="preset1" className="btn btn-sm btn-primary">Preset 1</button>
      <button id="preset2" className="btn btn-sm btn-primary">Preset 2</button>
      <button id="preset3" className="btn btn-sm btn-primary">Preset 3</button>
      <button id="preset4" className="btn btn-sm btn-primary">Preset 4</button>
      <button id="preset5" className="btn btn-sm btn-primary">Preset 5</button>
      <button id="preset6" className="btn btn-sm btn-primary">Preset 6</button>
      <br /><br />
      <button className="btn btn-sm btn-primary close-styler pull-right" onClick={closeSwitch}>Close X</button>
    </div>
  );
}

export default StyleSwitch;
