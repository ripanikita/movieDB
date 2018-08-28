import * as React from "react";
import { connect } from "react-redux";
import { favoritesFetchData } from "../actions/favorite";
import Poster from "./Poster";
import MainMenu from "./MainMenu";

interface IProps {
    fetchData: any;
    favorites: any;
}

class FavoriteList extends React.Component<IProps, any> {
    componentDidMount() {
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if(favorites == null){favorites = []}
        this.props.fetchData(favorites);
    };

    render() {
        const favorites = this.props.favorites.favorites;
        return (
            <div>
                <MainMenu/>
                <div className="itemList">
                    {favorites && favorites.map((item) => (
                        <div key={item.id} className='movieItem'>
                            <Poster
                                id = {item.id}
                                poster_path = {item.poster_path}
                                title = {item.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (arr) => dispatch(favoritesFetchData(arr))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);