class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      flipped: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.flipped === true) {
      this.setState({ flipped: false });
    }

  }

  flipCard = () => {
    if (this.props.index === 0) {
      this.setState({flipped: !this.state.flipped});
    }
  }

  cardClass = () => this.state.flipped ? 'Card -back' : 'Card -front';
  
  render() {
    return (
      <div className={this.cardClass()} onClick={() => this.flipCard()}>
        { !this.state.flipped ?
          <div className='front'>
            <h3 className='question'>
             {this.props.front.question}
            </h3>
            <p className='hint'>
              <span>Hint:</span>
              {this.props.front.hint}
            </p>
          </div>
          :
          <div className='back'>
            <div className='image'>
              <img src={this.props.back.image} />
            </div>
            <h3 className='answer'>
              {this.props.back.answer}
            </h3>
            <p className='description'>
              {this.props.back.description}
            </p>
          </div>
        }
      </div>
    );
  }
}
