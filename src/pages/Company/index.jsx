import { Link, useParams } from "react-router-dom"

const Company = ({ members }) => {

	const { id } = useParams()
	const { name } = members.find((item) => item.id === id)
	
	return (
		<div>
			<h1>Detalhes da empresa</h1>
			<p>Nome da empresa: {name}</p>
			<Link to="/">Voltar</Link>
		</div>
	)
}

export default Company