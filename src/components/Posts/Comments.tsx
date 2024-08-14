"use client";
import React, { useEffect, useRef } from "react";
import {
  type WalineInstance,
  type WalineInitOptions,
  init,
} from "@waline/client";

import "@waline/client/style";
import Card from "@/components/Card";

export type WalineOptions = Omit<WalineInitOptions, "el"> & { path: string };

export default function Waline(props: WalineOptions) {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });

    return () => walineInstanceRef.current?.destroy();
  }, []);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, [props]);

  return (
    <Card className="waline w-full">
      <div ref={containerRef} className="w-full p-1"/>
    </Card>
  );
}
