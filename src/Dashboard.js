import React, { Component } from "react";
import MovieCard from './MovieCard';

class Dashboard extends Component {
  render() {
    const {usersByMovie, users, movies} = this.props;
    console.log("================================>",usersByMovie);
    const movieCards = Object.keys(movies).map(id => (
    <MovieCard 
    	key = {id}
        users = {users}
		usersWhoLikedMovie = {usersByMovie[id]}
		movieInfo = {movies[id]}
    />
      ));
	return <ul>{movieCards}</ul>
  }
}
  
export default Dashboard;