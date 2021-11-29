import { Header } from "../layout/Header";

export const Layout = ({children}) => {
	return (
		<>
		<Header />
		<div>
			{children}
		</div>
		</>
	)
}
