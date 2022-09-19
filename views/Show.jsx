const React = require("react"); // must have

class Show extends React.Component {
    render() {
        // Put props obj to destructure
        const { pokemon } = this.props;

        // Return. Must have parent element or <> </>
        return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src={pokemon.img + ".jpg"}></img>
                <a href="/">back</a>
    
            
        </div>
        );
    }
}

module.exports = Show;