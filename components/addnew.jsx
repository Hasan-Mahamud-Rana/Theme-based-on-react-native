var Addnew = React.createClass({
  render: function(){
    return (
		<div className="container">
			<div className="row show-grid">
				<div className="col-xs-6">
					<div className="panel panel-default">
						<div className="panel-heading">Add/Edit Company</div>
						<div className="panel-body">
							<form>
								<div className="form-group">
									<label htmlFor="companyName">Company Name</label>
									<input type="text" className="form-control" id="companyName" placeholder="Company Name"/>
								</div>
								<div className="form-group">
									<label for="companyEmail">Contact Email</label>
									<input type="email" className="form-control" id="companyEmail" placeholder="Contact Email"/>
								</div>
								<div className="form-group">
									<label for="companyLogo">Company Logo</label>
									<input type="file" id="companyLogo"/>
								</div>
								<div className="btn-group" role="group">
									<button type="submit" className="btn btn-danger "><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancel</button>
									<button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-send" aria-hidden="true"></span> Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
});
ReactDOM.render(<Addnew />, document.getElementById('addnew'));