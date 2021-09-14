import { Link } from "react-router-dom"

const Home = ({ members }) => {

	return (
		<>
			{members.map((item) =>
				item.type === "pj" ? (
					<Link to={`/customer/${item.id}`}>
						{item.name}
					</Link>
				) : (
					<Link to={`/company/${item.id}`}>
						{item.name}
					</Link>
				)
			)}
		</>
	)
}

export default Home