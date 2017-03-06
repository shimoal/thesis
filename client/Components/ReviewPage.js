import React from 'react'

export default React.createClass {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<LeftColumn />
					<RightColumn />
				</div>
			</div>
		)
	}
}