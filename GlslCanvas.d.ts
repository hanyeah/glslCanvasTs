declare class GlslCanvas {
    width: number;
    height: number;
    canvas: HTMLCanvasElement;
    fl: WebGLRenderingContext;
    program: WebGLShader;
    textures: any;
    buffers: any;
    uniforms: any;
    vbo: any;
    attribs: any;
    isValid: boolean;
    BUFFER_COUNT: number;
    vertexString: string;
    fragmentString: string;
    timeLoad: number;
    timePrev: number;
    timeDelta: number;
    forceRender: boolean;
    paused: boolean;
    realToCSSPixels: number;
    animated: boolean;
    nDelta: number;
    nTime: number;
    nDate: number;
    change: boolean;
    textureIndex: number;
    visible: boolean;
    constructor(canvas: HTMLCanvasElement, contextOptions: ContextOptions, options: object);
    destroy(): void;
    load(fragString: string, vertString: string): void;
    test(callback: Function, fragString: string, vertString: string): void;
    loadTexture(name: string, urlElementOrData: any, options: TextureOption): void;
    refreshUniforms(): void;
    setUniform(name: string, ...value: any[]): void;
    setUniforms(uniforms: any): void;
    setMouse(mouse: Point): void;
    uniform(method: string, type: string, name: string, ...value: any[]): void;
    uniformTexture(name: string, urlElementOrData: any, options: TextureOption): void;
    resize(): void;
    render(): void;
    pause(): void;
    play(): void;
    renderPrograms(): void;
    getBuffers(fragString: string): void;
    loadPrograms(buffers: any): void;
    createSwappableBuffer(W: number, H: number, program: WebGLShader): SwappableBuffer;
    createBuffer(W: number, H: number, program: WebGLShader): BufferData;
    resizeSwappableBuffers(): void;
    version(): string;
}
interface Point {
    x: number;
    y: number;
}
interface ContextOptions extends WebGLContextAttributes {
    vertexString?: string;
    fragmentString?: string;
    backgroundColor?: string;
}
interface Options {
    onError: Function;
}
interface TextureOption {
    url?: string;
    data?: any;
    width?: number;
    height?: number;
    element?: any;
}
interface SwappableBuffer {
    input: BufferData;
    output: BufferData;
    swap(): any;
    render(W: number, H: number, program: WebGLShader, name: string): any;
    resize(W: number, H: number, program: WebGLShader, name: string): any;
}
interface BufferData {
    [x: string]: any;
    index: number;
    texture: WebGLTexture;
    buffer: WebGLFramebuffer;
    W: number;
    H: number;
    resize(W: number, H: number): any;
}
