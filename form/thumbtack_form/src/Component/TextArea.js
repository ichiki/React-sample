import React from 'react'

 export class TextArea extends React.Component {
   constructor(props) {
      super(props)
      this.state = { value: '' }
   }

   render() {
      return(
        <div>
          <form onSubmit = {e => this.doSubmit(e)}>
            <textarea
              onChange = {e => this.doChange(e)}
              value = {this.state.value}
            /><br />
            <input type = 'submit' value='submit' />
          </form>
        </div>

      )
   }

   doChange(e) {
     this.setState({ value: e.target.value })
   }

   doSubmit(e) {
     e.preventDefault()
     window.alert(this.state.value)
   }

 }
