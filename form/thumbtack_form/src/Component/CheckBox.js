import React from 'react'

export class CheckBox extends React.Component {
  constructor(props){
    super(props)
    this.state = { check: true }
  }

  render() {
    return(
        <div>
          <form onSubmit={e => this.doSubmit(e)}>
            <label>
              <input type='checkbox'
                onChange={e => this.doChange(e)}
                checked={this.state.check}
              />
            </label><br />
            <input type='submit' value='submit' />
          </form>
        </div>
    )
  }

  doChange(e) {
    this.setState({ check: !this.state.check })
  }

  doSubmit(e) {
    e.preventDefault()
    window.alert(this.state.check ? 'eat' : 'not eat')
  }
}
