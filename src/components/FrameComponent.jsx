import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.contentNodesParent}>
        <h1 className={styles.contentNodes}>Content Nodes</h1>
        <div className={styles.rewardsDescriptionParent}>
          <div className={styles.rewardsDescription}>
            <div className={styles.contentNodesEarn}>
              Content Nodes, Earn rewards for supplying their GPU, Storage and
              bandwidth for dCDN
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.patternParent}>
              <img className={styles.patternIcon} alt="" src="/pattern.svg" />
              <div className={styles.frameChild} />
            </div>
            <Button
              className={styles.deployButton}
              endIcon={
                <img
                  width="24px"
                  height="24px"
                  src="/vuesaxboldarrowright-1.svg"
                />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#0c091b",
                fontSize: "16",
                background: "#fff",
                borderRadius: "100px",
                "&:hover": { background: "#fff" },
                width: 200,
                height: 56,
              }}
            >
              Deploy
            </Button>
          </div>
        </div>
      </div>
      <FrameComponent1
        orchestrators="Orchestrators"
        orchestratorsWillBeRespon="Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance"
        pattern="/pattern-1.svg"
        frame512918690="/frame-512918690@2x.png"
      />
      <FrameComponent1
        orchestrators="Validators"
        orchestratorsWillBeRespon="Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated."
        pattern="/pattern-2.svg"
        frame512918690="/frame-512918690-1@2x.png"
        propBackgroundColor="#adffe4"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
