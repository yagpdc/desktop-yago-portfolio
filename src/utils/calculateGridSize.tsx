const calculateGridSize = (squareSize: number, gap: number) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cols = Math.floor((width + gap) / (squareSize + gap));
    const rows = Math.floor((height + gap) / (squareSize + gap));
    return { rows, cols };
};

export default calculateGridSize;
