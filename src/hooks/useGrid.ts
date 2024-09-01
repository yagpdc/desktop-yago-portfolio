'use client'

import { useState, useEffect } from "react";
import calculateGridSize from '@/utils/calculateGridSize';

const useGridSize = (squareSize: number, gap: number) => {
  const [numRows, setNumRows] = useState(0);
  const [numCols, setNumCols] = useState(0);

  useEffect(() => {
    const updateGridSize = () => {
      const { rows, cols } = calculateGridSize(squareSize, gap);
      setNumRows(rows);
      setNumCols(cols);
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);

    return () => window.removeEventListener("resize", updateGridSize);
  }, [squareSize, gap]);

  return { numRows, numCols };
};

export default useGridSize;
