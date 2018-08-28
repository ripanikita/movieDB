import * as React from "react";
import { Input, Menu } from "semantic-ui-react";
import { itemsFetchData } from "../actions/items";
import { connect } from "react-redux";
import { Link } from "react-router";

interface IState {
    activeItem: string;
}

interface IProps {
    search: any;
}

class MainMenu extends React.Component<IProps, IState> {
    state: IState = {
        activeItem: 'main'
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return(
            <div className="wrap">
                <Menu secondary>
                    <Link to={"/"}>
                        <Menu.Item
                            name='main'
                            active={activeItem === 'main'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to={"/favorite"}>
                        <Menu.Item
                            name='favorite'
                            active={activeItem === 'favorite'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' onChange={(e) => this.props.search(e.currentTarget.value)}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        search: (string) => dispatch(itemsFetchData(1, string))
    }
}

export default connect(null, mapDispatchToProps)(MainMenu)