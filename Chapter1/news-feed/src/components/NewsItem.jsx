import React, { Component, PropTypes } from 'react';
import Title from './Title';


const Byline = () => <h3>Byline component..</h3>
const Description = () => <h3>Description component..</h3>
const Image = () => <h3>Description component..</h3>

export default class NewsItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  renderBody() {
    if (this.state.expanded) {
      return (
        <div>
          <Byline />
          <Description />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div
        className="news-item"
        onClick={this.onClick}
      >
        <Image />
        <Title
          highlighted
        >
          {this.props.titleText}
        </Title>
        {this.renderBody()}
      </div>
    );
  }

}

NewsItem.propTypes = {
  titleText: PropTypes.string.isRequired
};
