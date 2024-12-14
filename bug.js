```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a setInterval inside useEffect without cleanup
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []); // Empty dependency array means this runs only once on mount

  return <div>Count: {count}</div>;
}
```