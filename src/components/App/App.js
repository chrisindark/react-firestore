import React, { Component } from 'react';

import logo from '../../logo.svg';
import './App.css';
import { notes } from '../firebase';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // lifecycle event
    componentDidMount() {
        notes.get().then((querySnapshot) => {
            console.log('notes', querySnapshot.docs);
            this.setState({notes: querySnapshot.docs});
            this.renderNotes();
        }, err => {
            console.log('notes', err);
        });
    }

    // handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handle submit
    handleSubmit(e) {
        e.preventDefault();
        const note = {
            title: this.state.title,
            body: this.state.body
        };
        // console.log('submit', note);
        notes.add(note).then((docRef) => {
            console.log('notes', docRef);
        }, err => {
            console.log('notes', err);
        });
        this.setState({
            title: '',
            body: ''
        });
    }

    // render notes
    renderNotes() {
        return _.map(this.state.notes, (queryDocSnapshot) => {
            // console.log(queryDocSnapshot.id);
            // console.log(queryDocSnapshot.data());
            return (
                <div key={queryDocSnapshot.id}>
                    <h2>{queryDocSnapshot.data().title}</h2>
                    <p>{queryDocSnapshot.data().body}</p>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="main">
                <Header/>

                <main role="main" className="app container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" name="title" className="form-control no-border"
                                               value={this.state.title}
                                               placeholder="Title..." required onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <textarea name="body" className="form-control no-border"
                                                  value={this.state.body}
                                                  placeholder="Body..." required onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-primary col-sm-12">Save</button>
                                    </div>
                                </form>

                                {this.renderNotes()}
                            </div>
                        </div>
                    </div>
                </main>

                <Footer/>
            </div>
        );
    }
}

export default App;
