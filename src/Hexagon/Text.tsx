import { Text as SVGText, TextProps } from 'react-native-svg';

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
export function Text(props: TextProps) {
  const { children, x, y, ...rest } = props;
  return (
    <SVGText x={x || 0} y={y ? y : '0.3em'} textAnchor="middle" {...rest}>
      {children}
    </SVGText>
  );
}

export default Text;
