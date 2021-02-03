import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../../containers/Header';
import Timer from './Timer';
import './stripe-success.scss';
import Confetti from './Confetti';

const Success = () => {

  const [timerFinished, setTimerFinished] = useState(false);

  return (
    <div id="stripe-success">
      {timerFinished && <Confetti />}
      <Header pageTitle="Payment Success" />
      <h2>Payment succed</h2>

      <h3>{timerFinished ? 'Your dishs are waiting you!' : 'Your command will be ready in...'}</h3>
      <Timer setTimerFinished={setTimerFinished} />
      <Link to="/" className="continue">Continue Navigation</Link>
    </div>
  )
}

export default Success;