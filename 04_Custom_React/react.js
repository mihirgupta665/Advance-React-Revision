function customRender(element, container){
    /*
     * 
    hard code
    const renderelement = document.createElement(element.type);     //element is created to be appended in the root element 
    renderelement.innerHTML = reactElement.children;    // innerHTML is added
    renderelement.setAttribute("href",reactElement.props.href);     
    //href, target etc attributes are added from the react element to the rendering element
    renderelement.setAttribute("target",reactElement.props.target);
    mainroot.appendChild(renderelement);        //the render element neeed to be appended in the root container
    */

    const renderelement = document.createElement(element.type);
    renderelement.innerHTML = element.children;
    for (const prop in element.props) {
        if(prop === 'children') continue;
        renderelement.setAttribute(prop,element.props[prop]);
    }
    container.appendChild(renderelement);


}

const reactElement = {          // react element which will laterly be added in the root element , type, props and childre(innerHTML), etc must be specified.
    type : 'a',
    props:{
        href: 'https://www.google.com',
        target:'blank'
    },
    children:  'Click me to visit google'
}

const mainroot = document.getElementById("root")

customRender(reactElement, mainroot);