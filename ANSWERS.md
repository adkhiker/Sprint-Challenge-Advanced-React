- [x] Why would you use class component over function components (removing hooks from the question)?

    There is a lot of legacy code still being used, so one needs to understand class components. Also, class components add lifecycle methods.


- [x] Name three lifecycle methods and their purposes.

    -componentDidMount()  -runs only if the component gets rendered on the DOM.
    -componentDidUpdate()  -runs only if the component gets rendered on the DOM.
    -componentDidUnmount() - Used when a component is removed from the page,  allows for cleaning state data that is no longer used.


- [x] What is the purpose of a custom hook?

    When several components have the same function, a custom hook allows that function to be reused in any component that requires the same logic.


- [x] Why is it important to test our apps?

    Testing helps to ensure software quality.  It should be used throughout the development process, since it provides for a way to check bugs, acts as a safety net and allows for documentation of a function.