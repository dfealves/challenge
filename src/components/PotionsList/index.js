import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class PotionsList extends Component {
  state = {
    potions: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("potions");
    console.log(response.data);
    this.setState({
      potions: Object.keys(response.data).map(index => response.data[index])
    });
  };

  render() {
    const { potions } = this.state;
    return (
      <>
        <section>
          <h1>Potions</h1>
          <div className="container">
            {potions.map(potion => (
              <div className="description_potions">
                <ul>
                  <li key={potion.id}>
                    <img src={potion.image} alt={potion.name} />
                    <strong>
                      {potion.name} -{" "}
                      <span className="price"> ${potion.price}</span>
                    </strong>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}
