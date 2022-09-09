import React, { useMemo } from "react";
import EditorFile from "../EditorFile/EditorFile";
import ToggleWrapper from "../ToggleWrapper/ToggleWrapper";
import style from "./index.module.css";

function FolderWrapper({ tree, depth = 0, wrapperRef, height }) {
  const fileTypeToIcon = useMemo(
    () => ({
      jsx: "",
      css: "",
      test: "",
      javascript: "",
      html: "",
    }),
    []
  );

  return (
    <div
      className={style.wrapper}
      ref={wrapperRef}
      style={{
        paddingLeft: `${depth * 8}px`,
        height: typeof height === "number" ? height : null,
      }}
    >
      {tree.map((item) =>
        item.type !== "folder" ? (
          <EditorFile
            name={item.name}
            content={item.content}
            icon={fileTypeToIcon[item.type]}
            key={item.name}
          />
        ) : (
          <ToggleWrapper
            name={item.name}
            tree={item.children}
            depth={depth + 1}
            key={item.name}
          />
        )
      )}
    </div>
  );
}

export default FolderWrapper;
