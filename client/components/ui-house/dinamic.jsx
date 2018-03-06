import React from 'react';

import House from './index.jsx';

import localApi from '../../api/index.json';

export default class Dinamic extends React.Component {
	constructor () {
		super();
		this.state = {
			advertisements: [],
		};
	}
	componentDidMount() {
		const data = localApi.data;
		const size = 10;
		const advertisements = data.slice(0, size).map((ad) => {
			return (
				<House
					key = {ad._id.$id}
					title = {ad.title}
					purpose = {ad.purpose}
					location =
						{ad.realestateSummary.address.postalCode + ' ' + ad.realestateSummary.address.street + ' / ' + ad.realestateSummary.address.city}
					urlImage = {ad.advertisementAssets[0].advertisementThumbnails.inventory_m.url}
					price = {ad.advertisementPrice.baseRent}
					rooms = {ad.realestateSummary.numberOfRooms}
					size = {Math.round(ad.realestateSummary.space)}
				/>
			)
		});
		this.setState({ advertisements });
	}
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
        	<h1>Dinamic</h1>
          <div className="row">
						{this.state.advertisements}
          </div>
        </div>
      </div>
    );
  }
}