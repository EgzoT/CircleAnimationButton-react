import React from 'react';

import CircleAnimationButton from './CircleAnimationButton-react/CircleAnimationButton';
import { CircleAnimationButtonDanger, CircleAnimationButtonSuccess, CircleAnimationButtonWarning, CircleAnimationButtonPrimary, CircleAnimationButtonDark, CircleAnimationButtonLight, CircleAnimationButtonInfo } from './CircleAnimationButton-react/CircleAnimationButtons';
import CircleAnimationButtonTemplate from './CircleAnimationButton-react/CircleAnimationButtonTemplate';
import IconFA from './CircleAnimationButton-react/IconFA'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { faStop, faCheck, faPause, faMouse, faArrowCircleLeft, faExpandAlt, faExpand, faTachometerAlt, faPalette, faTools, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const app = {
    textAlign: 'center'
}

const appMainContainer = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto'
}

const textStyle = {
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
}

const smallTextStyle = {
    fontSize: 'calc(10px + 1vmin)',
    color: 'white'
}

const testClick = {
    backgroundColor: "#00000060",
    color: "white",
    padding: 15,
    marginTop: 15,
    fontSize: 'calc(10px + 1vmin)',
    borderRadius: 20
}

const deviceTypeStyle = {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 25,
    backgroundColor: "#00FF0040",
    borderRadius: 40
}

