# ReduxWalkthrough

# What is Redux?

Redux is a predictable state container for javascript applications. Lets consider a traditional javascript application. Lets say that we're making an app that displays a list of books and it can show a list of books over on the left hand side. When a user clicks on a book, it will show details about that book to the user.

When taking a second look, consider the structure of the application both on the view layer and data layer. The app is really divided into two parts, the data that powers the app and the views that display that data. There's two types of data that make that app work: a list of books which are displayed on the sidebar and a currently selected book which is displayed in the detail view. On the view side, we have a list view, list item, detail view (which shows the detail for the currently selected book).

Redux is the data contained inside this application box whereas React is really the views contained inside the app box. When redux explains itself as a state container, it really means a collection of all the data that describes the app. This not only includes the hard data such as the list of books but it also includes more meta level properties like what is the currently selected book. React on the other hand represents the views which translates the app's data into something that can be displayed on the screen which the user can interact with. Redux centralizes all of the data into a single object which is referred to as the state (application level state).

# More Examples with Redux


# Reducers

A reducer is a function that returns a piece of the application state. Because our application can have many pieces of state, we can have many different reducers. Lets go back to our book app diagram. Our application state has two pieces: the list of books, and the currently selected book. So we can have two different reducers for this: one would be responsible for producing the list of books and the other would be responsible for producing the currently selected book.

# Container: Connecting React to Redux

Connecting these two separate libraries Redux and React is done with a separate library called "React Redux". What we do is we define one of our components as a container. A container is a react component that has a direct connection to the state managed by redux. The "react-redux" library is what forms the bridge between those two separate libraries. The only time where we ever get this bridge available where we can take a react component and inject state into it and data into it is a component called a container. In the documentation, containers are sometimes called "smart components", so right now what we have is a "dumb component" because it doesn't have any direct connection to redux. We usually separate containers and components in different folders.
