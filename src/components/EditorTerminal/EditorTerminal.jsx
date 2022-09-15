import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { useLocation } from "react-router-dom";

function EditorTerminal({ setActiveFile }) {
  const [inputText, setInputText] = useState("");
  const [successes, setSuccesses] = useState([]);
  const [finalSuccesses] = useState([
    "jsx",
    "test.js",
    "css",
  ]);
  const [finalInputValue] = useState(
    "lego-build component Nav"
  );
  const [successAnimationShouldStart, setSuccessAnimationShouldStart] =
    useState(false);
  const [writingAnimationShouldStart, setWritingAnimationShouldStart] =
    useState(false);
  const [animationHasFinished, setAnimationHasFinished] = useState(false);

  const location = useLocation();

  
  useEffect(() => {
    const listener = window.addEventListener("load", () => {
      setWritingAnimationShouldStart(true);
    });

    if (document.readyState === "complete") {
      setWritingAnimationShouldStart(true);
    }

    return () => {
      window.removeEventListener("load", listener);
    };
  }, [location]);

  useEffect(() => {
    if (!writingAnimationShouldStart) return;

    const writingAnimation = setInterval(() => {
      setInputText((prevValue) => {
        const currentIndex = prevValue.length;
        if (currentIndex === finalInputValue.length) {
          clearInterval(writingAnimation);
          setTimeout(() => {
            setSuccessAnimationShouldStart(true);
          }, 500);
          return prevValue;
        }

        return prevValue + finalInputValue[currentIndex];
      });
    }, 70);

    return () => {
      clearInterval(writingAnimation);
    };
  }, [writingAnimationShouldStart, finalInputValue]);

  useEffect(() => {
    if (!successAnimationShouldStart) return;
    const navFile = {
      name: "Nav.jsx",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            fill="#529BBA"
            d="M22 19.4c.1 1.1.2 2.1.2 3.2 0 1.3-.7 2.2-1.7 2.3-.5.1-1.1 0-1.6-.2-1-.5-1.9-1.2-2.9-1.8-.5.4-1 .8-1.6 1.2-.3.2-.7.4-1 .5-1.8.8-3.3-.1-3.4-2.1 0-1 .1-2.1.2-3.2-.6-.2-1.2-.4-1.8-.8-.6-.3-1.1-.7-1.6-1.2-.9-.9-.8-2 .1-2.9.8-.9 1.9-1.3 3-1.7.1 0 .3-.1.4-.1-.1-.7-.2-1.5-.3-2.2 0-.6.1-1.3.2-1.9.3-1.1 1.3-1.6 2.5-1.3 1.2.3 2.1 1 2.9 1.7.2.1.3.3.4.4.8-.6 1.6-1.2 2.5-1.7.6-.4 1.3-.6 2-.4 1 .2 1.6 1.1 1.7 2.4v1.6c0 .5-.2 1-.3 1.6.6.2 1.1.4 1.7.7.8.4 1.6.8 2.1 1.6.5.7.5 1.5 0 2.2-.5.8-1.3 1.2-2.1 1.6-.6.1-1.1.3-1.6.5zm-5.8-.1c.3 0 .8-.1 1.2-.1.3 0 .5-.1.7-.4.5-.8 1-1.6 1.4-2.5.1-.2.1-.5 0-.6-.5-.9-1-1.7-1.5-2.5-.1-.2-.3-.3-.5-.3-.9 0-1.7 0-2.6-.1-.5 0-.9.2-1.2.7-.2.3-.4.6-.6 1-1.1 2-1.1 1.2 0 3.2 1.2 1.9.6 1.5 3.1 1.6zm-5.8-.8c.3-.8.6-1.6.9-2.3v-.4c-.3-.8-.6-1.5-.9-2.3-1 .3-2 .7-2.8 1.3-.9.7-.9 1.6 0 2.3.8.8 1.8 1.1 2.8 1.4zm11.3-5.1c-.4.9-.7 1.7-1 2.5 0 .1-.1.2 0 .2.3.8.6 1.6 1 2.6.9-.5 1.9-.9 2.7-1.4 1.1-.7 1.1-1.7 0-2.4-.8-.7-1.8-1-2.7-1.5zm-10.7-1c.9-.1 1.7-.2 2.5-.4.1 0 .2-.1.2-.1.5-.7 1-1.3 1.6-2-.8-.7-1.6-1.4-2.6-1.8-1.1-.4-1.8 0-2 1.2-.1 1 .1 2 .3 3.1zm10 0c0-.1.1-.3.1-.4.2-1 .4-2.1 0-3.1-.2-.7-.7-1-1.3-.9-1.3.2-2.2 1.1-3.1 1.9.5.7 1 1.3 1.5 1.9l.3.3c.8.1 1.6.2 2.5.3zm-10 7.2c-.2 1.1-.5 2.1-.2 3.2.2 1 .9 1.4 1.9 1.1 1.1-.3 1.9-1.1 2.7-1.8-.5-.7-1-1.3-1.6-2-.1-.1-.2-.2-.3-.2-.8 0-1.6-.1-2.5-.3zm5.6 2.5c.6.8 1.8 1.6 2.6 1.9 1 .3 1.7 0 1.9-1.1.2-1.1 0-2.1-.2-3.2-.9.1-1.8.1-2.6.4-.6.3-.9 1-1.3 1.5-.1.2-.2.3-.4.5zm.6-10.2c-.4-.5-.8-.9-1.2-1.4-.4.5-.7.9-1.2 1.4h2.4zm0 8.2h-2.3c.4.5.8.9 1.2 1.4.3-.5.7-.9 1.1-1.4zm-4.1-1c-.4-.7-.8-1.3-1.2-2.1-.2.6-.4 1.1-.6 1.7.5.2 1.1.3 1.8.4zm7-2.1l-1.2 2.1c.7-.1 1.2-.2 1.8-.3-.1-.6-.3-1.1-.6-1.8zm-8.2-2l1.2-2.1c-.7.1-1.2.2-1.8.3.2.7.3 1.2.6 1.8zm7-2.1c.2.4.4.7.6 1 .2.3.4.6.6 1 .2-.6.4-1.2.6-1.7-.6 0-1.1-.1-1.8-.3z"
          />
        </svg>
      ),
      content: `import React from "react";
import style from "./index.module.css";

function Nav() {
  return <div className={style.Nav}>Nav</div>;
}

export default Nav`,
    };
    const successAnimation = setInterval(() => {
      setSuccesses((prevValue) => {
        const currentIndex = prevValue.length;
        if (currentIndex === finalSuccesses.length) {
          clearInterval(successAnimation);
          setAnimationHasFinished(true);
          setTimeout(() => {
            setActiveFile(navFile);
          }, 200);
          return prevValue;
        }

        return [...prevValue, finalSuccesses[currentIndex]];
      });
    }, 200);

    return () => {
      clearInterval(successAnimation);
    };
  }, [successAnimationShouldStart, finalSuccesses, setActiveFile]);

  return (
    <div className={style.terminal}>
      <pre>
        <div className={style.head}>
          <span>username@hostname</span> <span>MINGW64</span>{" "}
          <span>~/ReactProject</span>
        </div>
        <div className={style.input}>
          <span>$</span>
          <span
            className={
              successAnimationShouldStart ? style.animation_is_over : ""
            }
          >
            {inputText}
          </span>
        </div>

        {successes.map((file) => (
          <p className={style.success} key={file}>
            [SUCCESS] created 'src/components/Nav/Nav.{file}' successfully
          </p>
        ))}
        {animationHasFinished && (
          <p className={style.final_message}>
            Created 'Nav' <span>component</span> successfully
          </p>
        )}
      </pre>
    </div>
  );
}

export default EditorTerminal;
