import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recent: [],
            alltime: [],
            sorted: []
        };
       this.sortAlltime = this.sortAlltime.bind(this);
       this.sortRecent = this.sortRecent.bind(this);
    }
    componentDidMount() {
        let recentURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
        let alltimeURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
        const recent = fetch(recentURL)
        recent
            .then(data => data.json())
            .then(data => { 
                this.setState({recent: data})
                this.setState({sorted: data})
                console.log(this.state.recent);
                
            })
            .catch((err) => {
                console.error(err);
            })
        const alltime = fetch(alltimeURL)
        alltime
            .then(data => data.json())
            .then(data => { 
                this.setState({alltime: data})
                console.log(this.state.alltime);
                
            })
            .catch((err) => {
                console.error(err);
            })
     
  } 
  sortAlltime(){
    this.setState({sorted: this.state.alltime})
  }
  sortRecent(){
    this.setState({sorted: this.state.recent})
  }

    render() {
       let i = 1;
        return (
              <table>
              <caption id="leaderboard"><h3>Leaderboard</h3></caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th id="sort" onClick={this.sortRecent}>Points in past 30 days</th>
                        <th id="sort" onClick={this.sortAlltime}>All time points</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.sorted.map(item =>
                    <tr key={'#'+item.username}>
                    <td>{i++}</td>
                    <td><img id="profilePic" width='35' height='35' src={item.img} alt="profile pic"></img> {item.username}</td>
                    <td id="recent">{item.recent}</td>
                    <td id="alltime">{item.alltime}</td>
                    </tr>    
                    )};
            
                </tbody>
            </table>
        );
    }
};
export default Users;
