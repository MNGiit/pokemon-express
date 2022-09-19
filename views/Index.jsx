const React = require("react"); // must have

class Index extends React.Component {
    render() {
        // Put props obj to destructure
        const { pokemon } = this.props;

        // Return
        return (
        <div>
            <h1>Pokemon Index</h1>
            <ul>
                {pokemon.map((poke, i) => {
                    return (
                        <li><a href={`/pokemon/${i}`}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</a></li>
                    )
                })}
            </ul>
        </div>
        );
    }
}

module.exports = Index;