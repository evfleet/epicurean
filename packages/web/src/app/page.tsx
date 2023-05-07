import { UserButton, SignInButton } from "@clerk/nextjs";

const IndexPage = () => {
	return (
		<main>
			<div>
				<p>Hello World</p>

				<SignInButton />
				<UserButton />
			</div>
		</main>
	);
};

export default IndexPage;
