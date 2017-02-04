var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application react!</p>
      <p>
        Tools
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> Java script Framework
        </li>
        <li>
          <a href="http://www.openweathermap.com">Open Weather Map</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
