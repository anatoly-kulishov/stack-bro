/**
 *  External Imports
 */
import Grid from "@material-ui/core/Grid";
import React from "react";

/**
 *  Internal Imports
 */
import styles from "./index.module.css";
import WidgetChat from "./widget-chat";
import useScrollToTop from "../../commons/scroll-top";

/**
 *  Component
 *
 *  @return {JSX.Element}
 */
const CommunityMessages = () => {
    // Functions Call
    useScrollToTop();

    // Return
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            className={styles.body}>
            <WidgetChat data-testid="widgetChat" />
        </Grid>
    );
};

/**
 *  Exports
 */
export default CommunityMessages;
