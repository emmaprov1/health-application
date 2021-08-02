// personal info component
class Step1 extends React.Component() {
  render () {
    if (this.props.currentStep !== 1) {
      return null;
    }
    // markup for personal info ui
    return (
      <div className="form-group">
        <label htmlFor="surname">Surname</label>
        <input
          className="form-control"
          id="surname"
          name="surname"
          type="text"
          placeholder="Surname"
          value={this.props.surname} // prop : the surname input data
          onChange={this.props.handleChange} // prop : puts data into state
        />
      </div>
    );
  }
}

class Step2 extends React.Component() {
  render () {
    if (this.props.currentStep !== 1) {
      return null;
    }
    // markup for personal info ui
    return (
      <div className="form-group">
        <label htmlFor="surname">Surname</label>
        <input
          className="form-control"
          id="surname"
          name="surname"
          type="text"
          placeholder="Surname"
          value={this.props.surname} // prop : the surname input data
          onChange={this.props.handleChange} // prop : puts data into state
        />
      </div>
    );
  }
}

// overall parent component
class RegsiterForm extends Component {
  constructor (props) {
    super(props)
    // bind the new functions for the next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);

    // set the initial input values
    this.state = {
      currentStep = 1,
      surname: '',
      firstname: '',
      middlename: '',
    }

    // bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
  }

  // test current step with ternery
  // _next and _prev will be called on the button click
  _next () {
    let currentStep = this.state.currentStep;
    // if the currentStep is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    })
  }

  _prev () {
    let currentStep = this.state.currentStep;
    // if the current step is 2 or 3, then subtract one on "prev" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    })
  }

  // the next and previous button functions
  get prevButton () {
    const currentStep = this.state.currentStep;
    // if the current step is not 1, then render the prev button
    if (currentStep !== 1) {
      return (
                <button onCick= { this._prev }>Previous</button>
      )
    }
    // else, return nothing
  }

  get prevButton () {
    const currentStep = this.state.currentStep;
    // if the current step is not 3, then render the next button
    if (currentStep < 3) {
      return (
                <button onCick= { this._next }>Next</button>
      )
    }
    // else, return nothing
  }

  // use the submitted data to set the state
  handleChange (event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

    // trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault();
      const { surname, firstname, middlename } = this.state;
      alert(`Your registration detail: \n Surname: ${surname} \n First Name: ${firstname} \n Middle Name: ${middlename}`)
    }

    return (
        // <React.Fragment>
            // <h1>Stepped Reg Form</h1>

            // Step { this.state.currentStep }

            // <form onSubmit={this.handleSubmit}>
            //     // render the form steps and pass in the required props
            //     <Step1 currentStep = {this.state.currentStep }
            //     handleChange = {this.handleChange }
            //     surname = { this.state.surname }
            //     />
            //     <Step2 currentStep = {this.state.currentStep }
            //     handleChange = {this.handleChange }
            //     surname = { this.state.firstname }
            //     />
            //     <Step3 currentStep = {this.state.currentStep }
            //     handleChange = {this.handleChange }
            //     surname = { this.state.middlename }
            //     />

            //     // render the buttons
            //     { this.prevButton }
            //     { this.nextButton }
            // </form>
        // </React.Fragment>
    )
}
