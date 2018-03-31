// contains all the different action creators that we make

export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
