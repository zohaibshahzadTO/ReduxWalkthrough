# ReduxWalkthrough

# What is Redux?

Redux is a predictable state container for javascript applications. Lets consider a traditional javascript application. Lets say that we're making an app that displays a list of books and it can show a list of books over on the left hand side. When a user clicks on a book, it will show details about that book to the user. 

When taking a second look, consider the structure of the application both on the view layer and data layer. The app is really divided into two parts, the data that powers the app and the views that display that data. There's two types of data that make that app work: a list of books which are displayed on the sidebar and a currently selected book which is displayed in the detail view. On the view side, we have a list view, list item, detail view (which shows the detail for the currently selected book). 

Redux is the data contained inside this application box whereas React is really the views contained inside the app box. When redux explains itself as a state container, it really means a collection of all the data that describes the app. This not only includes the hard data such as the list of books but it also includes more meta level properties like what is the currently selected book. React on the other hand represents the views which translates the app's data into something that can be displayed on the screen which the user can interact with. Redux centralizes all of the data into a single object which is referred to as the state (application level state).

# More Examples with Redux

 