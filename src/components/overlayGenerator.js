
import 'rc-color-picker/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import ColorPicker from 'rc-color-picker';

class OverlayGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topBar: {
                enabled: true,
                text: 'OP=OP',
                backgroundColor: '#bac2c5',
                textColor: '#f00',
            },
            bottomBar: {
                enabled: true,
                backgroundColor: 'transparent',
                textColor: '#fff',
                text: 'Psuedanthias squamipinnis'
            },
            badge: {
                enabled: true,
                currency: '€',
                oldText: '36,25',
                newText: '15,00 of 5 voor 60',
                backgroundColor: "#ff5500",
                textColor: '#fff',
            },
            canvas: '',
            image: null,

        }
        this.handlechange = this.handlechange.bind(this);
        this.toggleBar = this.toggleBar.bind(this);
        this.renderToImage = this.renderToImage.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handlechange(e) {
        let fieldObject = e.target.name;
        let fieldVal = e.target.value;
        let fieldName = e.target.id;
        this.setState({
            [fieldObject]:
            {
                ...this.state[fieldObject],
                [fieldName]: fieldVal
            }
        })
    }

    handleColorChange(e, parentObject, varName) {
        this.setState({
            [parentObject]: {
                ...this.state[parentObject],
                [varName]: e.color
            }
        });
    }

    toggleBar(toggleObject) {
        this.setState({
            [toggleObject]:
            {
                ...this.state[toggleObject],
                enabled: !this.state[toggleObject].enabled
            }
        });
    }

    previewImage = event => {
        if (event.target.files[0]) {

            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({
                    image: reader.result
                });
            }

            reader.readAsDataURL(event.target.files[0])
        }
    }


    renderToImage() {
        html2canvas(document.getElementById("final-image")).then((canvas) => {
            document.getElementById("result").append(canvas);
        });
    }

    render() {
        let imagePreview = (<img src={this.state.image ? this.state.image : "./testimg.jpg"} />);
        return (
            <div>
                <div className="col-md-12 mb-5">
                    <h1>Image Overlay Generator</h1>
                </div>

                <div id="final-image" className="col-12 col-md-4 offset-md-4 form">
                    {imagePreview}
                    <div id="topBar" style={{
                        visibility: this.state.topBar.enabled ? 'visible' : 'hidden',
                        color: this.state.topBar.textColor,
                        backgroundColor: this.state.topBar.backgroundColor,
                    }} >
                        {this.state.topBar.text}
                    </div>
                    <div id="bottomBar" style={{
                        visibility: this.state.bottomBar.enabled ? 'visible' : 'hidden',
                        color: this.state.bottomBar.textColor,
                        backgroundColor: this.state.bottomBar.backgroundColor,
                    }} >
                        {this.state.bottomBar.text}
                    </div>
                    <div id="badge" style={{
                        visibility: this.state.badge.enabled ? 'visible' : 'hidden',
                        color: this.state.badge.textColor,
                        backgroundColor: this.state.badge.backgroundColor,
                    }} >
                        <span id="old-text"><s>{this.state.badge.currency + this.state.badge.oldText}</s></span>
                        <span id="new-text">{this.state.badge.currency + this.state.badge.newText}</span>
                    </div>
                </div>

                <form id="form" className="col-12 col-md-4 offset-md-4 form mb-5 p-3" onsubmit={this.onsubmit}>
                    <h3>Upload image</h3>
                    <div class="form-group row">
                        <input type="file" name="image" className="btn btn-info btn-block" onChange={this.previewImage} />
                    </div>
                    <hr />
                    <h3>Topbar</h3>
                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label form-check-label" for="topbarEnabled">Top bar?</label>
                        <div className="col-sm-9 pt-2 pl-5">
                            <input id="topbarEnabled" className="form-check-input" type="checkbox" onChange={() => this.toggleBar("topBar")} defaultChecked={this.state.topBar.enabled} />
                        </div>
                        <label className="col-sm-3 col-form-label form-check-label">Text</label>
                        <div className="col-sm-9">
                            <input className="form-control" id="text" name="topBar" type="text" onChange={this.handlechange} value={this.state.topBar.text} />
                        </div>
                    </div>
                    <hr />
                    <h3>Bottom Bar</h3>
                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label form-check-label" for="bottombarEnabled">Bottom bar?</label>
                        <div className="col-sm-9 pt-2 pl-5">
                            <input id="bottombarEnabled"
                                className="form-check-input"
                                type="checkbox" onChange={() => this.toggleBar("bottomBar")} defaultChecked={this.state.bottomBar.enabled} />
                        </div>
                        <label className="col-sm-3 col-form-label form-check-label">Text</label>
                        <div className="col-sm-9">
                            <input className="form-control" id="text" name="bottomBar" type="text" onChange={this.handlechange} value={this.state.bottomBar.text} />
                        </div>
                    </div>
                    <hr />
                    <h3>Badge</h3>
                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label form-check-label" for="bottombarEnabled">Badge?</label>
                        <div className="col-sm-9 pt-2 pl-5">
                            <input id="bottombarEnabled"
                                className="form-check-input"
                                type="checkbox" onChange={() => this.toggleBar("badge")} defaultChecked={this.state.badge.enabled} />
                        </div>
                        <label className="col-sm-3 col-form-label form-check-label">Old Text</label>
                        <div className="col-sm-9">
                            <input className="form-control" id="oldText" name="badge" type="text" onChange={this.handlechange} value={this.state.badge.oldText} />
                        </div>
                        <label className="col-sm-3 col-form-label form-check-label">New Text</label>
                        <div className="col-sm-9">
                            <input className="form-control" id="newText" name="badge" type="text" onChange={this.handlechange} value={this.state.badge.newText} />
                        </div>
                        <label className="col-sm-3 col-form-label form-check-label">Currency</label>
                        <div className="col-sm-9">
                            <input className="form-control" id="currency" name="badge" type="text" onChange={this.handlechange} value={this.state.badge.currency} />
                        </div>
                    </div>
                </form>
                <div className="col-12 col-md-4 offset-md-4 form mt-5">
                    <button onClick={this.renderToImage} className="btn btn-success btn-block">
                        Save image
                    </button>
                </div>
                <div id="result" className="col-12 col-md-4 offset-md-4 ">
                    Result (Right click, save as to download image):

                    </div>
            </div>
        )
    }
}

export default OverlayGenerator