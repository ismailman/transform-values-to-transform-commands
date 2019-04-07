const ORDERED_TRANSFORM_PROPERTIES = [
    'translateX', 'translateY', 'translateZ',
    'rotateX', 'rotateY', 'rotateZ',
    'skewXY',
    'scaleX', 'scaleY', 'scaleZ'
];

const UNITS = {
    'translateX': 'px',
    'translateY': 'px',
    'translateZ': 'px',
    'rotateX': 'deg',
    'rotateY': 'deg',
    'rotateZ': 'deg',
    'skewXY': 'deg',
    'scaleX': '',
    'scaleY': '',
    'scaleZ': ''
};

export default function transformValuesToTransformCommands(transformValues) {

    const transformCommands = [];

    ORDERED_TRANSFORM_PROPERTIES.forEach(property => {
        if(transformValues[property] != null){
            const value = 
                typeof transformValues[property] === 'string' ? 
                    transformValues[property] :
                    `${transformValues[property]}${UNITS[property]}`;

            if(property === 'skewXY') property = 'skew';
            transformCommands.push(`${property}(${value})`);
        }
    });

    return transformCommands.join(" ");

}