'use client'
import React, { FC } from "react";
import { SquaresGridProps } from "@/types/squaresGridProps.type";
import useGridSize from "@/hooks/useGrid";

const SquaresGrid: React.FC<SquaresGridProps> = ({ squareSize = 40, color = "bg-blue-400", gap = 4 }) => {
  const { numRows, numCols } = useGridSize(squareSize, gap);

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
            onClick={() => console.log('clicked' + index)}
            className={`w-${squareSize} h-${squareSize} ${color}`}
            ></div>
            ))}
        </div>
    </div>
  );
};

export default SquaresGrid;
