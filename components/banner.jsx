var Banner = React.createClass({
  render: function(){
    return (
		<div className="jumbotron">
		  <div className="container">
		    <h1>Company Administration</h1>
		  </div>
		</div>
    );
  }
});

ReactDOM.render(<Banner />, document.getElementById('banner'));