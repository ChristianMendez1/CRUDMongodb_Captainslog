const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
    render(){
        const logs = this.props.logs;
        return(
            <DefaultLayout title={"Logs Index Page"}>
                <nav>
                    <a href='/logs/new'>Create a new log</a>
                </nav>
                <ul>
                    {logs.map((log) => {
                        return(
                            <li key={log._id}>
                                title: <a href={`/logs/${log._id}`}>{log.title}</a><br></br>
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/>
                                </form>
                                <a href={`/logs/${log._id}/edit`}>Edit Log</a>
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports= Index;