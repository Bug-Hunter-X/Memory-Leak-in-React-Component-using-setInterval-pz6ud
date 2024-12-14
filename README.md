# React SetInterval Memory Leak

This repository demonstrates a common error in React applications: using `setInterval` within a `useEffect` hook without proper cleanup. This leads to memory leaks because the interval continues to run even after the component unmounts.

## Bug

The `bug.js` file contains a React component that uses `setInterval` to increment a counter every second. However, it lacks the necessary cleanup function to stop the interval when the component unmounts. This results in a memory leak.

## Solution

The `bugSolution.js` file demonstrates the corrected implementation. It uses the return value of `useEffect` to provide a cleanup function that clears the interval when the component unmounts.  This prevents memory leaks and ensures proper component behavior.

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.