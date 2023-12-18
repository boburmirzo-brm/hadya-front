import React from "react";
import "./Empty.css";
import { Link } from "react-router-dom";
function Empty({ title, url }) {
	return (
		<div className="empty__container">
			<img src={url} alt=""/>
			<h3>{title}da hozircha mahsulot yo'q</h3>
			<Link to={"/"}>Bosh sahifa</Link>
		</div>
	);
}

export default Empty;
