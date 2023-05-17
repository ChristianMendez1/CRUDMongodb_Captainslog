const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <form action="/logs" method="POST">
                title:<input type='text' name='title' ></input><br></br>
                entry:<input type='textarea' name='entry' ></input><br></br>
                Ship is broken:<input type='checkbox' name='shipIsBroken' ></input><br></br>
                <input type="submit" />
            </form>
        </div>);
    }
  }

module.exports = New;