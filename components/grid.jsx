var Grid = React.createClass({
  render: function(){
    return (
    <div className="container">
      <div className="row show-grid">
        <div className="col-xs-12 col-sm-6 col-md-8"><h2>Power Companies</h2></div>
        <div className="col-xs-6 col-md-4 text-right">
          <button type="button" className="btn btn-primary">Add New Company</button>
        </div>
      </div>
      <div className="row show-grid">
        <div className="col-xs-12 table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Logo</th>
                <th>Contact Email</th>
                <th>Status</th>
                <th>Actions (Links / icons)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Company 1</td>
                <td>Logo Image</td>
                <td>company1@domain.com</td>
                <td>active</td>
                <td>
               <div className="btn-group" role="group">
                  <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit</button>
                  <button type="button" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-send" aria-hidden="true"></span> Resend</button>
                  <button type="button" className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
                </div>
                </td>
              </tr>
              <tr>
                <td>Company 2</td>
                <td>Logo Image</td>
                <td>company2@domain.com</td>
                <td>Pending</td>
                <td>
               <div className="btn-group" role="group">
                  <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit</button>
                  <button type="button" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-send" aria-hidden="true"></span> Resend</button>
                  <button type="button" className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
                </div>
                </td>
              </tr>
              <tr>
                <td>Company 3</td>
                <td>Logo Image</td>
                <td>company3@domain.com</td>
                <td>Pending</td>
                <td>
               <div className="btn-group" role="group">
                  <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit</button>
                  <button type="button" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-send" aria-hidden="true"></span> Resend</button>
                  <button type="button" className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
                </div>
                </td>
              </tr>
              <tr>
                <td>Company 3</td>
                <td>Logo Image</td>
                <td>company3@domain.com</td>
                <td>Pending</td>
                <td>
               <div className="btn-group" role="group">
                  <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit</button>
                  <button type="button" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-send" aria-hidden="true"></span> Resend</button>
                  <button type="button" className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
});
ReactDOM.render(<Grid />, document.getElementById('grid'));