'use client'
import React, { FC, useState, useRef } from "react";
import { SquaresGridProps } from "@/types/squaresGridProps.type";
import useGridSize from "@/hooks/useGrid";
import Folder from "@/components/Folder";

const SquaresGrid: React.FC<SquaresGridProps> = ({ squareSize = 40, color = "", gap = 4 }) => {
  const { numRows, numCols } = useGridSize(squareSize, gap);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const squaresRef = useRef<HTMLDivElement[]>([]);

  const handleSquareClick = (index: number) => {
    setHighlightedIndex(index);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-screen h-screen grid p-4"
        style={{
          gridTemplateColumns: `repeat(${numCols}, ${squareSize}px)`,
          gridTemplateRows: `repeat(${numRows}, ${squareSize}px)`,
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: numRows * numCols }).map((_, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              squaresRef.current[index] = el!;
            }}
            onClick={() => handleSquareClick(index)}
            className={`w-${squareSize} h-${squareSize} ${color} flex items-center justify-center`}
          >
            {highlightedIndex === index && <Folder />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SquaresGrid;
