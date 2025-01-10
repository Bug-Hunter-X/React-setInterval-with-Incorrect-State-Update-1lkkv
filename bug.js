```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to set interval
    const intervalId = setInterval(() => {
      setCount(count + 1); // Using previous state value
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```