import * as React from 'react';

interface Props {
    avatar: string;
    login: string;
    reset: boolean;
    onWin: Function;
    someoneWon?: boolean;
}

interface State {
    interval: number;
    progress: number;
}

export class Jockey extends React.Component<Props, State> {
    state: State;
    private intervalId: number;
    constructor(props: Props) {
        super(props);
        this.state = {
            interval: Math.floor(Math.random() * 500),
            progress: 0,
        };
    }

    componentDidMount() {
        this.state.interval = window.setInterval(this.timer, this.state.interval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer = () => {
        let { onWin, someoneWon } = this.props;
        this.setState({ progress: this.state.progress + 1 });

        if (this.state.progress === 100 && !someoneWon) {
            onWin();
            console.log(this.props.login + ' WINS!!!');
        }
        if (someoneWon) {
            clearInterval(this.state.interval);
        }
    }

    render() {
        return (
            <div>
                <div className="App-lane">
                    <img src={this.props.avatar} alt="" />
                    <progress value={this.state.progress} max="100" />
                </div>
            </div>
        );
    }
}
