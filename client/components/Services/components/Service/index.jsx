/* eslint-disable react/prop-types */

import "./service.styles.css";

const Service = (props) => {
	const { logo, title, description } = props;

	return (
		<div className="service">
				<div className="service-container">
						<div className="service-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="service-title">{title}</div>
						<div className="service-description">{description}</div>
					</div>
			</div>
	);
};

export default Service;
