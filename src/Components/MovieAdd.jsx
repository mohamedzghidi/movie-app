import React from "react";

function MovieAdd(props) {
  const handleAdd = () => {
    const newMovie = {
      title: document.getElementById("txtTitle").value,
      description: document.getElementById("txtDescription").value,
      posterUrl: document.getElementById("txtUrl").value,
      rate: document.getElementById("txtRate").value,
    };
    const newMovies = [...props.movies, newMovie];
    console.log(newMovies);
    props.updateMovies(newMovies);
    document.getElementById("txtTitle").value = "";
    document.getElementById("txtDescription").value = "";
    document.getElementById("txtUrl").value = "";
    document.getElementById("txtRate").value = "";
  };

  return (
    <table border="1px" width="500px" style={{ margin: "auto" }}>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Title"
              className="w95p"
              id="txtTitle"
            />
          </td>
        </tr>
        <tr>
          <td>
            <textarea
              type="text"
              placeholder="Description"
              className="w95p"
              id="txtDescription"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Poster URL"
              className="w95p"
              id="txtUrl"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Rate"
              className="w95p"
              id="txtRate"
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAdd}
            >
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MovieAdd;
