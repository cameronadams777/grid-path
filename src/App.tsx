import { ChangeEvent, Fragment, useState } from "react";
import { Grid } from "./components/Grid";
import { BaseInput } from "./components/BaseInput";
import styles from  "./App.module.css";

function App() {
  const [width, setWidth] = useState<number>(3);
  const [height, setHeight] = useState<number>(3);
  return (
    <Fragment>
      <div className={styles.inputContainer}>
        <BaseInput
          id="width"
          type="number"
          label="Width"
          value={width}
          className={styles.widthInput}
          onChange={(ev: ChangeEvent<HTMLInputElement>) => setWidth(parseInt(ev.target.value, 10))}
        />
        <BaseInput
          id="height"
          type="number"
          label="Height"
          value={height} 
          onChange={(ev: ChangeEvent<HTMLInputElement>) => setHeight(parseInt(ev.target.value, 10))}
        />
      </div>
      <div className={styles.gridContainer}>
        <Grid width={width} height={height}/>
      </div>
    </Fragment>
  )
}

export default App
