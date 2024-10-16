class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="120" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = Circle;
