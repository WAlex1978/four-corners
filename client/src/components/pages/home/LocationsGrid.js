import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 500,
    },
});

const LocationsGrid = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList}>
                {props.locations.data.map((location, i) => (
                    <GridListTile key={i} component={Link} to={"/location/" + location.id}>
                        <img src={location.image} alt={location.name} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

LocationsGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (LocationsGrid);
