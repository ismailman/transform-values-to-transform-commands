const ORDERED_TRANSFORM_PROPERTIES = [
    'translate', 'translateX', 'translateY', 'translateZ',
    'rotate', 'rotateX', 'rotateY', 'rotateZ',
    'skew', 'skewXY',
    'scale', 'scaleX', 'scaleY', 'scaleZ'
];

const UNITS = {
    'translate': 'px',
    'translateX': 'px',
    'translateY': 'px',
    'translateZ': 'px',
    'rotate': 'deg',
    'rotateX': 'deg',
    'rotateY': 'deg',
    'rotateZ': 'deg',
    'skew': 'deg',
    'skewXY': 'deg',
    'scale': '',
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