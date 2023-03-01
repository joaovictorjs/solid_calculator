import { store } from "../../stores/calculator_store";
import styles from "./styles.module.css";
import QuickBar from "../quick-bar/index";
import { CopyToClipboard } from "../../../wailsjs/go/main/App";

export default function Display() {
  const copy = async () => {
    await CopyToClipboard(store.result.replace("= ", ""));
  };

  return (
    <>
      <div
        classList={{
          [styles.display]: true,
          [styles.dark]: store.theme.includes("dark"),
        }}
        children={() => (
          <>
            <div
              onClick={() => copy()}
              classList={{
                [styles.wrapper]: true,
                [styles.dark]: store.theme.includes("dark"),
              }}
              children={() => (
                <>
                  <p
                    classList={{
                      [styles.res]: true,
                      [styles.dark]: store.theme.includes("dark"),
                    }}
                    textContent={store.result}
                  />

                  <p
                    classList={{
                      [styles.exp]: true,
                      [styles.dark]: store.theme.includes("dark"),
                    }}
                    textContent={store.display}
                  />
                </>
              )}
            />
            <QuickBar />
          </>
        )}
      />
    </>
  );
}
