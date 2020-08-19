import React, { Component } from 'react';
import './codewindows.css';

export default class AdvancedCodeWindow extends Component {
    state = {
        html: false,
        css: false,
        both: false,
        htmlCode: "",
        cssCode: ""
    };

    componentDidMount(){
        this.renderHTML();
    }

    switchCode = (id) => {
        if(id === "html"){
            this.renderHTML();
        } else if(id === "css"){
            this.renderCSS();
        } else {
            this.renderBoth();
        }
    }

    reRenderCodeWindow = () => {
        switch(true) {
            case this.state.html:
                this.renderHTML();
                break;

            case this.state.css:
                this.renderCSS();
                break;

            case this.state.both:
                this.renderBoth();
                break;

            default:
                this.renderHTML();
                break;
        }
    }

    renderHTML = () => {
        this.setState({ html: true, css: false, both: false }, () => {
            this.setState({htmlCode: this.formatHTMLText(this.props.html)});
        });
    }

    renderCSS = () => {
        this.setState({ html: false, css: true, both: false }, () => {
            this.setState({cssCode: this.getStyleRules(this.props.html)});
        });
    }

    renderBoth = () => {
        this.setState({ html: false, css: false, both: true }, () => {
            this.setState({htmlCode: this.formatHTMLText(this.props.html), cssCode: this.getStyleRules(this.props.html)});
        });
    }

