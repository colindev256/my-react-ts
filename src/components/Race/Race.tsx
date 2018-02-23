import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'react-promise';
import { Jockey } from '../Jockey';
const data: JockeyArray[] = require('../../team.json');
import { getUniqueJockeys } from '../../utils/uniqueUtil';

interface Props {
    reset: boolean;
    startRandom: boolean;
}

interface JockeyArray {
    id: number;
    login: string;
    avatar_url: string;
}

interface State {
    nextRacers: string[];
    jockeys: JockeyArray[];
    someoneWon: boolean;
}

// Race Component
export class Race extends React.Component<Props, State> {
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {
            jockeys: data as JockeyArray[],
            nextRacers: [],
            someoneWon: false
        };
        this.somebodyWon = this.somebodyWon.bind(this);
    }

    // If a winner did come through, set someoonWon to false
    componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevProps.startRandom !== this.props.startRandom) {
            if (this.props.startRandom) {
                this.setState({ someoneWon: false });
            }
        }
    }

    // If a jockey wins, set someoneWon to true to be able to display a winner
    somebodyWon() {
        this.setState({ someoneWon: true });
    }

    render() {
        if (this.props.startRandom) { // random selection
            const unique = getUniqueJockeys(data); // Picks out 5 random jockeys            
            return (
                <div className="App-field">
                    <Divider />
                    {unique.map((racer, index) => (
                        <Jockey
                            onWin={this.somebodyWon}
                            someoneWon={this.state.someoneWon}
                            avatar={racer.avatar_url}
                            login={racer.login}
                            reset={this.props.startRandom}
                        />
                    ))}
                </div>
            );
        } else {
            return (
                <p> Click 'Start' to randomly race 5 jockeys </p>
            );
        }
    }
}