import * as React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router";

interface IProps {
    id: any;
    poster_path: any;
    title: any;
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
    };

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
        let checked = this.state.favorite;
        return(
            <div className="posterWrap">
                <Link to={`/movie/${this.props.id}`} className="settingLink">
                    <img className="posterImg" src={"https://image.tmdb.org/t/p/w300/"+this.props.poster_path}/>
                </Link>
                <div className="posterInfo">
                    <div className="posterTitle">{this.props.title}</div>
                    <div className="posterFav">
                        <Button icon='favorite' color={(checked ? 'green': '')}  circular onClick={() => this.handleFavorite()}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Poster;