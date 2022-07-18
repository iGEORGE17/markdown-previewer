import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { marked } from 'marked'

const initialState = `
# heading
## subheading

**A Bold Text**
...

> A Blockquote with some random text is aligned either to the left,
>
> right or center 

...

Get chelsea football news at [Chelsea news](http://chelseanews.com)



- One
- Two
- Three

this is an inline \` <div></div>\`

This is a block of code

\`\`\`
let x = 3;

let y = 4;

const z = x + y;

\`\`\`

![icon logo](https://grafxflow.co.uk/storage/app/uploads/public/5ad/e5b/d9b/thumb_891_266_0_0_0_auto.png)

 
`;

class Editor extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         text: initialState,
      }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value,
        })
    }
  render() {
      const markdown = marked(this.state.text, {breaks: true})
    return (
      <section>
        <Container className='d-flex flex-column justify-content-center'>
            <Container id="title" className='d-flex py-5 justify-content-center align-items-center'>
                <h1><i class="fa-brands fa-markdown"></i> Markdown Previewer</h1>
            </Container>
            <Row>
                <Col lg={6}>
                <p className='subtitle'>Markdown</p>
                <textarea id='editor' 
                placeholder="Hello World"
                    value={this.state.text} 
                    onChange={this.handleChange}
                />                
                </Col>

                <Col lg={6}>
                    <p className='subtitle'>Preview</p>
                    <Container id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
                </Col>
            </Row>
        </Container>
      </section>
    )
  }
}

export default Editor