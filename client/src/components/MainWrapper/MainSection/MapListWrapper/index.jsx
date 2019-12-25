import React, { Component } from 'react';

import MapSection   from './MapSection/';
import ListSection  from './ListSection/';

export class MapListWrapper extends Component {
  render() {
    return (
      <div>
        < MapSection />
        < ListSection />
      </div>
    )
  }
}

export default MapListWrapper;
