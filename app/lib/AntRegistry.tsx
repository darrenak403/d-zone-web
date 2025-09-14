"use client";

import {createCache, extractStyle, StyleProvider} from "@ant-design/cssinjs";
import {useServerInsertedHTML} from "next/navigation";
import React, {useMemo, useRef} from "react";

const StyledComponentsRegistry = ({children}: {children: React.ReactNode}) => {
  const cache = useMemo(() => createCache(), []);
  const isServerInserted = useRef(false);
  useServerInsertedHTML(() => {
    if (isServerInserted.current) return;

    isServerInserted.current = true;
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{__html: extractStyle(cache, true)}}
      />
    );
  });
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
