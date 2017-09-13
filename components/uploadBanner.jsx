var Banner = React.createClass({
  render: function(){
    return (
		<div className="jumbotron">
		  <div className="container">
		    <h1>Upload</h1>
		  </div>
		</div>
    );
  }
});
ReactDOM.render(<Banner />, document.getElementById('uploadBanner'));