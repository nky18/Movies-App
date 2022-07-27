import { Component } from "react";
import axios from "axios"

class Banner extends Component{
    constructor(){
        super();
        this.state={
            movie:""
        }
    }
    async componentDidMount(){
        let res=await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6fd000ab7db481d9b09c0fc1c45ed071');
        this.setState({
            movie:res.data.results[0]
        })
    }





    render(){
      
        let backdrop_path=this.state.movie.backdrop_path;
        return(
            <div className="card banner-wrapper">
                <img className="card-img-top banner-image" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="Card image cap"/>
                    <div className="banner">
                        <h1 className="card-title">{this.state.movie.title}</h1>
                        <p className="card-text">{this.state.movie.overview}</p>
                     </div>
                        
                    
            </div>

        )
    }
}
export default Banner