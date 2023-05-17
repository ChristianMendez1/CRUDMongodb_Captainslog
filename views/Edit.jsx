const React = require('react');
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component {
  render() {
    return (
        <DefaultLayout title="Edit Page">    
            <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
                title:<input type='text' name='title' defaultValue={this.props.logs.title}/><br></br>
                entry:<input type='textarea' name='entry' defaultValue={this.props.logs.entry}/><br></br>
                Ship is broken:
                    { this.props.logs.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/>}
                    <br/>
                <input type="submit" value="Submit Changes"/>
            </form>
        </DefaultLayout>
        );
    }
  }

module.exports = Edit;