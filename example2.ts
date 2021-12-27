// My answer
// In SetInterval, the state changes and the timeout that is inside useEffect and it depends on the state then it enters the infinite loop
// also the useEffect doesn't need the setState ==> (setSecondsElapsed) 

// This is false:
// {useEffect(() => {
//    setInterval(() => {
//        setSecondsElapsed(secondsElapsed + 1);
//      }, 1000);
//  }, [secondsElapsed, setSecondsElapsed]);}

// This is true:
// {useEffect(() => {
//    setInterval(() => {
//        setSecondsElapsed((prev) => prev + 1);
//      }, 1000);
//  }, [])}

const Component: FC = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);
  }, [secondsElapsed, setSecondsElapsed]);

  return <span>Seconds elapsed: {secondsElapsed}</span>;
};