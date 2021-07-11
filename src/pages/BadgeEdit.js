import React from 'react';

import '../components/styles/BadgeEdit.css';
import '../components/styles/Image.css';
import BadgeForm from '../components/BadgeForm'
import logo from '../images/Logo_0TD.jpg'
import Badge from '../components/Badge.js'
import Avatar from '../images/gorropito.jpg'
import api from '../api'
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {

    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        },
    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }

    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault()

        this.setState({ loading: true, error: null });

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading></PageLoading>;
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <div className="img__logo">
                        <img className="img-fluid" src={logo} alt="Logo"></img>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                email={this.state.form.email || 'EMAIL'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                avatarUrl={Avatar} />
                        </div>

                        <div className="col-6">
                            <h1>Edit Challenger</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;