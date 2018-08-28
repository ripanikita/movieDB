import * as React from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";
import { Icon, Pagination } from 'semantic-ui-react'
import Poster from "./Poster";
import MainMenu from "./MainMenu";

interface IProps {
    fetchData: any;
    items: any;
    isLoading: boolean;
    searchStr: any;
}

interface IState {
    activePage: any;
}

class List extends React.Component<IProps, IState> {
    state: IState = {
        activePage: 1
    };

    componentDidMount() {
        this.props.fetchData(this.state.activePage, this.props.searchStr.searchStr);
    };

    handlePaginationChange = (e, { activePage }) => {
        this.props.fetchData(activePage, this.props.searchStr.searchStr);
        this.setState({ activePage });
    };

    render() {
        const {items} = this.props.items;
        const { activePage } = this.state;
        if (this.props.isLoading) {
            return <p>Загрузка…</p>;
        }
        return (
            <div>
                <MainMenu/>
                <div className="itemList">
                    {items && items.results && items.results.map((item) => (
                        <div key={item.id} className="movieItem">
                            <Poster
                                id = {item.id}
                                poster_path = {item.poster_path}
                                title = {item.title}
                            />
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <Pagination
                        totalPages={items.total_pages}
                        activePage={activePage}
                        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                        prevItem={{ content: <Icon name='angle left' />, icon: true }}
                        nextItem={{ content: <Icon name='angle right' />, icon: true }}
                        onPageChange={this.handlePaginationChange}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        isLoading: state.isLoading,
        searchStr: state.searchStr,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page, string) => dispatch(itemsFetchData(page, string))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);