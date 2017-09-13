var Nav = React.createClass({
render: function(){
return (
<nav className="navbar navbar-default">
	<div className="container">
		<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span className="sr-only">Toggle navigation</span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="#">Tieto</a>
		</div>
		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul className="nav navbar-nav navbar-right">
				<li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
				<li><a href="#">History </a></li>
				<li><a href="#">Settings </a></li>
			</ul>
		</div>
	</div>
</nav>
);
}
});
ReactDOM.render(<Nav />, document.getElementById('nav'));