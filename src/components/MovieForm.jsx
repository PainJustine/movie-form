import React, { Component } from "react";
import "./MovieForm.css";

export default class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addFavouritemovie = this.addFavouritemovie.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm(event) {
    event.preventDefault();
  }

  addFavouritemovie() {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    const url = "https://post-a-form.herokuapp.com/api/movies";

    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Your favourite movie has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding your favourite movie.");
      });
  }

  render() {
    return (
      <div className="movie-form">
        <h1>About your favourite movie</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                required="required"
                id="title"
                name="title"
                placeholder="Title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                required="required"
                id="poster"
                name="poster"
                placeholder="http://..."
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <input
                type="textarea"
                required="required"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input
                type="submit"
                value="Submit"
                onClick={this.addFavouritemovie}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
