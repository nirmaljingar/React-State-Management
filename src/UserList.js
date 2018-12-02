import React, { Component } from "react";
class UserList extends Component {
  render() {
  	const {users, usersWhoLikedMovie} = this.props;
    
if(!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
  return "<p>nobody liked this movie.";
}

	const listofItems = usersWhoLikedMovie.map(id => (
      <li key={id}>
        <p>{users[id].name}</p>
        </li>
    ));

	return <ul>{listofItems}</ul>;
}
}
export default UserList;