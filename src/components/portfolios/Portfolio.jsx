import React from "react";
import "./portfolio.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }
  handleClick() {
    this.setState({ showMore: true });
  }

  render() {
    const list = [
      '<a target="_blank" href="https://moviehub.pixelsoft.digital/">MOVIEHUB</a>',
      '<a target="_blank" href="https://www.redoox.com/">REDOOX</a>',
      '<a target="_blank" href="https://ddmlk.com/">DDMLK</a>',
      '<a target="_blank" href="https://www.yfdown.info/">YFDOWN</a>',
      '<a target="_blank" href="https://audiotape.site/">AUDIOTAPE</a>',
      '<a target="_blank" href="https://roitare.lk/">ROITARE</a>',
      '<a target="_blank" href="https://glimmercroft.com/">GLIMMERCROFT</a>',
      '<a target="_blank" href="https://beginningdiscgolf.com/">beginningdiscgolf</a>',
    ];

    const numberOfItems = this.state.showMore ? list.length : 10;
    return (
      <>
        <div className="cards">
          {list.slice(0, numberOfItems).map((item, index) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: item }}></div>
            );
          })}
        </div>
        <button className="show-more" onClick={() => this.handleClick()}>
          Show more
        </button>
      </>
    );
  }
}

export default Portfolio;
