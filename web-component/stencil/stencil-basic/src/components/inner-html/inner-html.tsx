import {Component} from "@stencil/core";

@Component({
    tag: 'inner-html'
})
export  class InnerHtml {

    render = () => {
        let svgContent = `<svg width="120" height="120"
                               viewBox="0 0 120 120"
                               xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="100" height="100"/>
        </svg>`;

        return (
            <div innerHTML={svgContent}></div>
        )
    }
}
