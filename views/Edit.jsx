const React = require('react');

class Edit extends React.Component {
  render() {
    return (
        <div>
            <h1>Edit Pokemon</h1>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Img: <input type="text" name="img" /><br/>
                <input type="submit" name="" value="Update Pokemon"/>
             </form>
        </div>);
  }
}

module.exports = Edit;