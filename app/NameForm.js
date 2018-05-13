import React, {Component} from 'react';

class NameForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          textvalue: 'Please input name',
          textareavalue: 'Please write an essay about your favorite DOM element.'
        };
  
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    //由于 value 属性是在我们的表单元素上设置的，因此显示的值将始终为 React数据源上this.state.value 的值。
    //由于每次按键都会触发 handleChange 来更新当前React的state，所展示的值也会随着不同用户的输入而更新
    handleTextChange(event) {

        console.log('Event target type = ' + event.target.type);
        console.log('Event target value = ' + event.target.value);

        this.setState({textvalue: event.target.value});

        //change input value into uppercase
        //this.setState({value: event.target.value.toUpperCase()});
    }
  
    handleTextAreaChange(event) {

        console.log('Event target type = ' + event.target.type);
        console.log('Event target value = ' + event.target.value);

        this.setState({textareavalue: event.target.value});
    }

    handleSubmit(event) {

      alert('Form was submitted: ' + this.state.textvalue);
      event.preventDefault();
    }
  
    render() {

      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.textvalue} onChange={this.handleTextChange} />
            </label>
            <br />
            <label>
              Message:
              <textarea value={this.state.textareavalue} onChange={this.handleTextAreaChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
}

export default NameForm