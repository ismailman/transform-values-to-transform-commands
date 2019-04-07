declare module "transform-values-to-transform-commands";

export interface TransformValues {
    rotateX: number;
    rotateY: number;
    rotateZ: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    translateX: number;
    translateY: number;
    translateZ: number;
    skewXY: number;
}

export default function transformValuesToTransformCommands(transformValues: TransformValues): string;