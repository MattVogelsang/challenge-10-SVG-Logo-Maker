class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,40 250,180 50,180" fill="${this.shapeColor}" />
            <text x="150" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = Triangle;