    getStyleSheet = (className) => {
        for (let i = 0; i < document.styleSheets.length; i++) {
            for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
                if(document.styleSheets[i].cssRules[j].cssText.includes(className)) {
                    return document.styleSheets[i]
                }
            }
        }
    }

    getStyleRules = (className) => {
        let ruleText = "";
        let sheet = this.getStyleSheet(className);
        let animationNames = [];

        for(let i = 0; i < sheet.cssRules.length; i++) {
            if(sheet.cssRules[i].cssText.includes(className)) {
                ruleText += sheet.cssRules[i].cssText + "\n" ;
                if(sheet.cssRules[i].cssText.includes("animation:")){
                    animationNames.push(sheet.cssRules[i].style.animationName)
                }
            }
        }

        for(let i = 0; i < sheet.cssRules.length; i++) {
            if(sheet.cssRules[i].type === 7 && animationNames.includes(sheet.cssRules[i].name)) {
                ruleText += sheet.cssRules[i].cssText + "\n" ;
            }
        }

        ruleText = this.formatRuleText(ruleText, className);

        this.getAdvancedCSSCode(this.props.html)
        return ruleText;
    }

    formatRuleText = (ruleText, className) => {
        let demoClass = ruleText.split(className + " ");
        ruleText = className + " " + demoClass.join("");
        ruleText = ruleText.replace(/{/g, "{\n");
        ruleText = ruleText.replace(/ }/g, "}\n");
        ruleText = ruleText.replace(/;/g, ";\n");
        // ruleText = ruleText.replace(/ {4}}/g, "}");

        return ruleText;
    }

    getSpanElement = (content, classname) => {
        let span = document.createElement("span");
        span.className = classname;
        span.innerText = content;
        return <span className={classname}>{content}</span>;
    }

    analyzeCSSCodeRow = (codeRowText) => {
        let analysis = {
            isBeginRule: false,
            isEndRule: false,
            isRuleProperty: false,
        }

        let spanArray = [];

        if(codeRowText.includes("{") && !codeRowText.includes("}")){
            analysis.isBeginRule = true;
        }

        if(!codeRowText.includes("{") && !codeRowText.includes("}")){
            analysis.isRuleProperty = true;
        }

        if(!codeRowText.includes("{") && codeRowText.includes("}")){
            analysis.isEndRule = true;
        }

        if(analysis.isBeginRule){
            codeRowText.split(" ").forEach(rule => {
                if(rule !== "{"){
                    if(rule.includes(".")){
                        if(rule.includes(":")){
                            rule.split(":").forEach((text, increment) => {
                                if(increment === 0){
                                    spanArray.push(this.getSpanElement(text, "cw-rul"));
                                    spanArray.push(this.getSpanElement(":", "cw-col"));
                                } else if(increment === (rule.split(":").length - 1)){
                                    if(text.includes("(")){
                                        spanArray.push(this.getSpanElement(text.split("(")[0], "cw-rul"));
                                        spanArray.push(this.getSpanElement("(", "cw-perc"));
                                        spanArray.push(this.getSpanElement(text.split("(")[1].split(")")[0], "cw-num"));
                                        spanArray.push(this.getSpanElement(")", "cw-perc"));

                                        if(text.includes(",")){
                                            spanArray.push(this.getSpanElement(",", "cw-comma"));
                                        }
                                    } else {
                                        if(text.includes(",")){
                                            spanArray.push(this.getSpanElement(text.replace(",", ""), "cw-rul"));
                                            spanArray.push(this.getSpanElement(",", "cw-comma"));
                                        } else {
                                            spanArray.push(this.getSpanElement(text, "cw-rul"));
                                        }
                                    }
                                } else {
                                    if(text.includes("(")){
                                        spanArray.push(this.getSpanElement(text.split("(")[0], "cw-rul"));
                                        spanArray.push(this.getSpanElement("(", "cw-perc"));
                                        spanArray.push(this.getSpanElement(text.split("(")[1].split(")")[0], "cw-num"));
                                        spanArray.push(this.getSpanElement(")", "cw-perc"));
                                        spanArray.push(this.getSpanElement(":", "cw-col"));

                                    } else {
                                        spanArray.push(this.getSpanElement(text, "cw-rul"));
                                        spanArray.push(this.getSpanElement(":", "cw-col"));
                                    }
                                }
                            })
                            
                            spanArray.push(this.getSpanElement(" ", "cw-sp"));

                        } else {
                            if(rule.includes(",")) {
                                spanArray.push(this.getSpanElement(rule.replace(",", ""), "cw-rul"));
                                spanArray.push(this.getSpanElement(",", "cw-comma"));
                                spanArray.push(this.getSpanElement(" ", "cw-sp"));
                            } else {
                                spanArray.push(this.getSpanElement(rule, "cw-rul"));
                                spanArray.push(this.getSpanElement(" ", "cw-sp"));
                            }
                        }
                    } else {
                        if(!rule.includes(":")){
                            if(rule.includes(",")){
                                spanArray.push(this.getSpanElement(rule.replace(",", ""), "cw-tag"));
                                spanArray.push(this.getSpanElement(",", "cw-comma"));
                                spanArray.push(this.getSpanElement(" ", "cw-sp"));
                            } else {
                                spanArray.push(this.getSpanElement(rule, "cw-tag"));
                                spanArray.push(this.getSpanElement(" ", "cw-sp"));
                            }
                        } else {
                            rule.split(":").forEach((text, increment) => {
                                if(increment === 0){
                                    spanArray.push(this.getSpanElement(text, "cw-tag"));
                                    spanArray.push(this.getSpanElement(":", "cw-col"));
                                } else if(increment === (rule.split(":").length - 1)){
                                    if(text.includes("(")){
                                        spanArray.push(this.getSpanElement(text.split("(")[0], "cw-rul"));
                                        spanArray.push(this.getSpanElement("(", "cw-perc"));
                                        spanArray.push(this.getSpanElement(text.split("(")[1].split(")")[0], "cw-num"));
                                        spanArray.push(this.getSpanElement(")", "cw-perc"));
                                        if(text.includes(",")){
                                            spanArray.push(this.getSpanElement(",", "cw-comma"));
                                        }
                                    } else {
                                        if(text.includes(",")){
                                            spanArray.push(this.getSpanElement(text.replace(",", ""), "cw-rul"));
                                            spanArray.push(this.getSpanElement(",", "cw-comma"));
                                        } else {
                                            spanArray.push(this.getSpanElement(text, "cw-rul"));
                                        }
                                    }
                                } else {
                                    spanArray.push(this.getSpanElement(text, "cw-rul"));
                                    spanArray.push(this.getSpanElement(":", "cw-col"));
                                }

                            })

                            spanArray.push(this.getSpanElement(" ", "cw-sp"));
                        }
                    }
                } else {
                    spanArray.push(this.getSpanElement(rule, "cw-curl"));
                }
            })
        }

        if(analysis.isRuleProperty){
            spanArray.push(this.getSpanElement("   ", "cw-sp"));

            if(codeRowText.includes(":")){
                let propertyName = codeRowText.split(":")[0];
                let propertyValue = codeRowText.split(":")[1].replace(";", "");
                spanArray.push(this.getSpanElement(propertyName, "cw-prop"));
                spanArray.push(this.getSpanElement(":", "cw-col"))

                let propValueSplits = propertyValue.split("");
                
                for(let i = 0; i < propValueSplits.length; i++){
                    if(propValueSplits[i] === "(" || propValueSplits[i] === ")"){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-par"));
                    } else if(/^[0-9]$/.test(propValueSplits[i])){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-num"));
                    } else if(propValueSplits[i] === "-"){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-num"));
                    } else if(propValueSplits[i] === ","){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-comma"));
                    } else if(propValueSplits[i] === "."){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-dot"));
                    } else if(propValueSplits[i] === "'"){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-quo"));
                    } else if(propValueSplits[i] === '"'){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-quo"));
                    } else if(propValueSplits[i] === "%"){
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-perc"));
                    } else if(propValueSplits[i] === "s" && /^[0-9]$/.test(propValueSplits[i - 1])) {
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-meas"));
                    } else if(/^[0-9]$/.test(propValueSplits[i - 1]) && propValueSplits[i] === "d" && propValueSplits[i + 1] === "e" && propValueSplits[i + 2] === "g") {
                        spanArray.push(this.getSpanElement(propValueSplits[i] + propValueSplits[i + 1] + propValueSplits[i + 2], "cw-meas"));
                        i = i + 2;
                    } else if(/^[0-9]$/.test(propValueSplits[i - 1]) && propValueSplits[i] === "p" && propValueSplits[i + 1] === "x"){
                        spanArray.push(this.getSpanElement(propValueSplits[i] + propValueSplits[i + 1], "cw-meas"));
                        i++;
                    } else if(/^[0-9]$/.test(propValueSplits[i - 1]) && propValueSplits[i] === "e" && propValueSplits[i + 1] === "m"){
                        spanArray.push(this.getSpanElement(propValueSplits[i] + propValueSplits[i + 1], "cw-meas"));
                        i++;
                    } else if(/^[0-9]$/.test(propValueSplits[i - 1]) && propValueSplits[i] === "r" && propValueSplits[i + 1] === "e" && propValueSplits[i + 2] === "m"){
                        spanArray.push(this.getSpanElement(propValueSplits[i] + propValueSplits[i + 1] + propValueSplits[i + 2], "cw-meas"));
                        i = i + 2;
                    } else {
                        spanArray.push(this.getSpanElement(propValueSplits[i], "cw-prop-val"));
                    }
                }

                spanArray.push(this.getSpanElement(";", "cw-col"));
            }
        }

        if(analysis.isEndRule){
            spanArray.push(this.getSpanElement(codeRowText, "cw-curl"));
        }

        return spanArray
    }

    analyzeHTMLCodeRow = (codeRowText) => {
        let analysis = {
            isOpenTag: false,
            isOpenTagOnly: false,
            isCloseTag: false,
            elementTag: ""
        };

        if(codeRowText.includes("<") && !codeRowText.includes("</")){
            analysis.isOpenTag = true;
        }

        if(codeRowText.includes("<") && codeRowText.includes("</")){
            analysis.isCloseTag = true;
        }

        let spanArray = [];

        if(analysis.isOpenTag){
            let indentSpacing = codeRowText.split("<")[0];
            spanArray.push(this.getSpanElement(indentSpacing, "cw-sp"));
            codeRowText = "<" + codeRowText.split("<")[1];
            spanArray.push(this.getSpanElement("<", "cw-bk"));
            analysis.elementTag = codeRowText.split(" ")[0].replace("<", "");
            analysis.isOpenTagOnly = analysis.elementTag.includes(">");
            analysis.elementTag = codeRowText.split(" ")[0].replace("<", "").replace(">", "");
            spanArray.push(this.getSpanElement(analysis.elementTag, "cw-tag"));

            if(analysis.isOpenTagOnly){
                spanArray.push(this.getSpanElement(">", "cw-bk"));
            } else {
                spanArray.push(this.getSpanElement(" ", "cw-sp"));

                let cheaterDiv = document.createElement("div");
                cheaterDiv.innerHTML = codeRowText;
    
                let actualElement = cheaterDiv.firstChild;
    
                if(actualElement){
                    for(let i = 0; i < actualElement.attributes.length; i++) {
                        spanArray.push(this.getSpanElement(actualElement.attributes[i].name, "cw-attr"));
                        spanArray.push(this.getSpanElement("=", "cw-eq"));
                        spanArray.push(this.getSpanElement('"', "cw-quo"));
                        spanArray.push(this.getSpanElement(actualElement.attributes[i].value, "cw-attr-val"));
                        spanArray.push(this.getSpanElement('"', "cw-quo"));

                        if(i !== actualElement.attributes.length - 1) {
                            spanArray.push(this.getSpanElement(" ", "cw-sp"));
                        }
                    }
                }

                spanArray.push(this.getSpanElement(">", "cw-bk"));
            }
        }

        if(analysis.isCloseTag){
            let indentSpacing = codeRowText.split("<")[0];
            spanArray.push(this.getSpanElement(indentSpacing, "cw-sp"));
            codeRowText = "<" + codeRowText.split("<")[1];

            analysis.elementTag = codeRowText.split(" ")[0].replace("</", "").replace(">", "");
            spanArray.push(this.getSpanElement("</", "cw-bk"));
            spanArray.push(this.getSpanElement(analysis.elementTag, "cw-tag"));
            spanArray.push(this.getSpanElement(">", "cw-bk"));
        }

        if(!analysis.isOpenTag && !analysis.isCloseTag){
            spanArray.push(this.getSpanElement(codeRowText, "cw-txt"));
        }

        return spanArray;
    }

    formatHTMLText = (className) => {
        if(document.querySelector(className) !== null){
            let text = `${document.querySelector(className).innerHTML}`;
            
            text = `<div class="${document.querySelector(className).classList.value}">` + text + "</div>"
            text = text.replace(/>/g, ">\n");
            text = text.replace(/</g, "\n<");
            let textArray = text.split('\n').filter(t => t !== "");

            let formattedText = "";
            let breakTags = [ "<div", "</div", "<h1", "<h2", "<h3", "<h4", "<a", "<p", "<img", "<svg", "<path", "<ul", "<li", "</ul>", "</li>", "</a>", "<svg", "</svg>", "<butt", "<span", "</span" ];
            let indenters = [ "<div", "<ul", "<li", "<a", "<svg", "<span" ];
            let outdenters = [ "</div", "</ul>", "</li>", "</a>", "</svg>", "</span>" ];
            let indentCount = 0;

            textArray.forEach(t => {
                if (breakTags.filter(tag => t.includes(tag)).length > 0) {
                    formattedText += "\n"
                    if(indenters.filter(i => t.includes(i)).length > 0){
                        indentCount++;
                        for(let i = 0; i < indentCount; i++){
                            formattedText += "    ";
                        }
                    } else if(outdenters.filter(i => t.includes(i)).length > 0){
                        for(let i = 0; i < indentCount; i++){
                            formattedText += "    ";
                        }
                        indentCount--;
                    } else {
                        for(let i = 0; i < indentCount + 1; i++){
                            formattedText += "    ";
                        }
                    }
                    formattedText += t;
                } else {
                    formattedText += t;
                }
            })

            return formattedText;
        }
    }

    getAdvancedCSSCode = (className) => {
        let ruleText = "";
        let sheet = this.getStyleSheet(className);
        let animationNames = [];

        for(let i = 0; i < sheet.cssRules.length; i++) {
            if(sheet.cssRules[i].cssText.includes(className)) {
                ruleText += sheet.cssRules[i].cssText + "\n" ;
                if(sheet.cssRules[i].cssText.includes("animation:")){
                    animationNames.push(sheet.cssRules[i].style.animationName)
                }
            }
        }

        for(let i = 0; i < sheet.cssRules.length; i++) {
            if(sheet.cssRules[i].type === 7 && animationNames.includes(sheet.cssRules[i].name)) {
                ruleText += sheet.cssRules[i].cssText + "\n" ;
            }
        }

        ruleText = this.formatRuleText(ruleText, className);

        let rulesTextArray = ruleText.split("\n");

        return rulesTextArray;

    }

    getAdvancedHTMLCode = (className) => {
        if(document.querySelector(className) !== null){
            let text = `${document.querySelector(className).innerHTML}`;
            
            text = `<div class="${document.querySelector(className).classList.value}">` + text + "</div>"
            text = text.replace(/>/g, ">\n");
            text = text.replace(/</g, "\n<");
            let textArray = text.split('\n').filter(t => t !== "");
            let breakTags = [ "<div", "</div", "<h1", "<h2", "<h3", "<h4", "<a", "<p", "<img", "<svg", "<path", "<ul", "<li", "</ul>", "</li>", "</a>", "<svg", "</svg>", "<butt", "<span", "</span" ];
            let indenters = [ "<div", "<ul", "<li", "<a", "<svg", "<span", "<butt", "<rect" ];
            let outdenters = [ "</div", "</ul>", "</li>", "</a>", "</span>", "</svg", "</butt", "</rect" ];
            let indentCount = 0;

            let codeRowDetailsArray = [];

            textArray.forEach((t, increment) => {
                let lineText = "";

                if(increment === 0) {
                    lineText += t;
                } else {
                    if(indenters.filter(i => t.includes(i)).length > 0){
                        indentCount++;
                        for(let i = 0; i < indentCount; i++){
                            lineText += "    ";
                        }
                    } else if(outdenters.filter(i => t.includes(i)).length > 0){
                        for(let i = 0; i < indentCount; i++){
                            lineText += "    ";
                        }
                        indentCount--;
                    } else {
                        for(let i = 0; i < indentCount + 1; i++){
                            lineText += "    ";
                        }
                    }

                    lineText += t;
                }

                let codeRowDetails = {
                    value: lineText,
                    indentCount: indentCount
                };

                codeRowDetailsArray.push(codeRowDetails);
            })

            return codeRowDetailsArray;
        }
    }

    render(){
        return (
            <div className="code-box">
                <div className="code-selection-box">
                    <button id="html" className={"code-selection-button" + (this.state.html ? " active" : "")} onClick={() => this.switchCode("html")}>html</button>
                    <button id="css" className={"code-selection-button" + (this.state.css ? " active" : "")} onClick={() => this.switchCode("css")}>css</button>
                    <button id="both" className={"code-selection-button" + (this.state.both ? " active" : "")} onClick={() => this.switchCode("both")}>both</button>
                    <h3>HTML and CSS Code Samples below</h3>
                </div>
                <div className="code-display-box">
                    <pre>
                        { 
                            this.state.html &&
                            <div className="codewindow-container">
                                <code>
                                    {
                                        this.getAdvancedHTMLCode(this.props.html).map(codeRow => {
                                            return(
                                                <div className="html-code-row">
                                                    {this.analyzeHTMLCodeRow(codeRow.value).map(s => s)}
                                                </div>
                                            )
                                        })
                                    }
                                </code>
                            </div>
                            
                        }
                        {
                            this.state.css &&
                            <div className="codewindow-container">
                                {
                                    this.getAdvancedCSSCode(this.props.html).map(codeRow => {
                                        return(
                                            <div className="css-code-row">
                                                {this.analyzeCSSCodeRow(codeRow).map(s => s)}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        }
                        {
                            this.state.both &&
                            <div className="codewindow-both-container">
                                <div className="codewindow-both-left">
                                    {
                                        this.getAdvancedHTMLCode(this.props.html).map(codeRow => {
                                            return(
                                                <div className="html-code-row">
                                                    {this.analyzeHTMLCodeRow(codeRow.value).map(s => s)}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="codewindow-both-right">
                                    {
                                        this.getAdvancedCSSCode(this.props.html).map(codeRow => {
                                            return(
                                                <div className="css-code-row">
                                                    {this.analyzeCSSCodeRow(codeRow).map(s => s)}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </pre>
                </div>
            </div>
        );
    }
}