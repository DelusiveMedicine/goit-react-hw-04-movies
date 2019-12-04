import React, { Component } from 'react';

export default (NewComponent, { fetchData }) =>
  class ClassComponent extends Component {
    state = { data: null };
    componentDidMount = () => {
      const { movieId } = this.props.match.params;
      fetchData(movieId).then(({ data }) => this.setState({ data }));
    };
    render() {
      const { data } = this.state;
      return <NewComponent data={data} {...this.props} />;
    }
  };
