import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../materializecss/materialize.css';

class ShowRecipe extends Component {

    render(){
        return (
            <div className="card">
                <div className="card-image" style={{width:this.props.width}}>
                    <img className="activator" alt="Check Your Connection" src={this.props.photo} />
                </div>
                <div className="card-content" style={{width:this.props.width}}>
                    <p style={{width:'100%',overflow:'auto'}}><span className="card-title activator grey-text text-darken-4">{this.props.title}</span></p>
                    <p><NavLink to={"/recipe/fullrecipe/"+this.props.id} exect>Open<i className="material-icons grey-text text-darken-4 right">more_vert</i></NavLink></p>
                </div>
            </div>
        );
    }
}

export default ShowRecipe;