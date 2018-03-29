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

# Which Component Do We Want As The Container?

In general, we want the most parent component that cares about a particular piece of state to be a container. So your first answer might be...well the whole app container cares about the state. Right? The whole app needs to care about the list of books and the app needs to know about the current active book. When we say "app", we're talking specifically about our component called *App.js*. However, the only thing the app is here for...is to say "hey, please render book list to the page and please render book detail to the page". So maybe both book list and book detail should be smart components or container that have a direct connection to redux whereas app should be a dumb component or component; normally, a component that doesn't have any touch or any handle on the data that's contained within redux.

Something to note is that only the most parent component that uses a particular piece of state needs to be connected to redux. So again the app doesn't really care about the active book, the book detail does. If the book list had some other child component that cared about the book list, we wouldn't really want to connect to that child component and state as well, only the parent which in this case would be the book list. We've determined that the book list needs to be connected to the books piece of state.

# Importing Redux into BookList

At the very top of the component, we imported "react-redux", specifically the connect function. Connect takes a function and a component and produces a container. The container is a component that is aware of the state contained within redux. The *mapStateToProps* function is key here, the first argument is the state and it returns an object; whatever object is returned will be available to our component as *this.props*. In our case, we want access to *this.props.books*. So we return an object with a key of *books* and a value of *state.books* because our books reducer is returning the *books* property here or array of books. Two things to note now is that whenever our application state changes, lets say we're loading a list of books from some remote server which takes some time or a user clicks on something and that changes the list of books; if our state ever changes, this container will instantly render with the new list of books. Another thing is by using *connect*, whenever the application state changes, the object in the state function will be assigned as props to the component.

# Containers and Reducers Review

First, remember that Redux serves to construct the application state and react provides the views to display that state. The two libraries and disconnected and only via the use of 'react-redux' that we get any clear connection between the two. Next, the application state is generated by reducer functions. We created one reducer called "reducers_book.js" (BooksReducer) which always returns an array of books no matter what. The array contains a list of objects where each obj represents each book (the title). We added the BooksReducer to our combined reducers call (*combineReducers()*) inside of *index.js* inside of reducers folder. This reducers going to add a key to our global application state called *books* where the key is *books* and the value is whatever gets returned from the *BooksReducer* which in this case is our array of books. Our state is really just always going to be equal to an object with a key of books and a value of an array of books. Thats it.

Next we created a component called BookList. It started off as a component but then we decided that it needed to be aware of our state within our redux side of the application. Because BookList had to be aware of that state, we decided to promote it to a container, and we did that by importing the connect function from react-redux and then we defined mapStateToProps and we hooked our component together with mapStateToProps with our connect function. We chose the BookList component to connect to the redux store specifically because only BookList in our application only cares about the books. App.js doesn't really care and it doesn't need to know about the list of books at all. In the end, we made sure that app.js rendered our BookList.

Redux generated a state object that contained our books and then mapped that state as props to our component. Because the state was updated via our reducer, our component re-rendered with that list of books.

# Actions and Action Creators

One problem is that our BooksReducer lists the same books. So in other words, our application state is always the same. Its 100% static. We don't have the ability to change that state over time. In a little bit, we're going to want to be able to introduce the concept of an active book. Of course, the active book needs to be able to change upon the user clicking buttons. Changing state is what action and action creators are for.

# Lifecycle of Actions in Redux Application

Everything in a redux app starts off with an event triggered by a user either directly or indirectly. This event could be them clicking on a button, or selecting an item from a dropdown or it can be indirect things like an AJAX request finishing loading up or a page initially loading up on the actual web page. All of these events can optionally call an action creator. An action creator is a function that returns an action. So the action creator returns an object when a button is clicked and that object is then automatically sent to all the different reducers inside of the application. We might have 20 different reducers, all of these actions are going to flow via all of those reducers. Reducers can choose depending on the action to return a different piece of state depending on what the action is. That newly returned piece of state then gets piped into the application state and that application state then gets pumped back into our react application which causes all of our components to re-render.
