var Grid = React.createClass({
render: function(){
return (
<div className="container">
  <div className="row show-grid">
    <div className="col-xs-12 col-sm-6 col-md-4">
      <strong>Id</strong>
      <p>1165</p>
      <strong>Name</strong>
      <p>PERUS-24-Y02</p>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-4">
      <strong>Response Due Date</strong>
      <p>30 Mar 2016</p>
      <strong>Offer Validity End Date</strong>
      <p>30 Mar 2016</p>
    </div>
    <div className="col-xs-6 col-sm-6 col-md-4">
      <strong>Description</strong>
      <p>Zonae aurea terra crescendo exemit, praecipites membra aere nix frigore.</p>
    </div>
  </div>
  <div className="row show-grid">
    <div className="col-xs-12">
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Product: PERUS-24-YO2 (1024)
            </a>
            </h4>
          </div>
          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">
              <div className="col-xs-9 table-responsive">
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Invoice Language</th>
                      <th>Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Finnish</td>
                      <td>Perussähkö 24 kk</td>
                    </tr>
                    <tr>
                      <td>Swedish</td>
                      <td>lorem ipsum dolor</td>
                    </tr>
                    <tr>
                      <td>Norwegian</td>
                      <td>lorem ipsum dolor</td>
                    </tr>
                    <tr>
                      <td>Company 3</td>
                      <td>Logo Image</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-xs-3">
                <p>Image</p>
              </div>
              <div className="col-xs-12">
                <h4> Product Parts</h4>
                <div className="row show-grid">
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group input-group">
                          <span className="input-group-addon productParts" >PERUS-24-YO2-EM-YO-MIT - Total Price: xxx Main</span>
                          <select className="form-control" id="sel1">
                            <option value="1" selected="selected">Main</option>
                            <option value="2">Price Add On</option>
                            <option value="3">Ignore</option>
                          </select>
                          <span className="input-group-addon">
                            <input type="checkbox"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group input-group">
                          <span className="input-group-addon productParts" >Product Part: PERUS-24-YO2-EM-PV-TUN</span>
                          <select className="form-control" id="sel1">
                            <option value="1">Main</option>
                            <option value="2" selected="selected">Price Add On</option>
                            <option value="3">Ignore</option>
                          </select>
                          <span className="input-group-addon">
                            <input type="checkbox"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group input-group">
                          <span className="input-group-addon productParts" >PERUS-24-YO2-PM-TUN - Total Price: xxx</span>
                          <select className="form-control" id="sel1">
                            <option value="1" selected="selected">Main</option>
                            <option value="2">Price Add On</option>
                            <option value="3">Ignore</option>
                          </select>
                          <span className="input-group-addon">
                            <input type="checkbox"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group input-group">
                          <span className="input-group-addon productParts" >Product Part: PERUS-24-YO2-EM-YO-TUN</span>
                          <select className="form-control" id="sel1">
                            <option value="1">Main</option>
                            <option value="2" selected="selected">Price Add On</option>
                            <option value="3">Ignore</option>
                          </select>
                          <span className="input-group-addon">
                            <input type="checkbox"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group input-group">
                          <span className="input-group-addon productParts" >Product Part: PERUS-24-YO2-EM-PV-MIT</span>
                          <select className="form-control" id="sel1">
                            <option value="1">Main</option>
                            <option value="2">Price Add On</option>
                            <option value="3" selected="selected">Ignore</option>
                          </select>
                          <span className="input-group-addon">
                            <input type="checkbox"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group input-group">
                          <span className="input-group-addon productParts" >Product Part: PERUS-24-YO2-EM-PV-MIT</span>
                          <select className="form-control" id="sel1">
                            <option value="1">Main</option>
                            <option value="2" >Price Add On</option>
                            <option value="3" selected="selected">Ignore</option>
                          </select>
                          <span className="input-group-addon">
                            <input type="checkbox"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingTwo">
            <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Product: Lorem Ipsum
            </a>
            </h4>
          </div>
          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingThree">
            <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Product: Lorem Ipsum
            </a>
            </h4>
          </div>
          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
});
ReactDOM.render(<Grid />, document.getElementById('grid'));