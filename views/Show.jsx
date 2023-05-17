const React = require('react');

class Show extends React.Component {
    render(){
        const logs = this.props.logs;
        return(
            <div>
                <nav>
                    <a href='/logs/'>back</a>
                </nav>
                <ul>
                    title: {logs.title}<br></br>
                    entry: {logs.entry}<br></br>
                    ship status: {
                        logs.shipIsBroken?
                        'ship is broken':
                        'ship is not broken'
                    }
                </ul>
            </div>
        )
    }
}

module.exports= Show;