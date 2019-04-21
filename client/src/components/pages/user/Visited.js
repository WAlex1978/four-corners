import React, { Component } from 'react';
import { Card, Flex } from '../../shared/styled-components';
import Spinner from '../../shared/Spinner';
import { getVisited } from '../../../services/visited';
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

class Visited extends Component {
    state = {
        locations: [],
        classes: this.props.classes,
    }

    componentWillMount = async () => {

        const locations = await getVisited(this.props.username);
        this.setState({locations: locations});
    }

    render() { 
        return (
            <Card>
                {this.state.locations && this.state.locations.data ? 
                    <div className={this.state.classes.root}>
                        <GridList cellHeight={250} className={this.state.classes.gridList} cols={2}>
                            {this.state.locations.data.map((location, i) => (
                                <GridListTile key={i} component={Link} to={"/location/" + location.id}>
                                    <img src={location.image} alt={location.name} />
                                    <GridListTileBar title={location.name} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div> : <Flex><Spinner /></Flex> }
            </Card>
        );
    }
}

Visited.propTypes = {
    classes: PropTypes.object.isRequired,
};
 
export default withStyles (styles) (Visited);