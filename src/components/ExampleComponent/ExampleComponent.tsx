import React from 'react';
import {
  // connect,
  useSelector, // hooks
  useDispatch, // hooks
} from 'react-redux';
// import type { Record } from 'immutable';

import { exampleFunction } from '../../redux/actions';
import type { ExampleReducerState } from '../../redux/reducers/exampleReducer';
// import { buildMapStateToProps } from '../../utils';

import './ExampleComponent.scss';

// interface ExampleComponentProps {
//   exampleVariable: String,
//   click: Function,
// }

// const ExampleComponent = ({ exampleVariable, click }: ExampleComponentProps) => {
const ExampleComponent = () => { // hooks
  const dispatch = useDispatch(); // hooks
  const exampleVariable = useSelector(
    (state: ExampleReducerState) => state.exampleVariable,
  ); // hooks

  return (
    <>
      <button
        type="button"
        className="example-component"
        // onClick={() => click('Example Payload')}
        onClick={() => dispatch(exampleFunction('Example Payload'))} // hooks
      >
        {`${exampleVariable} Component`}
      </button>
    </>
  );
};

export default ExampleComponent; // hooks

// const propsShape = {
//   exampleVariable: '',
// };

// export default connect(
//   buildMapStateToProps({ propsShape }),
//   { click: exampleFunction },
// )(ExampleComponent);
