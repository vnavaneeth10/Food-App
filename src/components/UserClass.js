import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
    //console.log(this.props.name +"Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vnavaneeth10");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
    //console.log(this.props.name +"Child DidMount");
  }

  render() {
    //console.log(this.props.name +"Child Render")
    // const {name, location } = this.props;

    const { name, location, company, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Organization: {company}</h3>
        <h4>Contact: navaneethnair69@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
