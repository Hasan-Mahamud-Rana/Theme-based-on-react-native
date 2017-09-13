var Banner = React.createClass({
  render: function(){
    return (
		<div className="jumbotron">
		  <div className="container">
		    <h1>Configure Standard Contract</h1>
		  </div>
		</div>
    );
  }
});
ReactDOM.render(<Banner />, document.getElementById('banner'));