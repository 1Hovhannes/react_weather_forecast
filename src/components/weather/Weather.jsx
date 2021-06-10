import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetWeatherDetails } from "../../redux/actions";
import moment from "moment";
import Search from "../search/Search";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      error: "",
    };
  }

  componentDidMount() {
    const { GetWeatherDetails } = this.props.action;
    GetWeatherDetails();
  }

  handleError = (value) => {
    this.setState({ error: value });
  };

  handleOnClick = async (e) => {
    e.preventDefault();
    const { searchInput } = this.state;
    const { GetWeatherDetails } = this.props.action;
    await GetWeatherDetails(this.state.searchInput, this.handleError);
    this.setState({ searchInput: "", error: "" });
  };
  handleOnChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  render() {
    const { data, success } = this.props.weatherData;
    const { weather, sys, name, main } = data;
    const { searchInput, error } = this.state;

    return (
      <div className="container">
        <Search
          handleChange={this.handleOnChange}
          handleClick={this.handleOnClick}
          searchInput={this.state.searchInput}
        />

        <div className="info">
          <div className="errorCity"> {this.state.error}</div>
          <div className="date">{success ? moment().format("DD MMM YYYY") : null}</div>
          <div className="location">
            {success ? name : null}
            <span>({success ? sys.country : null})</span>
          </div>
          <div className="forecast-info">
            <div className="forecast-icon">
              {success ? (
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt=""
                />
              ) : null}
            </div>
            <div className="forecast-value">
              <div className="degrees">
                <span className="degrees-count">{success ? main.temp : null}</span>C
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weatherData: state,
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({ GetWeatherDetails }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
