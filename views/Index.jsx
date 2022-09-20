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
                        // should put key={i} for convention
                        <li key={i}><a href={`/pokemon/${i}`}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</a></li>
                    )
                })}
            </ul>
            <a href="/pokemon/new">Create New Pokemon</a>
        </div>
        );
    }
}

module.exports = Index;