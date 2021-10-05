import Author from './subComponents/Author';
import RepoList from './subComponents/RepoList';

const Home = () => {
	return (
		<div className='container'>
			<div className='container2of3'>
				<RepoList />
			</div>
			<div className='container1of3'>
				<Author />
			</div>
		</div>
	);
};

export default Home;
