import {connect} from 'react-redux'
import * as counterModule from '../modules/Counter'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    counter: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterModule.increment()),
    decrement: () => dispatch(counterModule.decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
