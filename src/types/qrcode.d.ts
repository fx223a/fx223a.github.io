// qrcode 库没有自带 TypeScript 类型，这里只声明本项目用到的那一个函数（生成 SVG 字符串）
declare module 'qrcode' {
  interface QRCodeToStringOptions {
    type?: 'svg' | 'terminal' | 'utf8';
    margin?: number;
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    color?: { dark?: string; light?: string };
  }
  export function toString(text: string, options?: QRCodeToStringOptions): Promise<string>;
  const QRCode: { toString: typeof toString };
  export default QRCode;
}