const code0 = "<CircleAnimationButtonDanger\n\ticon={ <IconFA icon={ faStop }/> }\n\ttext={ \"Cancel\" }\n\tstyle={{ marginTop: 10 }}\n/>\n\n<CircleAnimationButtonSuccess\n\ticon={ <IconFA icon={ faCheck }/> }\n\ttext={ \"Ok\" }\n\tstyle={{ marginTop: 10 }}\n/>\n\n<CircleAnimationButtonWarning\n\ticon={ <IconFA icon={ faPause }/> }\n\ttext={ \"Wait\" }\n\tstyle={{ marginTop: 10 }}\n/>";
const code1 = "<CircleAnimationButtonPrimary\n\ticon={ <IconFA icon={ faMouse }/> }\n\ttext={ \"Click\" }\n\tonClick={ this.onTestClick }\n/>";
const code2 = "<CircleAnimationButtonDark\n\ticon={ <IconFA icon={ faArrowCircleLeft }/> }\n\ttext={ \"Left\" }\n\tdirection={ \"left\" }\n/>";
const code3 = "<CircleAnimationButtonLight\n\ticon={ <IconFA icon={ faExpandAlt }/> }\n\ttext={ \"Expanded\" }\n\talwaysVisibleText={ true }\n\tautoWidth={ true }\n/>";
const code4 = "<CircleAnimationButton\n\ticon={ <IconFA icon={ faExpand } size={ \"2x\" }/> }\n\ttext={ \"Width/height change\" }\n\tcolor={ \"steelPurple\" }\n\theight={ 50 }\n\twidth={ 250 }\n/>";
const code5 = "<CircleAnimationButton\n\ticon={ <IconFA icon={ faExpand }/> }\n\ttext={ \"Animation time\" }\n\tcolor={ \"deepSea\" }\n\twidth={ 170 }\n\tanimationTime={ 3 }\n/>";
const code6 = "<CircleAnimationButtonInfo\n\ticon={ <IconFA icon={ faPalette }/> }\n\ttext={ \"Styling\" }\n\tstyle={{ marginTop: 20, marginBottom: 20 }}\n/>";
const code7 = "<CircleAnimationButton\n\ticon={ <IconFA icon={ faTools }/> }\n\ttext={ \"Styling\" }\n\tcolor={ \"springForest\" }\n\tfullStyle={{\n\t\tcontainer: { backgroundColor: 'red', boxShadow: 'none' },\n\t\tcontainerHover: { backgroundColor: 'red', boxShadow: 'none' },\n\t\tcircleContainer: {},\n\t\ttextContainer: {},\n\t\ttextContainerHover: {},\n\t\ttext: {},\n\t\ttextHover: {}\n\t}}\n/>";
const code8 = "<CircleAnimationButton\n\ticon={ <div style={{ margin: \"auto\" }}>( ͡° ͜ʖ ͡°)</div> }\n\ttext={ \"Own text\" }\n\tcolor={ \"skyBlue\" }\n\twidth={ 150 }\n\theight={ 55 }\n/>";
const code9 = "<CircleAnimationButtonTemplate\n\ticon={ <IconFA icon={ faPaintBrush }/> }\n\ttext={ \"Paint\" }\n\tborderColor={ \"#000000\" }\n\tcontainerColor={ \"#424242\" }\n\tlinearGradient={ \"0deg, #FF0000, #FF00FF\" }\n\ticonColor={ \"#33ffff\" }\n\ttextColor={ \"#99ffff\" }\n/>";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.isMobile = this.isMobileDevice();

        this.state = {
            testClick: false
        }
    }

    onChangeValue = (value, hexColor) => {
        this.setState({ colorId: value, hexColor: hexColor });
    }

    onTestClick = () => {
        this.setState({ testClick: !this.state.testClick });
    }

    isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ? true : false;
    }

    render() {
        return (
            <div style={ app }>
                <div style={ appMainContainer }>
                    <div style={ deviceTypeStyle }>
                        <p style={ textStyle }>
                            { this.isMobile ? "Mobile view" : "Desktop view" }
                        </p>
                        { this.isMobile ?
                        <p style={{ color: 'red', paddingDown: 5 }}>
                            For mobile devices button always will be expanded (detect mobile device), because mobile devices don't use hover gesture.
                        </p>
                        : null }
                    </div>

                    <p style={ textStyle }>
                        Example <code>CircleAnimationButton-react</code>
                    </p>

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <CircleAnimationButtonDanger
                        icon={ <IconFA icon={ faStop }/> }
                        text={ "Cancel" }
                        style={{ marginTop: 10 }}
                    />

                    <CircleAnimationButtonSuccess
                        icon={ <IconFA icon={ faCheck }/> }
                        text={ "Ok" }
                        style={{ marginTop: 10 }}
                    />

                    <CircleAnimationButtonWarning
                        icon={ <IconFA icon={ faPause }/> }
                        text={ "Wait" }
                        style={{ marginTop: 10 }}
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code0 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Test onClick
                    </p>

                    <CircleAnimationButtonPrimary
                        icon={ <IconFA icon={ faMouse }/> }
                        text={ "Click" }
                        onClick={ this.onTestClick }
                    />

                    { this.state.testClick ?
                    <div style={ testClick }>Clicked</div>
                    : null}

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code1 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Expand to left
                    </p>

                    <CircleAnimationButtonDark
                        icon={ <IconFA icon={ faArrowCircleLeft }/> }
                        text={ "Left" }
                        direction={ "left" } 
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code2 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Always expanded
                    </p>

                    <CircleAnimationButtonLight
                        icon={ <IconFA icon={ faExpandAlt }/> }
                        text={ "Expanded" }
                        alwaysVisibleText={ true }
                        autoWidth={ true }
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <p style={ smallTextStyle }>
                        To better effect add <code style={{ color: 'red' }}>autoWidth = true</code> to auto fit component to text
                    </p>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code3 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Width/height change
                    </p>

                    <CircleAnimationButton
                        icon={ <IconFA icon={ faExpand } size={ "2x" }/> }
                        text={ "Width/height change" }
                        color={ "steelPurple" }
                        height={ 50 }
                        width={ 250 }
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code4 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Animation time
                    </p>

                    <CircleAnimationButton
                        icon={ <IconFA icon={ faTachometerAlt }/> }
                        text={ "Animation time" }
                        color={ "deepSea" }
                        width={ 170 }
                        animationTime={ 3 }
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code5 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Fast styling
                    </p>

                    <CircleAnimationButtonInfo
                        icon={ <IconFA icon={ faPalette }/> }
                        text={ "Styling" }
                        style={{ marginTop: 20, marginBottom: 20 }}
                    />

                    <p style={ smallTextStyle }>
                        Stylize like normal HTML element
                    </p>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code6 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Full styling
                    </p>

                    <CircleAnimationButton
                        icon={ <IconFA icon={ faTools }/> }
                        text={ "Styling" }
                        color={ "springForest" }
                        fullStyle={{
                            container: { backgroundColor: 'red', boxShadow: 'none' },
                            containerHover: { backgroundColor: 'red', boxShadow: 'none' },
                            circleContainer: {},
                            textContainer: {},
                            textContainerHover: {},
                            text: {},
                            textHover: {}
                        }}
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code7 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Own icon/component
                    </p>

                    <CircleAnimationButton
                        icon={ <div style={{ margin: "auto" }}>( ͡° ͜ʖ ͡°)</div> }
                        text={ "Own text" }
                        color={ "skyBlue" }
                        width={ 150 }
                        height={ 55 }
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code8 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Own color style
                    </p>

                    <CircleAnimationButtonTemplate
                        icon={ <IconFA icon={ faPaintBrush }/> }
                        text={ "Paint" }
                        borderColor={ "#000000" }
                        containerColor={ "#424242" }
                        linearGradient={ "0deg, #FF0000, #FF00FF" }
                        iconColor={ "#33ffff" }
                        textColor={ "#99ffff" }
                    />

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code9 }
                    </SyntaxHighlighter>

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>
                </div>
            </div>
        );
    }
}

export default App;
