import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import { Main } from './Main'

const mapStateToProps = ({ posts, comments }) => ({
  posts,
  comments
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export const App = connect(mapStateToProps, mapDispatchToProps)(Main)
