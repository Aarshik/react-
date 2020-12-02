import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

class Menu extends Component {

    constructor(props) {
        super(props);


        this.state = {
            selectedDish: null
        }


    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});

    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {

        const Menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {Menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}
Menu.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    comment: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      comment: PropTypes.string,
      author: PropTypes.string,
      date: PropTypes.string,
    })),
  })),
};

// Define here the default value to attribute to your dishes props
Menu.defaultProps = {
  dishes: [],
};


export default Menu;
