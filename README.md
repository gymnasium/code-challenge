# To do
1. Persist state so it isn't lost on page refresh
    - [x] add redux-persist
1. add a button to `submit` for grading
1. Optionally render correct output at the top of the problem if it is provided (via `goalCode` prop).
1. Compare `inputCode` to `goalCode` to see if they are identical.
    - [ ] don't forget to trim whitespace
    - [ ] minify code?
1. Compare the _output_ of `inputCode` to `goalCode` to see if they are identical
    - [ ] add selenium or similar
    - [ ] compare output graphically
    - [ ] compare output analytically
1. Come up with a grading rubric for partial credit, maybe
1. generate a grade report
1. output grade report as an event of some sort
1. chain code challenges together somehow

# These would be awful nice to have
- allow resizing of code and output windows
- allow grid layout of code and output windows to change
- make page responsive
- package as a standalone react component
    - [ ] add to npm?


## Want to help?
Send me an email at [mailto:mbifulco@aquent.com](mbifulco@aquent.com).