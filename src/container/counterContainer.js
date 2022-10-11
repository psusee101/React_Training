import { connect } from 'react-redux'
import Counter from '../component/counter'
import { increment, decrement, reset } from '../actions';

// this container component is responsible for providing redux's state
// to react component
const mapStateToProps = (state) => {
   return {
      counter: state
   };};
   
   const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };};
   export default connect(mapStateToProps, mapDispatchToProps)(Counter);