// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h2>{this.props.hasWatermark}</h2>
        <h2>{this.props.color}</h2>
        <h2>{this.props.weight}</h2>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, Product) {
    if(props[propName] === null) {
      return new Error('NO.')
    } else if(typeof props[propName] !== "number" || isNaN(props[propName])) {
      return new Error('BOOOO.')
    } else if(props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid prop weight supplied to Product. Validation failed.')
    }
  }
}

export default Product
