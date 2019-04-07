var Card = require('./card.js');
var ReactDOM = require('react-dom');
var React = require('react');
const cardData = require('./flashCardData.js');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: []
    };

    this.shuffleBackward = this.shuffleBackward.bind(this);
    this.shuffleForward = this.shuffleForward.bind(this);

  }

  componentDidMount() {
    this.setState({ cardData: cardData });
  }

  shuffleBackward() {
    const { cardData } = this.state;
    const newCardData = [cardData[6], ...cardData.slice(0, 6)];
    this.setState({cardData: newCardData}); 
  }

  shuffleForward() {
    const { cardData } = this.state;
    const newCardData = [cardData[0], ...cardData.slice(1)];
    this.setState({cardData: newCardData});
  }

  render() { 
    return(
      <div className="App">
        <h1 className="title">
          Flashback
        </h1>
        <p className="sub-title">
          An interactive flashcard app.
        </p>
        <div className='card-list'>
          {this.state.cardData.map((card, index) => <Card key={index} front={card.front} index={index} back={card.back}/>)}
        </div>
        <div className='buttons'>
          <button onClick={() => this.shuffleBackward()}>
            &lt;
          </button>
          <button onClick={() => this.shuffleForward()}>
            &gt;
          </button>
        </div>
      </div>
    ); 
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
