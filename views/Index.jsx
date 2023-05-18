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
                                <h1>Title: <a href={`/logs/${log._id}`}>{log.title.toUpperCase()}</a></h1>
                                <a href={`/logs/${log._id}/edit`}>edit log</a>
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="delete log"/>
                                </form>
                            </li>
                        )
                    })}
                </ul>
                <a href='/'>back</a>
            </DefaultLayout>
        )
    }
}

module.exports= Index;