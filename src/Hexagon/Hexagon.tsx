import * as React from 'react';
import { Hex } from '../models/Hex';
import { HexUtils } from '../HexUtils';
import { useLayoutContext } from '../Layout';
import { G, Polygon, GProps } from 'react-native-svg';

export type HexagonProps = {
  q: number;
  r: number;
  s: number;
  fill?: string;
  cellStyle?: React.CSSProperties | undefined;
  data?: any;
  children?: React.ReactNode | React.ReactNode[];
};

/**
 * Renders a Hexagon cell at the given rqs-based coordinates.
 */
export function Hexagon(props: HexagonProps & GProps) {
  // destructure props into their values
  const { q, r, s, fill, cellStyle, children, data, fillOpacity, ...rest } =
    props;

  const { layout, points } = useLayoutContext();

  const { hex, pixel } = React.useMemo(() => {
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    return {
      hex,
      pixel,
    };
  }, [q, r, s, layout]);

  const fillId = fill ? `url(#${fill})` : undefined;
  const draggable = { draggable: true } as any;
  return (
    <G transform={`translate(${pixel.x}, ${pixel.y})`} {...rest} {...draggable}>
      <G>
        <Polygon points={points} fill={fillId} />
        {children}
      </G>
    </G>
  );
}

export default Hexagon;
