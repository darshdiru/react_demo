import React, { useState } from "react";
import { buy_cake } from "../../redux/cake/cakeAction";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

function CakeHome(props) {
  const [number, setNumber] = useState(1);
  // const numberOfCakes = useSelector((state) => state.numberOfCakes);
  // const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cakes * {props.numberOfCakes} </h2>
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button onClick={() => props.buy(number)}>buy it</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy: (number) => dispatch(buy_cake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeHome);
