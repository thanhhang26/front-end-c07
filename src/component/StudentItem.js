import React from "react";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";
function StudentItem(props) {
	console.log(props.student);

	const { id, name, phone, email, gender, address } = props.student;

	return (
		<tr>
			<td className="text-center">{+props.i + 1}</td>
			<td className="text-center">{id}</td>
			<td className="text-center">{name}</td>
			<td className="text-center">{gender}</td>
			<td className="text-center">{phone}</td>
			<td className="text-center">{address ? address.name : "Không có địa chỉ"}</td>
			<td className="text-center">{email}</td>
			<td className="text-center">
				<Link className="btn btn-secondary me-3" to={"/detail/" + id}>
					<FaInfo />
				</Link>
				<button onClick={() => props.showModalDelete(props.student)} className="btn btn-secondary me-3">
					Delete
				</button>
			</td>
		</tr>
	);
}
export default StudentItem;
