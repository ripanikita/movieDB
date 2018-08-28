import * as React from "react";
import { connect } from "react-redux";
import { movieFetchData } from "../actions/movie";
import { Button } from "semantic-ui-react";
import MainMenu from "./MainMenu";

interface IProps {
    fetchData: any;
    isLoading: boolean;
    movieInfo: any;
    id: any;
}

interface IState {
    favorite: boolean;
}

class Poster extends React.Component<IProps, IState> {
    state: IState = {
        favorite: false
    };

    componentDidMount() {
        this.setState({favorite: this.isFavorite()});
        this.props.fetchData(this.props.id);

    }

    isFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if(favorites == null){favorites = []}
        if(favorites.indexOf(+this.props.id) != -1){
            return true
        } else{
            return false
        }
    };

    handleFavorite = () => {
        this.setState({favorite: !(this.state.favorite)});
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if(favorites == null){favorites = []}

        if(this.isFavorite()){
            favorites.splice(favorites.indexOf(+this.props.id), 1);
        } else{
            favorites.push(+this.props.id);
        }

        let serialObj = JSON.stringify(favorites);
        localStorage.setItem("favorites", serialObj);
    };

    render() {
        const {movieInfo} = this.props.movieInfo;
        let checked = this.state.favorite;
        if (this.props.isLoading) {
            return <p>Загрузка…</p>;
        }
        return(
            <div>
                <MainMenu/>
                <div className="movieWrap">
                    <div className="bigPoster">
                        <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}/>
                    </div>
                    <div className="movieInfo">
                        <h1>{movieInfo.title}</h1> <Button icon='favorite' color={(checked ? 'green': '')}  circular onClick={() => this.handleFavorite()}/>
                        <p><i className="slogan">{movieInfo.tagline}</i></p>
                        <p className="original">Оригинальное название: {movieInfo.original_title}</p>
                        <p className="date">Дата выхода: {movieInfo.release_date}</p>
                        <p className="runtime">Продолжительность: {movieInfo.runtime} мин.</p>
                        <p className="rating">Рейтинг: {movieInfo.vote_average*10}%</p>
                        <p className="budget">Бюджет: {movieInfo.budget}$</p>
                        <h2>Описание</h2>
                        <p className="description">{movieInfo.overview}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movieInfo: state.movieInfo,
        isLoading: state.isLoading,
        id: ownProps.params.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(movieFetchData(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Poster);