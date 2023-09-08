const sleep = (ms: number) => new Promise(r => setTimeout(r as () => void, ms));

export default sleep;
