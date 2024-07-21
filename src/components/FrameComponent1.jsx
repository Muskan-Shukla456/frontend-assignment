import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  orchestrators,
  orchestratorsWillBeRespon,
  pattern,
  frame512918690,
  propBackgroundColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.orchestratorsParent, className].join(" ")}
      style={frameDivStyle}
    >
      <h1 className={styles.orchestrators}>{orchestrators}</h1>
      <div className={styles.orchestratorsWillBeResponsiParent}>
        <div className={styles.orchestratorsWillBe}>
          {orchestratorsWillBeRespon}
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.patternParent}>
            <img className={styles.patternIcon} alt="" src={pattern} />
            <img className={styles.frameChild} alt="" src={frame512918690} />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  orchestrators: PropTypes.string,
  orchestratorsWillBeRespon: PropTypes.string,
  pattern: PropTypes.string,
  frame512918690: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
};

export default FrameComponent1;
