import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        paddingTop: "25px",
        paddingBottom: "25px",
    }
});

const LocationsGrid = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} cols={3}>
                {props.locations.data.map((location, i) => (
                    <GridListTile key={i} component={Link} to={"/location/" + location.id}>
                        <img src={location.image} alt={location.name} />
                        <GridListTileBar title={location.name} />
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
