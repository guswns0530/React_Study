import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorConsumer, ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    <div>
      {/* Provider 사용시 value 필수 */}
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </div>
  );
};

export default App;
