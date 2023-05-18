const React = require('react');

class Show extends React.Component {
    render(){
        const logs = this.props.logs;
        return(
            <div>
                <nav>
                    <a href='/logs/'>back</a>
                </nav>
                <ul><h2>
                    Title: {logs.title.toUpperCase()}<br></br>
                    Entry: {logs.entry.toUpperCase()}<br></br>
                    Ship-Functionality: {
                        logs.shipIsBroken?
                        'SHIP IS NOT FUNCTIONAL':
                        'SHIP IS FUNCTIONAL'
                    }
                </h2></ul>
            </div>
        )
    }
}

module.exports= Show;