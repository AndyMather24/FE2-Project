import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
	labels: [],
	datasets: [
		{
			data: [ 300, 50, 100 ],
			backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
			hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
		}
	]
};

export default class Chart extends Component {
	render() {
		return (
			<div>
				<h2> Topic Selection</h2>
				<Pie data={data} />
			</div>
		);
	}
}
