import React from 'react'

export default React.createClass {

	/****************************/
	/* props = {
		learnerId: learnerId,
		helperId: helperId,
		id: questionId,
		content: questionContent
		}
	/*
	/****************************/

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<LeftColumn 
						userCurrent={this.props.userData.user} 
						question={this.props.userData}
						/>
					<RightColumn />
				</div>
			</div>
		)
	}
}