import React, { Component } from 'react';
import Settings from './Settings';
import Times from './Times';
import Controller from './Controller';
import './Timer.css';




export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.audioBeep = React.createRef();

    this.state = {
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Intermittent Fast',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60 *60,
      isStart: false,
      timerInterval: null
    }

    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
  }

  onIncreaseBreak() {
    if (this.state.breakLength < 36 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }

  onDecreaseBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }

  onIncreaseSession() {
    if (this.state.sessionLength < 36 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60 *60
      });
    }
  }

  onDecreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60 *60
      });
    }
  }

  onReset() {
    this.setState({
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Intermittent Fast',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60 *60,
      isStart: false,
      timerInterval: null
    });

    this.audioBeep.current.pause();
    this.audioBeep.current.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000)
      })
    } else {
      this.audioBeep.current.pause();
      this.audioBeep.current.currentTime = 0;
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    });
  }

  phaseControl() {
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep.current.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === 'Intermittent Fast') {
        this.setState({
          timeLabel: 'Eating Period',
          timeLeftInSecond: this.state.breakLength * 60
        });
      } else {
        this.setState({
          timeLabel: 'Intermittent Fast',
          timeLeftInSecond: this.state.sessionLength * 60
        });
      }
    }
  }
  render() {
    return (
      <div className="clock">
        <div className="clock-header">
          <h1 className="clock-header-name">Timer</h1>
        </div>

        <Settings
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          isStart={this.state.isStart}
          onDecreaseBreak={this.onDecreaseBreak}
          onDecreaseSession={this.onDecreaseSession}
          onIncreaseBreak={this.onIncreaseBreak}
          onIncreaseSession={this.onIncreaseSession}
        />

        <Times
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />

        <Controller
          onReset={this.onReset}
          onStartStop={this.onStartStop}
          isStart={this.state.isStart}
        />

        <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={this.audioBeep}></audio>
        <footer>Designed based on a pen by <a href="https://codepen.io/eddyerburgh/full/yOjdqo/">Edd Yerburgh</a> and coded by <a href="http://about.phamvanlam.com">Lam Pham</a>.</footer>

        
      </div>
    );
  }

  

}

