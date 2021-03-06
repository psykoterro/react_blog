import React, { Component } from "react";

class CategoriesElement extends Component {

  constructor(props) {
    super(props);
  }


  render(){
    return (
        <div className="row">
          {this.props.items.map(
              (item) =>
                  <div key={item.id} className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href={"#"+encodeURI(decodeURI(item.nom))}>
                          <img src={item.image.path} alt={item.image.alt} title={item.image.title} width="15px"/>&nbsp;
                          {item.nom}
                        </a>
                      </li>
                    </ul>
                  </div>
          )}
        </div>
    )
  }

};

export default CategoriesElement;