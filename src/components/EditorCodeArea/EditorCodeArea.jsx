import React, { useEffect, useRef } from "react";
import style from "./index.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function EditorCodeArea({ activeFile, setActiveFile }) {
  const codeRef = useRef();

  const { name, icon, content } = activeFile || {};

  const extensionToLanguage = {
    json: "json",
    js: "javascript",
    html: "html",
    jsx: "jsx",
    css: "css",
    gitignore: "git",
    md: "markdown",
  };

  let language = "";

  if (name) {
    const splitName = name.split(".");
    const extension = splitName[splitName.length - 1];
    language = extensionToLanguage[extension];
  }

  useEffect(() => {
    codeRef.current?.scrollTo(0, 0);
  }, [activeFile]);

  return (
    <div className={style.code_area}>
      {!activeFile ? (
        <div className={style.placeholder}>
          <svg
            width="82"
            height="80"
            viewBox="0 0 82 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.9973 0H48.8306V6.65909C57.3511 8.56746 64.6693 13.6584 69.4721 20.6187L77.1731 18.5317L81.3147 33.8137L75.1998 35.4709C75.396 36.9528 75.4973 38.4646 75.4973 40C75.4973 45.5709 74.164 50.8304 71.7991 55.4768L78.8853 62.5226L67.7214 73.7504L61.5097 67.574C57.7854 70.3041 53.4876 72.2979 48.8306 73.3409V80H32.9973V73.1432C28.8104 72.0938 24.9298 70.2718 21.5161 67.8375L12.9192 72.8009L5.0025 59.0889L10.9527 55.6535C8.53133 50.9639 7.16396 45.6416 7.16396 40C7.16396 38.321 7.28507 36.6703 7.51902 35.0562L0 30.715L7.91667 17.003L13.4744 20.2117C18.1186 13.6857 24.9988 8.86152 32.9973 6.85681V0Z"
              fill="#121212"
            />
            <rect
              x="18.333"
              y="37.2686"
              width="43.8636"
              height="11.4812"
              fill="#1E1E1E"
            />
            <rect
              x="23.6091"
              y="31.6666"
              width="10.2494"
              height="8.78667"
              fill="#1E1E1E"
            />
            <rect
              x="46.3093"
              y="31.6665"
              width="10.2494"
              height="8.78667"
              fill="#1E1E1E"
            />
          </svg>
        </div>
      ) : (
        <>
          <div className={style.top}>
            <div className={style.tab}>
              <div className={style.file_name}>
                {icon} <p>{name}</p>
              </div>
              <button
                className={style.close}
                onClick={() => {
                  setActiveFile(null);
                }}
              >
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.50238 1.50254C1.56801 1.43693 1.65702 1.40007 1.74983 1.40007C1.84264 1.40007 1.93164 1.43693 1.99728 1.50254L3.49983 3.00509L5.00238 1.50254C5.03466 1.46911 5.07328 1.44245 5.11599 1.42411C5.15869 1.40576 5.20461 1.39611 5.25109 1.3957C5.29756 1.3953 5.34365 1.40416 5.38666 1.42175C5.42968 1.43935 5.46875 1.46534 5.50162 1.4982C5.53448 1.53107 5.56047 1.57014 5.57806 1.61316C5.59566 1.65617 5.60452 1.70226 5.60412 1.74873C5.60371 1.79521 5.59406 1.84113 5.57571 1.88383C5.55737 1.92653 5.53071 1.96516 5.49728 1.99744L3.99473 3.49999L5.49728 5.00254C5.56103 5.06855 5.59631 5.15696 5.59551 5.24873C5.59472 5.3405 5.55791 5.42829 5.49301 5.49318C5.42812 5.55807 5.34034 5.59488 5.24857 5.59568C5.1568 5.59648 5.06839 5.5612 5.00238 5.49744L3.49983 3.99489L1.99728 5.49744C1.93127 5.5612 1.84286 5.59648 1.75109 5.59568C1.65932 5.59488 1.57153 5.55807 1.50664 5.49318C1.44175 5.42829 1.40494 5.3405 1.40414 5.24873C1.40334 5.15696 1.43862 5.06855 1.50238 5.00254L3.00493 3.49999L1.50238 1.99744C1.43676 1.93181 1.3999 1.8428 1.3999 1.74999C1.3999 1.65718 1.43676 1.56818 1.50238 1.50254Z"
                    fill="#ccc"
                  />
                </svg>
              </button>
            </div>
          </div>
          <SyntaxHighlighter
            language={language}
            PreTag={(props) => <pre {...props} ref={codeRef} />}
            customStyle={{
              padding: "15px 0",
              paddingLeft: "20px",
              fontFamily: "Consolas, monospace",
            }}
            codeTagProps={{
              style: {
                fontSize: "14px",
                fontFamily: "Consolas, monospace",
              },
            }}
            style={vscDarkPlus}
          >
            {content}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

export default EditorCodeArea;
