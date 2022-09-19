const React = require("react"); // must have

class Show extends React.Component {
    render() {
        // Put props obj to destructure
        const { pokemon } = this.props;

        // Return
        return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src={pokemon.img}></img>
        </div>
        );
    }
}

module.exports = Show;