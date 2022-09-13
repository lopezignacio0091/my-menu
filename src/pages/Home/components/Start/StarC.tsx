import React, { useCallback } from "react";
import BasicIcon from "../../../../components/BasicIcon/BasicIcon";
import { StarContainer } from "./styles";
import { StarProps } from "./types";

const INACTIVE_COLOR = "#E9DBCB";
const ACTIVE_COLOR = "#FFD19A";

 const StarC: React.FC<StarProps> = ({ count, value }) => {
  const handleColor = useCallback(
    (index: number, value: number): string =>
      index < value ? ACTIVE_COLOR : INACTIVE_COLOR,
    []
  );
  const handleStars = useCallback(
    (count: number) => Array.from({ length: count }, () => "🟊"),
    []
  );

  return (
    <StarContainer>
      {handleStars(count).map((s, index) => {
        return (
          <BasicIcon
            key={index}
            name="star"
            color={handleColor(index, value)}
          />
        );
      })}
    </StarContainer>
  );
};
export default StarC;