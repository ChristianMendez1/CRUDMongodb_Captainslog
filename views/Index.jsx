const React = require('react');

class Index extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <a href='/logs/new'>Create a new log</a>
                </nav>
                <ul>
                    {this.props.logs.map((log, x) => {
                        return(
                            <li>
                                <ul>
                                    title: {log.title}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports= Index;