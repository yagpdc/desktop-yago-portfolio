export const highlightSquare = (squareRef: React.RefObject<HTMLDivElement[]>, index: number) => {
    const square = squareRef.current![index];
    if(square){
        square.style.backgroundColor = "yellow";
    }
}
