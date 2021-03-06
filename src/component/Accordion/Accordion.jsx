import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const PrettyAccordion = ({ config }) => {
  // const [open, setOpen] = useState(false)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {config.map(({ title, description }, key) => {
        return (
          <Accordion key={key}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

PrettyAccordion.propTypes = {
  config: PropTypes.array,
};

PrettyAccordion.defaultProps = {
  config: [
    {
      title: "First Title",
      description: "Some description for the first Accordion",
    },
    {
      title: "Second Title",
      description: "Some description for the second Accordion",
    },
    {
      title: "Third Title",
      description: "Some description for the third Accordion",
    },
  ],
};
