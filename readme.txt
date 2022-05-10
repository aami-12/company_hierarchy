Approaches and method followed while creating the project

#packages installed in the project

styled-components - for styling our componenents
react-icons - For project icons
lodash.clonedeep - I wanted to create a deep copy of the value ie, it needs to recursively clones the value so that it is still connected to its original value;
uuid - I usually create install this package as it can be used to create short non-sequential url-friendly unique ids based on random number generation.

#project Approaches

Here, i have used recursion to make use of reusable values
TreeRecursive  component is where our recursive logic is written.It will recursively look through json data and renders the result

#state Management

Initially i thought of using redux but since redux provides lot of new unwanted issues to our project by implementing its code in our project. So i have used React hooks and Context Api for state management to handle the data between disconnected components. The data is stored in local storage


# I was able to do all the specified tasks except filtering the data 



