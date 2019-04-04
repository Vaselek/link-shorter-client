import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";
import {connect} from "react-redux";
import { transformLink} from "../store/actions/transformLinkActions";

class TransformLinkContainer extends Component {
    state = {
        initialLink: ''
    }
    handleLinkChange = (e) => {
        this.setState({initialLink: e.target.value})
    }

    _renderTransformedLink = () => (
        <div>
            <h6 className="resulted-link">Your link now looks like this:</h6>
            <a href={`http://localhost:8000/${this.props.transformedLink}`}>http://localhost:8000/{this.props.transformedLink}</a>
        </div>
    )

    transformLink = (e) => {
        e.preventDefault()
        this.props.transformLink(this.state.initialLink)
    }

    renderError = () => {
        if (this.props.error) {
            return (<div style={{color: 'red'}}>{this.props.error}</div>)
        }
    }

    render() {
        return (
            <div>
                <h3>Shorten your link</h3>
                <Form onSubmit={(e)=>this.transformLink(e)}>
                    <FormGroup>
                        <Input type="text" required name="link" onChange={this.handleLinkChange} value={this.state.initialLink} id="link" placeholder="Enter URL here..." />
                    </FormGroup>
                    { this.renderError() }
                    <Button type="submit">Shorten!</Button>
                </Form>
                { this.props.transformedLink && this._renderTransformedLink() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transformedLink: state.transformLink.transformedLink,
        error: state.transformLink.error
    }
}

const mapDispatchToProps = (dispatch) => ({
  transformLink: (link) => dispatch(transformLink(link))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransformLinkContainer);