import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Segment, Container, Card} from 'semantic-ui-react';

import CatalogView from '../views/CatalogView.jsx';
import CollectionView from '../views/CollectionView.jsx';

import * as ContentActions from '../actions/ContentActions.jsx';
import * as Constants from '../Constants';

function mapStateToProps(state) {
    console.log(state);
    return {
        isLoading: state.contentReducer.isLoading,
        data: state.contentReducer.data,
        content: state.contentReducer.content
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: content => dispatch(ContentActions.load(content))
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class ContentArea extends Component {
    constructor(props) {
        super(props);

        this.catalogOnClick = this.catalogOnClick.bind(this);
        this.display = this.display.bind(this);
    }

    componentDidMount() {
        //Start loading
        this.props.load({
            type: Constants.CONT_CATALOG
        })
    }

    display(){
        if (!this.props.isLoading)
        {
            switch (this.props.content.type)
            {
                case Constants.CONT_CATALOG:
                    var p = this.catalogProps();
                    return <CatalogView data={p} onClick={this.catalogOnClick} />
                case Constants.CONT_COLLECTION:
                    return <CollectionView data={this.props.data} />
            }
        }
    }

    catalogOnClick(id) {
        this.props.load({
            type: Constants.CONT_COLLECTION,
            id: id
        })
    }

    catalogProps() {
        var list = [];
        this.props.data.map((data,i) => {
            list.push({
                img:data.img,
                title:data.title,
                year:data.year,
                id: data.id
            });
        }, this)

        return list;
    }

    render() {
        console.log(this.props);
        

        

        return (
            <Segment padded basic loading={this.props.isLoading}>
                {this.display()}
            </Segment>
        )
    }
}

export default ContentArea;