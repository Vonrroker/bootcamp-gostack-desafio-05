import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { Loading, Owner, IssueList, IssueState, ButtonState } from './styles';

import Container from '../../components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    issueState: '',
    page: 0,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
      issueState: 'open',
    });
  }

  handleIssueState = async e => {
    const { repository } = this.state;

    const response = await api.get(`/repos/${repository.full_name}/issues`, {
      params: {
        state: e,
        per_page: 5,
      },
    });

    this.setState({ issues: response.data, issueState: e });
  };

  render() {
    const { repository, issues, loading, issueState } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueState>
          <ButtonState
            issueState={issueState}
            type="button"
            value="open"
            onClick={() => this.handleIssueState('open')}
          />

          <ButtonState
            issueState={issueState}
            type="button"
            value="closed"
            onClick={() => this.handleIssueState('closed')}
          />

          <ButtonState
            issueState={issueState}
            type="button"
            value="all"
            onClick={() => this.handleIssueState('all')}
          />
        </IssueState>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={label.id}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
