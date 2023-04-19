import React from "react";

const Blog = () => {
  return (
    <div className="w-full xl:w-1/2 mx-auto">
      <div className="shadow-lg mb-6 p-6 rounded-lg">
        <h2 className="md:text-3xl text-2xl font-extrabold mb-4 text-[#1A1919]">
          When to use context API?
        </h2>
        <p>
          The Context API is used to share state between components. When a
          React application needs to pass the same data to multiple components
          or use state locally, the Context API is used.
        </p>
      </div>
      <div className="shadow-lg mb-6 p-6 rounded-lg">
        <h2 className="md:text-3xl text-2xl font-extrabold mb-4 text-[#1A1919]">
          What is Custom Hook?
        </h2>
        <p>
          A custom hook is a function that developers create and use in their
          own code. To create custom hooks, use React hooks to define a
          function, which performs a specific task and returns something as a
          result. Then, this custom hook can be imported and used in any
          component, which acts as a powerful tool to prevent code repetition
          and simplify maintenance.
        </p>
      </div>
      <div className="shadow-lg mb-6 p-6 rounded-lg">
        <h2 className="md:text-3xl text-2xl font-extrabold mb-4 text-[#1A1919]">
          What is useRef. When to use it?
        </h2>
        <p>
          useRef hook returns a mutable ref object which can be used to hold a
          reference to a DOM element or any other value. Unlike state variables,
          changing the value of a ref does not trigger a re-render of the
          component, which makes it a useful tool for managing non-reactive data
          in functional components. Some common use case- Accessing DOM
          elements, Storing mutable values & Caching expensive computations.
        </p>
      </div>
      <div className="shadow-lg mb-6 p-6 rounded-lg">
        <h2 className="md:text-3xl text-2xl font-extrabold mb-4 text-[#1A1919]">
          What is useMemo. When to use it?
        </h2>
        <p>
          useMemo is that it can be used to prevent expensive calculations from
          being performed unnecessarily. It caches the result of a calculation
          and returns it on subsequent renders if the inputs to the calculation
          have not changed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
