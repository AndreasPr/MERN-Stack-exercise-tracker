import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {
            exercises: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({
                exercises: response.data
            });
        })
        .catch(error => console.log(error))
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(res => console.log(res));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.exerciseList()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}